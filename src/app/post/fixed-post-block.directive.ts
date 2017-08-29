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

	@HostBinding('class.resting') resting: any = false;
	@HostBinding('class.fixed') fixed: any = false;
	@HostBinding('class.end') end: any = false;

	@HostListener("window:scroll", this.onWindowScroll)
	public onWindowScroll() {
		if(document.body.scrollTop >= (this.anchorPointStart.top - this.vhToPixel(5))) {
			this.resting = false;
			this.fixed = true;
			this.end = false;
			this.element.nativeElement.style.left = (this.anchorPointStart.left + "px");
			this.element.nativeElement.style.width = (this.anchorPointStartElement.offsetWidth.toString() + "px");
		} else {
			this.resting = true;
			this.fixed = false;
			this.end = false;
		}

		// console.log(window.pageYOffset >= this.anchorPointStart.top);
		//Makes sure it sticks at the last paragraph element
		if(window.pageYOffset >= (this.anchorPointEnd.top - this.vhToPixel(5))) {
			this.resting = false;
			this.fixed = false;
			this.end = true;
			this.element.nativeElement.style.top = ((this.anchorPointEnd.top - this.anchorPointStart.top) + "px");
			this.element.nativeElement.style.width = (this.anchorPointStartElement.offsetWidth.toString() + "px");
		}

		

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

	public getOffset(el: any) {
		if(!el) return;
		el = el.getBoundingClientRect();
		return {
			left: el.left + window.scrollX,
			top: el.top + window.scrollY
		}
	}

	public vhToPixel(multiplier: number): number {
		return (window.innerHeight / 100) * multiplier;
	}

}
