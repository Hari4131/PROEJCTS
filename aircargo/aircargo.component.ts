import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aircargo',
  templateUrl: './aircargo.component.html',
  styleUrls: ['./aircargo.component.scss']
})
export class AircargoComponent {
  constructor(private router: Router) {}

  navigateToEnquiry() {
    this.router.navigate(['/enquiry-form']);
  }
}
