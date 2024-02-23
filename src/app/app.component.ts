import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
 
  
  constructor(private modalService: NgbModal) {

  }
  

  public open(modal: any): void {
    this.modalService.open(modal);
  }
  
receivePodcastData(data: string) {
  // Handle the received data here
  console.log("Received data from PodcastComponent:", data);
  

  }
}
