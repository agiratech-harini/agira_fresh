import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Card1Component } from './card1/card1.component';
import { ArticleComponent } from './article/article.component';
import { PodcastComponent } from './podcast/podcast.component';
import { EBookComponent } from './e-book/e-book.component';


@NgModule({
  declarations: [
    AppComponent,
    Card1Component,
    ArticleComponent,
    PodcastComponent,
    EBookComponent,
   
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {
}
