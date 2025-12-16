import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-airticket',
  templateUrl: './airticket.component.html',
  styleUrls: ['./airticket.component.scss']
})
export class AirticketComponent {
  constructor(private router: Router) {}

  navigateToEnquiry() {
    this.router.navigate(['/enquiry-form']);
  }
}
