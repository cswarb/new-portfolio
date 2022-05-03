import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HeadersService } from "../shared/headers/headers.service";
import { AppConstants } from "../app.constants";
import { Observable } from "rxjs";

@Injectable()
export class PhotoStoryService {

	constructor(
		private _Http: HttpClient,
		private _AppConstants: AppConstants,
		private _HeadersService: HeadersService
	) {}

	getPhotoStory(postId: string): Observable<any> {
		return this._Http
			.get(this._AppConstants.BASE_URL + this._AppConstants.PHOTO_STORY_CONTENT_DIR + postId + "/post.json", {
				headers: this._HeadersService.getHeaders()
			});
	}

}
