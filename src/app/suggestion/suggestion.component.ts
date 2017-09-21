import { Component, OnInit } from "@angular/core";

@Component({
  selector: "[data-cmp-suggestion]",
  templateUrl: "./suggestion.component.html",
  styleUrls: ["./suggestion.component.scss"]
})
export class SuggestionComponent implements OnInit {
	private imageUrl: string = "./assets/img/Flow_05_color.jpg"
	private suggestion: any = {
		"background-position": "center",
    	"background-image": `url(${this.imageUrl})`,
    	"background-size": "contain"
    };

	constructor() { }

	ngOnInit() {
	}

}
