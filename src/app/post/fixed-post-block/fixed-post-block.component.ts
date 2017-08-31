import { Component, Directive, ElementRef, HostListener, Input, HostBinding, OnInit, AfterViewInit } from "@angular/core";
import { DOCUMENT } from "@angular/platform-browser";
import { Post, Section } from "../post.model";
import { ImageData } from "./image.model";

@Component({
  selector: "[data-cmp-fixed-block]",
  templateUrl: "./fixed-post-block.component.html",
  styleUrls: ["./fixed-post-block.component.scss"]
})
export class FixedPostBlockComponent implements AfterViewInit  {

	private anchorPointStartElement;
	private anchorPointStart;
	private anchorPointEndElement;
	private anchorPointEnd;
	private anchorStartRef;

	private images: ImageData[] = [];
	private activeNumber: number = 1;
	private anchorProps = {
		"width": "",
		"top": ""
	};
	private activeImage: number = 1;
	private state: string = "";
	@Input() defaultImageUrl: string = "";
	@Input() sectionData: Section[] = [];

	@HostListener("window:scroll", this.onWindowScroll)
	public onWindowScroll() {
		//Initialise the scrolling logic and image switching logic
		this.initialiseAnchor();
		this.initialiseImageSwitching();
	}

	@HostListener("window:resize", this.onWindowResize)
	public onWindowResize() {
		//Reset the offsets
		this.anchorPointStart = this.getOffset(this.anchorPointStartElement);
		this.anchorPointEnd = this.getOffset(this.anchorPointEndElement);
		this.createImageObject();
	}

	constructor(private element: ElementRef) {
	}

	ngAfterViewInit() {
		//Ensure the post info component has rendered - Needs better implementation
		setTimeout(() => {
			//Store the references we need
			this.anchorPointStartElement = document.getElementById("scroll-anchor-ref");
			this.anchorPointEndElement = document.getElementById("scroll-anchor-ref-end");
			this.anchorPointStart = this.getOffset(this.anchorPointStartElement);
			this.anchorPointEnd = this.getOffset(this.anchorPointEndElement);

			//Create an object with our images and offsets in
			this.createImageObject();
		});
	}

	public createImageObject(): void {
		//Empty it if we resize the viewport
		this.images.length = 0;
		//Create an array from NodeList
		let images = Array.from(document.querySelectorAll("[data-image-trigger]"));
		//Create an object based off the NodeList data we can use later on
		for(var i = 0; i < images.length; i++) {
			let image = images[i];
			this.images.push(
				new ImageData(
					i+1,
					image.getAttribute("data-image-trigger"),
					this.getOffset(image).top
				)
			);
		};
	}

	public initialiseImageSwitching() {
		let newImage = null;
		this.images.forEach((image: ImageData) => {
			//Check the offset
			if(document.body.scrollTop >= (image.offsetTop - this.vhToPixel(50))) {
				//Don't assign the props to the view yet - it will cause a jarring switch between multiple images
				newImage = image;
			};
		});
		//Loop is done, no assign the activeImage the correct index
		if(newImage) {
			this.activeImage = this.activeNumber = newImage.id;
		};
	}

	public initialiseAnchor(): void {
		if(document.body.scrollTop >= (this.anchorPointStart.top - this.vhToPixel(5))) {
			this.setState("fixed");
			this.anchorProps["width"] = this.pxString(this.anchorPointStartElement.offsetWidth);
		} else {
			this.setState("resting");
		};

		//Makes sure it stops at the last paragraph element
		if(window.pageYOffset >= (this.anchorPointEnd.top - this.vhToPixel(5))) {
			this.setState("end");
			this.anchorProps["top"] = (this.pxString(this.anchorPointEnd.top - this.anchorPointStart.top));
			this.anchorProps["width"] = this.pxString(this.anchorPointStartElement.offsetWidth);
		};
	}

	public getOffset(el: any): any {
		if(!el) return;
		el = el.getBoundingClientRect();
		return {
			"left": el.left + window.scrollX,
			"top": el.top + window.scrollY
		}
	}

	public vhToPixel(multiplier: number): number {
		return (window.innerHeight / 100) * (multiplier ? multiplier : 1);
	}

	public pxString(value: number): string {
		return value.toString() + "px";
	}

	public setState(state: string): void {
		this.state = state ? state : "resting";
	}

}
