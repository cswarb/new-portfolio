export class ImageData {
	public id: number;
	public imageSrc: string;
	public offsetTop: number;

	constructor(id: number, imageSrc: string, offsetTop: number) {
		this.id = id;
		this.imageSrc = imageSrc;
		this.offsetTop = offsetTop;
	}
}