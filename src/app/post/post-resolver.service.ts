import { Injectable } from "@angular/core";
import { Resolve, ActivatedRoute, ActivatedRouteSnapshot } from "@angular/router";

import { PostService } from "./post.service";

@Injectable()
export class PostResolverService implements Resolve<any> {

	constructor(
		private _PostService: PostService,
		private route: ActivatedRoute
	) {}

	resolve(route: ActivatedRouteSnapshot) {
		return this._PostService.getPost(route.paramMap.get("id"));
	}

}
