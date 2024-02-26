
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component } from '@angular/core';
 
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
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
  

  // constructor(private modalService: NgbModal) {
  // }
 
  // public open(modal: any): void {
  //   this.modalService.open(modal);
  // }
 
  
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
// article: any; 

//   receiveArticleData(eventData: any) { 
    
//     console.log(eventData);
//   }

}
  
 
 
 