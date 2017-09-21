import { Component, OnInit } from "@angular/core";

@Component({
  selector: "[data-cmp-filters]",
  templateUrl: "./filters.component.html",
  styleUrls: ["./filters.component.scss"]
})
export class FiltersComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

	public filterPosts(filter: string): void {
		
	}

}
