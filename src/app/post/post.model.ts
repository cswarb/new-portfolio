export class Post {
	"type": string;
	"tag": string;
	"title": string;
	"url": string;
	"imageUrl": string;
	"meta": Meta;
	"introduction": Introduction;
	"sections": Section[];
}

export class Meta {
	"splashText": string;
	"role": string;
	"year": string;
	"technologies": Technologies[];
}

export class Technologies {
	"name": string;
}

export class Introduction {
	"title": string;
	"content": string;
}

export class Section {
	"id": number;
	"imageUrl": string;
	"title": string;
	"content": string;
}