import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule, Http, JsonpModule } from "@angular/http";
import { Routes, RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app.routes";

import { AppComponent } from "./app.component";
import { IndexComponent } from "./index/index.component";
import { AboutComponent } from "./about/about.component";
import { PostComponent } from "./post/post.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { FiltersComponent } from "./filters/filters.component";
import { SuggestionComponent } from "./suggestion/suggestion.component";
import { PostInfoComponent } from "./post/post-info/post-info.component";
import { FixedPostBlockComponent } from "./post/fixed-post-block/fixed-post-block.component";

import { HeadersService } from "./shared/headers/headers.service";
import { PostResolverService } from "./post/post-resolver.service";
import { IndexResolverService } from "./index/index-resolver.service";
import { PostService } from "./post/post.service";
import { AppConstants } from "./app.constants";
import { PostImageComponent } from "./post/fixed-post-block/post-image/post-image.component";
import { CopyToClipboardDirective } from "./copy-to-clipboard/copy-to-clipboard.directive";
// import { BurstDirective } from "./motion/burst.directive";

import { RouterTriggerService } from "./shared/router-trigger/router-trigger.service";
import { ParallaxDirective } from './shared/parallax/parallax.directive';
import { GetInTouchComponent } from './shared/get-in-touch/get-in-touch.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AboutComponent,
    PostComponent,
    NavigationComponent,
    FiltersComponent,
    SuggestionComponent,
    PostInfoComponent,
    FixedPostBlockComponent,
    PostImageComponent,
    CopyToClipboardDirective,
    ParallaxDirective,
    GetInTouchComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [
    AppConstants,
    HeadersService,
    PostService,
    PostResolverService,
    IndexResolverService,
    RouterTriggerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }