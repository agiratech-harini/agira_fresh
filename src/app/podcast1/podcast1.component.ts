import { Component } from '@angular/core';

@Component({
  selector: 'app-podcast1',
  templateUrl: './podcast1.component.html',
  styleUrls: ['./podcast1.component.scss']
})
export class Podcast1Component {
  cards = [
    {
      imageUrl: 'https://placehold.co/600x400',
      duration: '30 mins',
      type: 'FASHION',
      title: 'Easy strategies to help your family',
    },
    {
      imageUrl: 'https://placehold.co/600x400',
      duration: '30 mins',
      type: 'FASHION',
      title: 'We only get one shot at this',
    },
    {
      imageUrl: 'https://placehold.co/600x400',
      duration: '30 mins',
      type: 'FASHION',
      title: 'Strategies for  your next podcast show',
    }
    
  ];
}
