import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

//Import all components at the top level that require routing
//or modules (must set up child routes file and inital components array in module definition)

import { IndexComponent } from "./index/index.component";
import { AboutComponent } from "./about/about.component";
import { PostComponent } from "./post/post.component";

//Either configure routes in this Routing Module or within the module itself but not in both.
@NgModule({
	imports: [
		RouterModule.forRoot([
			/* Define app module routes here, e.g., to lazily load a module
		    (do not place feature module routes here, use an own -routing.module.ts in the feature instead)
		    */
			{
				path: "",
				redirectTo: "index",
				pathMatch: "full"
			},
			{
				path: "index",
				component: IndexComponent
			},
			{
				path: "about-contact",
				component: AboutComponent
			},
			{
				path: "post/:id",
				component: PostComponent
			},
			{
				path: "**",
				component: IndexComponent
			}
		])
	],
	exports: [RouterModule]
})
export class AppRoutingModule {}