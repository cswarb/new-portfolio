import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  moduleId: module.id,
  selector: "[data-cmp-root]",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "app";

  constructor(
  	private route: ActivatedRoute,
    private router: Router
  ) { }

  public ngOnInit(): void {

  }

  public onDeactivate(): void {
    document.body.scrollTop = 0;
  }

}
