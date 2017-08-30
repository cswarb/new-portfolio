import { Injectable } from "@angular/core";
import { Resolve, ActivatedRoute } from "@angular/router";

import { PostService } from "./post.service";

@Injectable()
export class PostResolverService implements Resolve<any> {

	constructor(
		private _PostService: PostService,
		private route: ActivatedRoute
	) {

	}

	resolve() {
		this.route.params.subscribe(params => {
	       console.log(params);
	    });
		return this._PostService.getPost("tube-finder");
	}

}
