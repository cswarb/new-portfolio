import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class RouterTriggerService {

	private animationComplete: Subject<any> = new Subject();

	constructor() { }

	public trigger(isDone: boolean): void {
		this.animationComplete.next(isDone);
	}

	public getTriggerState(): Subject<any> {
		return this.animationComplete;
	}

}
