import { Directive, ElementRef, HostListener, HostBinding, OnInit } from '@angular/core';
import { DOCUMENT } from "@angular/platform-browser";

@Directive({
  selector: '[data-dir-fixed-block]'
})
export class FixedPostBlockDirective implements OnInit {

	private anchorPointStartElement;
	private anchorPointStart;
	private anchorPointEndElement;
	private anchorPointEnd;
	private anchorStartRef;

	@HostBinding("class.resting") resting: any = false;
	@HostBinding("class.fixed") fixed: any = false;
	@HostBinding("class.end") end: any = false;

	@HostListener("window:scroll", this.onWindowScroll)
	public onWindowScroll() {
		this.initialiseScrollingLogic();
	}

	@HostListener("window:resize", this.onWindowResize)
	public onWindowResize() {
		this.anchorPointStart = this.getOffset(this.anchorPointStartElement);
		this.anchorPointEnd = this.getOffset(this.anchorPointEndElement);
	}

	constructor(private element: ElementRef) { 
		this.element.nativeElement.style.background = "url('../assets/img/snow.png')";
		this.element.nativeElement.style["background-size"] = "cover";
	}

	ngOnInit() {
		this.anchorPointStartElement = document.getElementById("scroll-anchor-ref");
		this.anchorPointEndElement = document.getElementById("scroll-anchor-ref-end");
		this.anchorPointStart = this.getOffset(this.anchorPointStartElement);
		this.anchorPointEnd = this.getOffset(this.anchorPointEndElement);
	}

	public initialiseScrollingLogic(): void {
		if(document.body.scrollTop >= (this.anchorPointStart.top - this.vhToPixel(5))) {
			this.setState("fixed");
			this.element.nativeElement.style.left = this.pxString(this.anchorPointStart.left);
			this.element.nativeElement.style.width = this.pxString(this.anchorPointStartElement.offsetWidth);
		} else {
			this.setState("resting");
		};

		//Makes sure it stops at the last paragraph element
		if(window.pageYOffset >= (this.anchorPointEnd.top - this.vhToPixel(5))) {
			this.setState("end");
			this.element.nativeElement.style.top = (this.pxString(this.anchorPointEnd.top - this.anchorPointStart.top));
			this.element.nativeElement.style.width = this.pxString(this.anchorPointStartElement.offsetWidth);
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
		return (window.innerHeight / 100) * multiplier;
	}

	public pxString(value: number): string {
		return value.toString() + "px";
	}

	public setState(state: string): void {
		switch(state) {
			case "fixed":
				this.resting = this.end = false; this.fixed = true;
			break;
			case "resting":
				this.resting = true; this.fixed = this.end = false;
			break;
			case "end":
				this.resting = this.fixed = false; this.end = true;
			break;
		};
	}

}
