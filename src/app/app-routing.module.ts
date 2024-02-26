import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PodcastComponent } from './podcast/podcast.component';
import { EBookComponent } from './e-book/e-book.component';
import { ArticleComponent } from './article/article.component';

const routes: Routes = [
  {
    path:'podcast',
    component:PodcastComponent
  },
  {
    path:'e-book',
    component:EBookComponent
  },
  {
    path:'article',
    component:ArticleComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule {
}
