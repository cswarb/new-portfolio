import { Component, OnInit, HostListener } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "[data-cmp-post]",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.scss"]
})
export class PostComponent implements OnInit {

	@HostListener("window:resize", this.onWindowResize)
	public onWindowResize() {
		this.isMobile();
	}

	constructor() { }

	ngOnInit() {
		this.isMobile();
	}

	public isMobile(): boolean {
		if (window.matchMedia("(max-width: 55rem)").matches) {
			return false
		};
		return true;
	}

}
