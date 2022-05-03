export class Posts {
	"posts": PostLoop[];
}

export class PostLoop {
	"title": string;
	"status": boolean;
	"description": string;
	"imageUrl": string;
	"link": string;
	"type": string;
	"isNew": boolean;
}