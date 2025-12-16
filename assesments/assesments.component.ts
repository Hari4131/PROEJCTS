import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assesments',
  templateUrl: './assesments.component.html',
  styleUrls: ['./assesments.component.scss']
})
export class AssesmentsComponent {
  constructor(private router: Router) {}

  navigateToEnquiry() {
    this.router.navigate(['/enquiry-form']);
  }
}
