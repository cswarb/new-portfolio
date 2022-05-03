import { Component, OnInit, Input, HostListener, OnChanges } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Post, Section } from "../../post.model";
import { ImageData } from "../image.model";
import { RouterTriggerService } from "../../../shared/router-trigger/router-trigger.service";
import { animate, style, transition, trigger } from "@angular/animations";

@Component({
  selector: "[data-cmp-post-image]",
  templateUrl: "./post-image.component.html",
  animations: [
    trigger(
      "fadeInAnimation", [
        transition(":enter", [
          style({opacity: 0}),
          animate("500ms", style({opacity: 1}))
        ])
      ]
    )
  ],
  styleUrls: ["./post-image.component.scss"]
})
export class PostImageComponent implements OnInit, OnChanges {

    images: ImageData[] = [];
    activeImage: number = 1;
    activeNumber: string = "01";
    @Input() sectionData: Section[] = [];

    @HostListener("window:scroll", ["$event"])
    public onWindowScroll() {
        //Initialise the image switching logic
        this.initialiseImageSwitching();
    }

    @HostListener("window:resize", ["$event"])
    public onWindowResize() {
        this.createImageObject();
    }

    constructor(
        private route: ActivatedRoute,
        private _RouterTriggerService: RouterTriggerService,
    ) {
        
    }

    ngOnInit() {
        this._RouterTriggerService.getTriggerState().subscribe((isRouterAnimationComplete: boolean) => {
            isRouterAnimationComplete && this.createImageObject();
        });
    }

    ngOnChanges() {
        this.createImageObject();
    }

    public createImageObject(): void {
        //Empty it if we resize the viewport
        this.images.length = 0;
        //Create an array from NodeList
        let images = Array.from(document.querySelectorAll("[data-image-trigger]"));
        //Create an object based off the NodeList data we can use later on
        for(var i = 0; i < images.length; i++) {
            let image: any = images[i];
            this.images.push(
                new ImageData(
                    i+1,
                    image.getAttribute("data-image-trigger"),
                    this.getOffset(image).top
                )
            );
        };
    }

    public initialiseImageSwitching() {
        let newImage: any = null;
        this.images.forEach((image: ImageData) => {
            //Check the offset
            if(window.scrollY >= (image.offsetTop - this.vhToPixel(50))) {
                //Don't assign the props to the view yet - it will cause a jarring switch between multiple images
                newImage = image;
            };
        });
        //Loop is done, now assign the activeImage the correct index
        if(newImage) {
            this.activeImage = newImage.id;
            this.activeNumber = "0" + newImage.id;
        };
    }

    public getOffset(el: any): any {
        if(!el) return;
        el = el.getBoundingClientRect();
        return {
            "left": el.left + window.scrollX,
            "top": el.top + window.scrollY
        }
    }

    public vhToPixel(multiplier?: number): number {
        return (window.innerHeight / 100) * (multiplier ? multiplier : 1);
    }

}
