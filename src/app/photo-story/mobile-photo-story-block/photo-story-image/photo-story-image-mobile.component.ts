import { Component, OnInit, Input, HostListener, AfterViewInit, trigger, transition, style, animate } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Post, Section } from "../../../post/post.model";
import { ImageData } from "../../../post/fixed-post-block/image.model";
import { RouterTriggerService } from "../../../shared/router-trigger/router-trigger.service";

@Component({
    selector: "[data-cmp-photo-story-image-mobile]",
    templateUrl: "./photo-story-image-mobile.component.html",
    styleUrls: ["./photo-story-image-mobile.component.scss"]
})
export class PhotoStoryImageMobileComponent {

    private images: ImageData[] = [];
    @Input() sectionData: Section[] = [];

    @HostListener("window:scroll", ["$event"])
    public onWindowScroll() {
    }

}
