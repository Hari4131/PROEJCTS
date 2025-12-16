import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deleverymethods',
  templateUrl: './deleverymethods.component.html',
  styleUrls: ['./deleverymethods.component.scss']
})
export class DeleverymethodsComponent {
  constructor(private router: Router) {}

  navigateToEnquiry() {
    this.router.navigate(['/enquiry-form']);
  }
}
