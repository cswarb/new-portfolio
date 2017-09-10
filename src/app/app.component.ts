import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, NavigationEnd } from "@angular/router";
import { RollTop, Jelly } from "./router-animation";
import { trigger, stagger, animate, style, group, query, transition } from "@angular/animations";
import { RouterTriggerService } from "./shared/router-trigger/router-trigger.service";

@Component({
    moduleId: module.id,
    selector: "[data-cmp-root]",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
    animations: [
      trigger("routerTransition", [
        transition("* <=> *", RollTop)
      ])
    ]
})
export class AppComponent implements OnInit {
  private index = false;

  constructor(
  	private route: ActivatedRoute,
    private router: Router,
    private _RouterTriggerService: RouterTriggerService
  ) {}

  animationComplete($event) {
      this._RouterTriggerService.trigger(true);
  }

  getState(outlet) {
    const animation = outlet.activatedRouteData["animation"] || {};
    return animation["value"] || null;
  }

  public ngOnInit(): void {
    this.router.events.subscribe((val) => {
        if(val instanceof NavigationEnd && (val.url === "/index" || val.url === "/")) {
          this.index = true;
        } else {
          this.index = false;
        };
    });
  }

  public onDeactivate(): void {
    document.body.scrollTop = 0;
  }

}
