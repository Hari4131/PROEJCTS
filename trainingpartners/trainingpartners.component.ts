import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trainingpartners',
  templateUrl: './trainingpartners.component.html',
  styleUrls: ['./trainingpartners.component.scss']
})
export class TrainingpartnersComponent {
  constructor(private router: Router) {}

  navigateToEnquiry() {
    this.router.navigate(['/enquiry-form']);
  }
}
