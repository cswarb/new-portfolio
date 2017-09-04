import { Component, OnInit, HostListener } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Post } from "./post.model";

@Component({
  selector: "[data-cmp-post]",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.scss"]
})
export class PostComponent implements OnInit {

	private post: Post = new Post();

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

	public createImage(imageUrl: string) {
		return {
			"background": `url(${imageUrl})`,
			"backgroundSize": "cover",
			"width": "100%",
			"height": "auto"
		}
	}

}
