import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  cards = [
    {
      imageUrl: 'https://placehold.co/600x400',
      duration: '30 mins',
      type: 'FASHION',
      title: 'Even deduded demagogues renounced',
    },
    {
      imageUrl: 'https://placehold.co/600x400',
      duration: '30 mins',
      type: 'FASHION',
      title: 'Greenland unicorns and the magical alicorn',
    },
    {
      imageUrl: 'https://placehold.co/600x400',
      duration: '30 mins',
      type: 'FASHION',
      title: 'Easy strategies to help you succeed in 2020',
    }
    
  ];

}
