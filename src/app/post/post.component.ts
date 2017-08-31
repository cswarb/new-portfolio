import { Component, OnInit, HostListener } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "[data-cmp-post]",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.scss"]
})
export class PostComponent implements OnInit {

	private post: any = {};

	@HostListener("window:resize", this.onWindowResize)
	public onWindowResize() {
		this.isMobile();
	}

	constructor(private route: ActivatedRoute) { }

	ngOnInit() {
		this.post = this.route.snapshot.data["post"];
		this.isMobile();
	}

	public isMobile(): boolean {
		if (window.matchMedia("(max-width: 55rem)").matches) {
			return true
		};
		return false;
	}

}
