import { Component, Input, Output, EventEmitter } from '@angular/core';
 
@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.component.html',
  styleUrls: ['./podcast.component.scss']
})
export class PodcastComponent {
  @Input() card: any; 
 
}