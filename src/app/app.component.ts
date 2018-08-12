import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, NavigationEnd } from "@angular/router";
import { RollTop } from "./router-animation";
import { trigger, transition } from "@angular/animations";
import { RouterTriggerService } from "./shared/router-trigger/router-trigger.service";
declare var ga: Function;

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
  public darkTheme = false;

  constructor(
  	private route: ActivatedRoute,
    private router: Router,
    private _RouterTriggerService: RouterTriggerService
  ) {

  }

  animationComplete($event) {
      this._RouterTriggerService.trigger(true);
  }

  getState(outlet) {
    const animation = outlet.activatedRouteData["animation"] || {};
    return animation["value"] || null;
  }

  public ngOnInit(): void {
	  this.router.events.subscribe((routerEvent: ActivatedRoute) => {
        //Can't seem to subscribe to custom data from router so this will have to do for now
		if(routerEvent instanceof NavigationEnd) {
			ga("set", "page", routerEvent.urlAfterRedirects);
			ga("send", "pageview");
			if (routerEvent.url === "/about-contact" || routerEvent.url === "/index" || routerEvent.url === "/") {
				this.darkTheme = true;
			} else {
				this.darkTheme = false;
			};
		}
    });
  }

  public onDeactivate(): void {
    window.scrollTo(0, 0);
  }

}
