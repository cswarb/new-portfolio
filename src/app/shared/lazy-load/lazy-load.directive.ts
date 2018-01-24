import { Directive, OnInit, ElementRef, HostListener } from "@angular/core";
import { AfterViewInit } from "@angular/core/src/metadata/lifecycle_hooks";
import { Element } from "@angular/compiler";

@Directive({
	selector: "[data-lazy-load]"
})
export class LazyLoadDirective implements OnInit, AfterViewInit {
	private imageContainer: any = null;
	private images: any = [];
	//Bind creates a new function reference so removeEventListener won't work with storing the function with .bind first
	private inViewBinded = this.inViewCallback.bind(this);

	constructor(
	private element: ElementRef
	) {

	}

	ngOnInit() {
		
	}

	ngAfterViewInit() {
		this.imageContainer = this.element.nativeElement;
		this.images = Array.from(this.element.nativeElement.children);
		window.addEventListener("scroll", this.inViewBinded);
	}

	public inViewCallback(): void {
		if (this.isInViewport(this.imageContainer)) {
			if (!this.images.length) return;
			this.images.forEach(image => {
				//Set the image src
				let src = image.dataset["lazySrc"];
				let isSrcSet = image.dataset["isSrcSet"];
				let res = image.dataset["res"];

				isSrcSet ?
					image.setAttribute("srcset", src + this.getRes(res)) :
					image.setAttribute("src", src);
			});

			//Fade in the span above to make it less jarring
			this.element.nativeElement.classList.add("lazyimage--loaded");			
			
			//Unbind the event
			window.removeEventListener("scroll", this.inViewBinded);
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

	private getRes(res: number): string {
		return " " + res + "x";
	}

}
