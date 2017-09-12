export class Post {
	"type": string;
	"tag": string;
	"title": string;
	"outbound": OutboundMeta;
	"imageUrl": string;
	"meta": Meta;
	"finalThoughts": string;
	"introduction": Introduction;
	"sections": Section[];
	"images": Images[];
}

export class OutboundMeta {
	"alive": boolean;
	"url": string;
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

export class Images {
	"title": string;
	"imageUrl": string;
}