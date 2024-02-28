import { Component } from '@angular/core';

@Component({
  selector: 'app-article1',
  templateUrl: './article1.component.html',
  styleUrls: ['./article1.component.scss']
})
export class Article1Component {
  articles = [
    {
      imageUrl: 'https://placehold.co/600x400',
      category: 'Branding',
      title: 'Finding moments  of joy in a  challenging year',
      author:'Harini',
      date:'Feb 16,2024', 
      content: 'Who denounce their brothers and sisters, sowing distrust and ill-will. They freeze our hearts and our tongues, by punishing with prison anyone who provokes, praises, or merely seeks to understand those mad acts to which an insane society has driven.'
    },
    {
      imageUrl: 'https://placehold.co/600x400',
      category: 'Branding',
      title: 'Women balancing  family and work during covid-19',
      author:'Harini',
      date:'Feb 16,2024', 
      content: 'Who denounce their brothers and sisters, sowing distrust and ill-will. They freeze our hearts and our tongues, by punishing with prison anyone who provokes, praises, or merely seeks to understand those mad acts to which an insane society has driven.'
    },
    {
      imageUrl: 'https://placehold.co/600x400',
      category: 'Branding',
      title: 'Greenland unicorns and the magical alicorn',
      author:'Harini',
      date:'Feb 16,2024', 
      content: 'Who denounce their brothers and sisters, sowing distrust and ill-will. They freeze our hearts and our tongues, by punishing with prison anyone who provokes, praises, or merely seeks to understand those mad acts to which an insane society has driven.'
    },
   
  ];
}
