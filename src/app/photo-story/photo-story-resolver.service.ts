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
		const id = route.paramMap.get("id") as string;
		return this._PhotoStoryService.getPhotoStory(id);
	}

}
