
import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-e-book',
  templateUrl: './e-book.component.html',
  styleUrls: ['./e-book.component.scss']
})
export class EBookComponent {
  @Input() ebook: any = ''
 
 
}