import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Posts } from "../post/posts.model";

@Component({
  selector: "[data-cmp-index]",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.scss"]
})
export class IndexComponent implements OnInit {

	private posts: Posts[];

	constructor(
		private route: ActivatedRoute,
		private router: Router
	) { }

	ngOnInit() {
		this.posts = this.route.snapshot.data["posts"];
	}

	public getPost(post): void {
		if(post.status) {
			this.router.navigate(["/post/", post.link]);
		};
	}

}
