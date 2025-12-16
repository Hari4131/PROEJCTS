import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-diplomacourse',
  templateUrl: './diplomacourse.component.html',
  styleUrls: ['./diplomacourse.component.scss']
})
export class DiplomacourseComponent {
  constructor(private router: Router) {}

  navigateToEnquiry() {
    this.router.navigate(['/enquiry-form']);

  }
}
