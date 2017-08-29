import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';
import { DOCUMENT } from "@angular/platform-browser";

@Directive({
  selector: '[data-dir-fixed-block]'
})
export class FixedPostBlockDirective implements OnInit {

	private anchorPoint;
	private isFixed = false;

	@HostListener("window:scroll", [])
	onWindowScroll() {
		console.log(document.body.scrollTop + " " + this.anchorPoint);
		if(document.body.scrollTop >= this.anchorPoint) {
			this.element.nativeElement.style.position = "fixed";
			this.element.nativeElement.style.top = "39px";
			this.element.nativeElement.style.left = "64px";
			this.element.nativeElement.style.width = "43rem";
		} else {
			this.element.nativeElement.style.position = "relative";
			this.element.nativeElement.style.top = "0";
			this.element.nativeElement.style.left = "0";
			this.element.nativeElement.style.width = "auto";
		}
	}

	constructor(private element: ElementRef) { 
		this.element.nativeElement.style.background = "url('../assets/img/1.jpg')";
		this.element.nativeElement.style["background-size"] = "cover";

		// position: fixed;
	  //   left: 64px;
	  //   top: 30px;
	  //   width: 43rem;

	}

	ngOnInit() {
		this.anchorPoint = this.element.nativeElement.getBoundingClientRect().top;
	}

}
