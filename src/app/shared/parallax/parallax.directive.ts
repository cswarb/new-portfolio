import { Directive, AfterViewInit, OnDestroy, ElementRef } from "@angular/core";
import * as Rellax from "Rellax";

@Directive({
  selector: "[data-cmp-parallax]"
})
export class ParallaxDirective implements AfterViewInit, OnDestroy {
	private rellax = null;
	private opts = {
		"speed": 1.5,
		"center": true,
		"round": false
	};

	constructor(private element: ElementRef) {}

	ngAfterViewInit() {
		this.rellax = new Rellax(this.getClassList(this.element), this.opts);
	}

	ngOnDestroy() {
		this.rellax.destroy();
	}

	private getClassList(element: ElementRef): string {
		let classes = [];
		this.element.nativeElement.classList.forEach((elementClass: string) => {
			classes.push(elementClass);
		});
		if(classes && classes.length) {
			classes = classes.map((elemClass: string) => {
				return "." + elemClass;
			});
		};
		return classes.join("");
	}

}