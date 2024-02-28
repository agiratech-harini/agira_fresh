import { Component } from '@angular/core';

@Component({
  selector: 'app-e-book1',
  templateUrl: './e-book1.component.html',
  styleUrls: ['./e-book1.component.scss']
})
export class EBook1Component {

  imageUrl: string = "https://placehold.co/150x200";
  title: string = "";
  ebookData: any;
  selectedEbook: any;




  ebooks: any =
  [
   {title: 'War and Peace', imageUrl: 'https://placehold.co/150x200'},
   {title: 'The Lord of the Rings', imageUrl: 'https://placehold.co/150x200' },
   {title:'Middlemarch',imageUrl:'https://placehold.co/150x200'},
   {title:'Beloved',imageUrl:'https://placehold.co/150x200'},
   {title:'The Great Gatsby',imageUrl:'https://placehold.co/150x200'},
   {title:'Crime and Punishment',imageUrl:'https://placehold.co/150x200'},
   {title:'Moby Dick',imageUrl:'https://placehold.co/150x200'},
   {title:'1984',imageUrl:'https://placehold.co/150x200'}
  ];
}
