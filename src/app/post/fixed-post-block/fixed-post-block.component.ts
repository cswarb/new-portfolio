import { Component, ElementRef, HostListener, Input, OnInit, OnChanges } from "@angular/core";
import { Section } from "../post.model";
import { RouterTriggerService } from "../../shared/router-trigger/router-trigger.service";
import { Router } from "@angular/router";

@Component({
  selector: "[data-cmp-fixed-block]",
  templateUrl: "./fixed-post-block.component.html",
  styleUrls: ["./fixed-post-block.component.scss"]
})
export class FixedPostBlockComponent implements OnChanges, OnInit {

	private anchorPointStartElement: any;
	private anchorPointStart: any;
	private anchorPointEndElement: any;
	private anchorPointEnd: any;
	private anchorStartRef: any;
	
	public anchorProps = {
		"width": "",
		"top": ""
	};

	public state: string = "";
	@Input() defaultImageUrl: undefined | string = "";
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
		private _RouterTriggerService: RouterTriggerService,
		private router: Router
	) {
		
	}

	ngOnInit() {
		this._RouterTriggerService.getTriggerState().subscribe((isRouterAnimationComplete: boolean) => {
			this.anchorPointStartElement = document.getElementById("scroll-anchor-ref");
			this.anchorPointEndElement = document.getElementById("scroll-anchor-ref-end");
			this.anchorPointStart = this.getOffset(this.anchorPointStartElement);
			this.anchorPointEnd = this.getOffset(this.anchorPointEndElement);
		});
	}

	ngOnChanges() {
		//Wait for dom to re-render
		setTimeout(() => {
			this.anchorPointStartElement = document.getElementById("scroll-anchor-ref");
			this.anchorPointEndElement = document.getElementById("scroll-anchor-ref-end");
			this.anchorPointStart = this.getOffset(this.anchorPointStartElement);
			this.anchorPointEnd = this.getOffset(this.anchorPointEndElement);
		}, 100);
	}

	public initialiseAnchor(): void {
		if (!this.anchorPointStart || !this.anchorPointEnd) return;

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
