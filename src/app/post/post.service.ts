import { Injectable } from "@angular/core";
import { Http, Response, URLSearchParams, Headers } from "@angular/http";
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { HeadersService } from "../shared/headers/headers.service";
import { AppConstants } from "../app.constants";
import "rxjs/add/operator/toPromise";

@Injectable()
export class PostService {

	constructor(
		private _Http: HttpClient,
		private _AppConstants: AppConstants,
		private _HeadersService: HeadersService
	) {}

	getPost(postId: string): Promise<any> {
		return this._Http
			.get(this._AppConstants.BASE_URL + this._AppConstants.POSTS_CONTENT_DIR + postId + "/post.json", {
				headers: this._HeadersService.getHeaders()
			})
			.toPromise()
			.then((response: any) => {
				return Promise.resolve(response);
			})
			.catch((error: any) => {
				return Promise.reject(error);
			});
	}

	getPosts(): Promise<any> {
		return this._Http
			.get(this._AppConstants.BASE_URL + this._AppConstants.CONTENT_DIR + "/posts.json", {
				headers: this._HeadersService.getHeaders()
			})
			.toPromise()
			.then((response: any) => {
				return Promise.resolve(response);
			})
			.catch((error: any) => {
				return Promise.reject(error);
			});
	}

}
