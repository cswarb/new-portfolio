import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "[data-cmp-post-info]",
  templateUrl: "./post-info.component.html",
  styleUrls: ["./post-info.component.scss"]
})
export class PostInfoComponent implements OnInit {

	@Input() splashText: string = "";
	@Input() year: string = "";
	@Input() role: string = "";
	@Input() technologies: any = [];

	constructor() { }

	ngOnInit() {
	}

}
