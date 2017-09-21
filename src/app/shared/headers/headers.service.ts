import { Injectable } from "@angular/core";
import { Http, Response, URLSearchParams, Headers } from "@angular/http";

@Injectable()
export class HeadersService {

	constructor() { }

	getHeaders() {
		const headers = new Headers();
		headers.append("Accept", "application/json");
		headers.append("Content-Type", "application/json");
		return headers;
	}

}
