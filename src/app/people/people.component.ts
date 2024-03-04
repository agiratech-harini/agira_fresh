import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent {
  @Input() people: any={}; 

  constructor(private router: Router) {}
  navigateToAbout(name: string) {
    this.router.navigate([`/people/${name}`])
  }
}
