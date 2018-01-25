import { Component, Directive, ElementRef, HostListener, Input, HostBinding, OnInit, AfterViewInit } from "@angular/core";
import { DOCUMENT } from "@angular/platform-browser";
import { Post, Section } from "../post.model";
import { ImageData } from "./image.model";
import { RouterTriggerService } from "../../shared/router-trigger/router-trigger.service";

@Component({
  selector: "[data-cmp-fixed-block]",
  templateUrl: "./fixed-post-block.component.html",
  styleUrls: ["./fixed-post-block.component.scss"]
})
export class FixedPostBlockComponent  {

	private anchorPointStartElement;
	private anchorPointStart;
	private anchorPointEndElement;
	private anchorPointEnd;
	private anchorStartRef;
	
	public anchorProps = {
		"width": "",
		"top": ""
	};

	public state: string = "";
	@Input() defaultImageUrl: string = "";
	@Input() sectionData: Section[] = [];

	@HostListener("window:scroll", ["$event"])
	public onWindowScroll() {
		//Initialise the scrolling logic
		this.initialiseAnchor();
	}

	@HostListener("window:resize", ["$event"])
	public onWindowResize() {
		//Reset the offsets
		this.anchorPointStartElement = document.getElementById("scroll-anchor-ref");
		this.anchorPointEndElement = document.getElementById("scroll-anchor-ref-end");
		this.anchorPointStart = this.getOffset(this.anchorPointStartElement);
		this.anchorPointEnd = this.getOffset(this.anchorPointEndElement);
		this.initialiseAnchor();
	}

	constructor(
		private element: ElementRef,
		private _RouterTriggerService: RouterTriggerService
	) {
		this._RouterTriggerService.getTriggerState().subscribe((isRouterAnimationComplete: boolean) => {
            this.anchorPointStartElement = document.getElementById("scroll-anchor-ref");
			this.anchorPointEndElement = document.getElementById("scroll-anchor-ref-end");
			this.anchorPointStart = this.getOffset(this.anchorPointStartElement);
			this.anchorPointEnd = this.getOffset(this.anchorPointEndElement);
        });
	}

	public initialiseAnchor(): void {
		if(!this.anchorPointStart) return;
		if(window.scrollY >= (this.anchorPointStart.top - this.vhToPixel(5))) {
			this.setState("fixed");
			// this.anchorProps["width"] = this.pxString(this.anchorPointStartElement.offsetWidth);
		} else {
			this.setState("resting");
		};

		//Makes sure it stops at the last paragraph element
		if(window.pageYOffset >= (this.anchorPointEnd.top - this.vhToPixel(5))) {
			this.setState("end");
			this.anchorProps["top"] = (this.pxString(this.anchorPointEnd.top - this.anchorPointStart.top));
			// this.anchorProps["width"] = this.pxString(this.anchorPointStartElement.offsetWidth);
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
