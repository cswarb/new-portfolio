import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[data-copy-to-clipboard]"
})
export class CopyToClipboardDirective {

	private copied = false;

	@HostListener("click", ["$event"]) onClick($event) {
        this.copy($event);
    }

	constructor(private element: ElementRef) {
		
	}

	private copy($e) {
		console.log($e);
        try {
            $e.target.select();           
            const successful = document.execCommand("copy");
            this.copied = true;
            this.toggleClass(true, $e.target);
        } catch (error) {
        	this.copied = false;
        	this.toggleClass(false, $e.target);
            console.log("Failed to copy text. ", error);
        };
	}

	private toggleClass(isCopied: boolean, $elem: any) {
		if(isCopied) {
			$elem.classList.add("copied");
		};
		setTimeout(() => {
			$elem.classList.remove("copied");
		}, 5000);
	}

}
