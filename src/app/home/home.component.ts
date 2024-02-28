import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

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
    
  ]
  
  imageUrl: string = "https://placehold.co/150x200";
  title: string = "";
  ebookData: any;
  selectedEbook: any;
  ebooks: any = [
   { title: 'War and Peace', imageUrl: 'https://placehold.co/150x200'},
   { title: 'The Lord of the Rings', imageUrl: 'https://placehold.co/150x200' },
   {title:'Middlemarch',imageUrl:'https://placehold.co/150x200'},
   {title:'Beloved',imageUrl:'https://placehold.co/150x200'},
   

];

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
peoples=[
  {
    imageUrl:"https://placehold.co/200x200",
    h2:"Harini",
    h5:"art directory",
    p:'It is our job to get you the information you need, so you can make the most of your aviation investments'
  },
  {
    imageUrl:"https://placehold.co/200x200",
    h2:"Harini",
    h5:"art directory",
    p:'It is our job to get you the information you need, so you can make the most of your aviation investments'
  },
  {
    imageUrl:"https://placehold.co/200x200",
    h2:"Harini",
    h5:"art directory",
    p:'It is our job to get you the information you need, so you can make the most of your aviation investments'
  }
]

constructor(private router: Router) {}
navigateToPeople() {
  this.router.navigate(['/card1'])
}
 
navigateToArticle() {
  this.router.navigate(['/article1'])
}
 
navigateToEBook() {
  this.router.navigate(['/e-book1'])
}
navigateToPodcast() {
  this.router.navigate(['/podcast1'])
}

}
  
 
 
 
