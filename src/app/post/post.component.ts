import { Component, OnInit, HostListener } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Post } from "./post.model";

@Component({
  selector: "[data-cmp-post]",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.scss"]
})
export class PostComponent implements OnInit {

	public post: Post = new Post();

	@HostListener("window:resize", ["$event"])
	public onWindowResize() {
		this.isMobile();
	}

	constructor(private route: ActivatedRoute) { }

	ngOnInit() {
		//Subscribe to new data changes
		this.route.data.subscribe((params) => {
			window.scrollTo(0, 0);
			this.post = params['post'];
			this.isMobile();
		});
		
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
