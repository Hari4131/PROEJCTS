import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabincrew',
  templateUrl: './cabincrew.component.html',
  styleUrls: ['./cabincrew.component.scss']
})
export class CabincrewComponent {
  constructor(private router: Router) {}

  navigateToEnquiry() {
    this.router.navigate(['/enquiry-form']);
  }
}
