import { Injectable } from "@angular/core";
import { Resolve, ActivatedRoute, ActivatedRouteSnapshot } from "@angular/router";

import { PhotoStoryService } from "./photo-story.service";

@Injectable()
export class PhotoStoryResolverService implements Resolve<any> {

	constructor(
		private _PhotoStoryService: PhotoStoryService,
		private route: ActivatedRoute
	) {}

	resolve(route: ActivatedRouteSnapshot) {
		return this._PhotoStoryService.getPhotoStory(route.paramMap.get("id"));
	}

}
