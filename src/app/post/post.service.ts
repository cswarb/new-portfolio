import { Injectable } from "@angular/core";
import { HeadersService } from "../shared/headers/headers.service";
import { AppConstants } from "../app.constants";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class PostService {

	constructor(
		private _Http: HttpClient,
		private _AppConstants: AppConstants,
		private _HeadersService: HeadersService
	) {}

	getPost(postId: string): Observable<any> {
		return this._Http
			.get(this._AppConstants.BASE_URL + this._AppConstants.POSTS_CONTENT_DIR + postId + "/post.json", {
				headers: this._HeadersService.getHeaders()
			});
	}

	getPosts(): Observable<any> {
		return this._Http
			.get(this._AppConstants.BASE_URL + this._AppConstants.CONTENT_DIR + "/posts.json", {
				headers: this._HeadersService.getHeaders()
			});
	}

}
