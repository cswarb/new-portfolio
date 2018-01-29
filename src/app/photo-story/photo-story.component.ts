import { Component, OnInit, HostListener } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Post } from "../post/post.model";

@Component({
  selector: "[data-cmp-photo-story]",
  templateUrl: "./photo-story.component.html",
  styleUrls: ["./photo-story.component.scss"]
})
export class PhotoStoryComponent implements OnInit {

	public post: Post = new Post();

	@HostListener("window:resize", ["$event"])
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
