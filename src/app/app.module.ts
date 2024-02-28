import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Card1Component } from './card1/card1.component';
import { ArticleComponent } from './article/article.component';
import { PodcastComponent } from './podcast/podcast.component';
import { EBookComponent } from './e-book/e-book.component';
import { PeopleComponent } from './people/people.component';
import { HomeComponent } from './home/home.component';
import { Article1Component } from './article1/article1.component';
import { EBook1Component } from './e-book1/e-book1.component';
import { Podcast1Component } from './podcast1/podcast1.component';


@NgModule({
  declarations: [
    AppComponent,
    Card1Component,
    ArticleComponent,
    PodcastComponent,
    EBookComponent,
    PeopleComponent,
    HomeComponent,
    Article1Component,
    EBook1Component,
    Podcast1Component,
   
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
