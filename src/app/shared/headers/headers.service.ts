import { Injectable } from "@angular/core";
import { Http, Response, URLSearchParams } from "@angular/http";
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class HeadersService {

	constructor() { }

	getHeaders(): HttpHeaders {
		var headers = new HttpHeaders();
		headers.append("Accept", "application/json");
		headers.append("Content-Type", "application/json");
		return headers;
	}

}
