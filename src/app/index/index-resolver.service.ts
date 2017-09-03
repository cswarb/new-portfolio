import { Injectable } from "@angular/core";
import { Resolve, ActivatedRoute, ActivatedRouteSnapshot } from "@angular/router";

import { PostService } from "../post/post.service";

@Injectable()
export class IndexResolverService implements Resolve<any> {

	constructor(
		private _PostService: PostService,
		private route: ActivatedRoute
	) {}

	resolve(route: ActivatedRouteSnapshot) {
		return this._PostService.getPosts()
			.catch(() => {
				alert("Posts not found");
				return false;
			});
	}

}
