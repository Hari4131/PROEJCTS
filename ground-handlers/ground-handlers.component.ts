import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ground-handlers',
  templateUrl: './ground-handlers.component.html',
  styleUrls: ['./ground-handlers.component.scss']
})
export class GroundHandlersComponent {
  constructor(private router: Router) {}

  navigateToEnquiry() {
    this.router.navigate(['/enquiry-form']);
  }
}
