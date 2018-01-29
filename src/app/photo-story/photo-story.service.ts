import { Injectable } from "@angular/core";
import { Http, Response, URLSearchParams, Headers } from "@angular/http";
import { HeadersService } from "../shared/headers/headers.service";
import { AppConstants } from "../app.constants";
import "rxjs/add/operator/toPromise";

@Injectable()
export class PhotoStoryService {

	constructor(
		private _Http: Http,
		private _AppConstants: AppConstants,
		private _HeadersService: HeadersService
	) {}

	getPhotoStory(postId: string): Promise<any> {
		return this._Http
			.get(this._AppConstants.BASE_URL + this._AppConstants.PHOTO_STORY_CONTENT_DIR + postId + "/post.json", {
				headers: this._HeadersService.getHeaders()
			})
			.toPromise()
			.then((response: any) => {
				return Promise.resolve(response.json());
			})
			.catch((error: any) => {
				return Promise.reject(error);
			});
	}

}
