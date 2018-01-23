import { Directive, OnInit, ElementRef, HostListener } from "@angular/core";
import { AfterViewInit } from "@angular/core/src/metadata/lifecycle_hooks";
import { Element } from "@angular/compiler";

@Directive({
	selector: "[data-lazy-load]"
})
export class LazyLoadDirective implements OnInit, AfterViewInit {
	private image: any = null;
	private imageSrc: string = null;
	private isSrcSet: boolean = false;
	private res: number = 1;

	constructor(
	private element: ElementRef
	) {

	}

	ngOnInit() {

	}

	ngAfterViewInit() {
		this.image = this.element.nativeElement;
		this.imageSrc = this.element.nativeElement.dataset["lazySrc"];
		this.isSrcSet = this.element.nativeElement.dataset["isSrcSet"];
		this.res = this.element.nativeElement.dataset["res"];

		window.addEventListener("scroll", this.inViewCallback.bind(this));
	}

	public inViewCallback(): void {
		if (this.isInViewport(this.image)) {
			//Set the image src
			this.isSrcSet ? 
				this.element.nativeElement.setAttribute("srcset", this.imageSrc + this.getRes()) : 
				this.element.nativeElement.setAttribute("src", this.imageSrc);

			//Fade in the span above to make it less jarring
			this.element.nativeElement.parentElement.classList.add("lazyimage--loaded");

			//Unbind the event
			window.removeEventListener("scroll", this.inViewCallback);
		};
	}

	private isInViewport(el: any): boolean {
		var image = el.getBoundingClientRect();
		return (
			image.bottom >= 0 &&
			image.right >= 0 &&

			image.top <= (
			window.innerHeight ||
			document.documentElement.clientHeight) &&

			image.left <= (
			window.innerWidth ||
			document.documentElement.clientWidth)
		);
	}

	private getRes(): string {
		return " " + this.res + "x";
	}

}
