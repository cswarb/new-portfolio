import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

//Import all components at the top level that require routing
//or modules (must set up child routes file and inital components array in module definition)

import { IndexComponent } from "./index/index.component";
import { AboutComponent } from "./about/about.component";
import { PostComponent } from "./post/post.component";

import { PostResolverService } from "./post/post-resolver.service";
import { IndexResolverService } from "./index/index-resolver.service";

//Either configure routes in this Routing Module or within the module itself but not in both.
@NgModule({
	imports: [
		RouterModule.forRoot([
			{
				path: "",
				redirectTo: "index",
				pathMatch: "full"
			},
			{
				path: "index",
				component: IndexComponent,
				resolve: {
					posts: IndexResolverService
				}
			},
			{
				path: "about-contact",
				component: AboutComponent
			},
			{
				path: "post/:id",
				component: PostComponent,
				resolve: {
					post: PostResolverService
				}
			},
			{
				path: "**",
				redirectTo: "index"
			}
		])
	],
	exports: [RouterModule]
})
export class AppRoutingModule {}