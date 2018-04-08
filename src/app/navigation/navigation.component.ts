import { Component, OnInit } from "@angular/core";

@Component({
	moduleId: module.id,
	selector: "[data-cmp-navigation]",
	templateUrl: "./navigation.component.html",
	styleUrls: ["./navigation.component.scss"]
})
export class NavigationComponent implements OnInit {
	public date: any = {
		year: new Date().getFullYear()
	}

	constructor() { }

	ngOnInit() {
	}

}
