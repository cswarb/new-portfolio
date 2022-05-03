import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, NavigationEnd } from "@angular/router";
import { RollTop } from "./router-animation";
import { trigger, transition } from "@angular/animations";
import { RouterTriggerService } from "./shared/router-trigger/router-trigger.service";
import { filter, map, Observable, tap } from "rxjs";

declare global {
  interface Window {
    ga: Function;
  }
}

@Component({
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
  public darkTheme$!: Observable<boolean>;

  constructor(
  	private route: ActivatedRoute,
    private router: Router,
    private _RouterTriggerService: RouterTriggerService
  ) {}

  animationComplete($event: any) {
      this._RouterTriggerService.trigger(true);
  }

  getState(outlet: any) {
    const animation = outlet.activatedRouteData["animation"] || {};
    return animation["value"] || null;
  }

  public ngOnInit(): void {
    this.darkTheme$ = this.router.events.pipe(
      filter((routerEvent: any) => routerEvent instanceof NavigationEnd),
      // tap((routerEvent: any) => {
      //   window.ga("set", "page", routerEvent.urlAfterRedirects);
      //   window.ga("send", "pageview");
      // }),
      map((routerEvent: any) => {
        if (routerEvent.url === "/about-contact" || routerEvent.url === "/index" || routerEvent.url === "/") {
          return true;
        };
        return false;
    }));
  }

  public onDeactivate(): void {
    window.scrollTo(0, 0);
  }

}
