import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "[data-copy-to-clipboard]"
})
export class CopyToClipboardDirective {

	constructor(private element: ElementRef) {
		
	}

	public copy() {
		// const emailField = $(element).find(".item-copy-field");
        try {
            // emailField.select();           
            const successful = document.execCommand("copy");
        } catch (error) {
            console.log("Failed to copy text. ", error);
        };
	}

}
