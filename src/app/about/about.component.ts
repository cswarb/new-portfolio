import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

	private emailAddress: string = "chris@chrismakesweb.co.uk";

	constructor() { }

	ngOnInit() {
	}

}
