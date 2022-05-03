import { Component, OnInit } from "@angular/core";

@Component({
  selector: "[data-cmp-suggestion]",
  templateUrl: "./suggestion.component.html",
  styleUrls: ["./suggestion.component.scss"]
})
export class SuggestionComponent implements OnInit {
	// private imageUrl: string = "./assets/img/Flow_05_color.jpg"
	// private suggestion: any = {
	// 	"background-position": "center",
 //    	"background-image": `url(${this.imageUrl})`,
 //    	"background-size": "contain"
 //    };

	private timeClassPrefix: string = "modify--";
	private dateHours: number = new Date().getHours();

	constructor() {

	}

	ngOnInit() {

	}

	private getCurrentTimeValStr() {
		let tod: string = "";
		switch (true) {
			case (this.dateHours > 5 && this.dateHours < 9):
				tod = "sunrise";
				break;
			case (this.dateHours > 9 && this.dateHours < 12):
				tod = "morning";
				break;
			case (this.dateHours > 12 && this.dateHours < 15):
				tod = "afternoon";
				break;
			case (this.dateHours > 15 && this.dateHours < 17):
				tod = "evening";
				break;
			case (this.dateHours > 17 && this.dateHours < 21):
				tod = "sunset";
				break;
			default:
				tod = "default";
				break;
		};
		return tod;
	}

	private getActiveTimeClass() {
		return (this.timeClassPrefix + this.getCurrentTimeValStr()).toString().toLowerCase();
	}

}
