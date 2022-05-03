import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[data-copy-to-clipboard]"
})
export class CopyToClipboardDirective {
	private copied = false;
	private timeout: number = 5000;

	@HostListener("click", ["$event"]) onClick($event: any) {
        this.copy($event);
    }

	constructor(
		private element: ElementRef
	) {
		
	}

	private copy($e: any) {
        try {
            $e.target.select();           
            const successful = (window.document as any).execCommand("copy");
            this.copied = true;
			this.toggleClass($e.target, "copied");
        } catch (error) {
        	this.copied = false;
			this.toggleClass($e.target, "not-copied");
            console.error("Failed to copy text: ", error);
        };
	}

	private toggleClass($elem: Element, appendedClass: string) {
		$elem.classList.add(appendedClass);
		setTimeout(() => {
			$elem.classList.remove(appendedClass);
		}, this.timeout);
	}

}
