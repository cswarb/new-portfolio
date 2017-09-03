import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "[data-cmp-index]",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.scss"]
})
export class IndexComponent implements OnInit {

	private posts: any;

	constructor(private route: ActivatedRoute) { }

	ngOnInit() {
		this.posts = this.route.snapshot.data["posts"];
	}

}
