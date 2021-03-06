import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

//Import all components at the top level that require routing
//or modules (must set up child routes file and inital components array in module definition)

import { IndexComponent } from "./index/index.component";
import { AboutComponent } from "./about/about.component";
import { PostComponent } from "./post/post.component";
import { PhotoStoryComponent } from "./photo-story/photo-story.component";

import { PostResolverService } from "./post/post-resolver.service";
import { IndexResolverService } from "./index/index-resolver.service";
import { PhotoStoryResolverService } from "./photo-story/photo-story-resolver.service";

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
				data: {
					animation: { 
						value: "index"
					}
				},
				resolve: {
					posts: IndexResolverService
				}
			},
			{
				path: "about-contact",
				data: {
					animation: {
						value: "about"
					}
				},
				component: AboutComponent
			},
			{
				path: "post/:id",
				data: {
					animation: {
						value: "post"
					}
				},
				component: PostComponent,
				resolve: {
					post: PostResolverService
				}
			},
			{
				path: "photo-story/:id",
				data: {
					animation: {
						value: "post"
					}
				},
				component: PhotoStoryComponent,
				resolve: {
					post: PhotoStoryResolverService
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