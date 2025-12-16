import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-travel-tourisms',
  templateUrl: './travel-tourisms.component.html',
  styleUrls: ['./travel-tourisms.component.scss']
})
export class TravelTourismsComponent {
  constructor(private router: Router) {}

  navigateToEnquiry() {
    this.router.navigate(['/enquiry-form']);
  }
}
