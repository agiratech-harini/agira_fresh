// import { Component } from '@angular/core';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
 
@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.component.html',
  styleUrls: ['./podcast.component.scss']
})
export class PodcastComponent {
  cards = [
    {
      imageUrl: 'https://placehold.co/600x400',
      duration: '30 mins',
      category: 'Branding',
      type: 'FASHION',
      title: 'Finding Moments of Joy in A challenging Year',
      author1: {
        name: 'Harini',
        image: 'https://placehold.co/50x50',
        date: 'FEB 16, 2024'
      },
      author2: {
        name: 'Harini',
        image: 'https://placehold.co/25x25'
      },
      content: 'Who denounce their brothers and sisters, sowing distrust and ill-will. They freeze our hearts and our tongues, by punishing with prison anyone who provokes, praises, or merely seeks to understand those mad acts to which an insane society has driven.'
    },
   
  ];
  @Output() podcastDataEvent = new EventEmitter<any>();
 
  ngOnInit() {
  
    const podcastData = {
      title: 'Sample Podcast',
      duration: '30:00',
      imageUrl: 'path/to/image.jpg',
    
    };
    
  
    this.podcastDataEvent.emit(podcastData);
  }
 
}
 