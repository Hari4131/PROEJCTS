import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subjectareas',
  templateUrl: './subjectareas.component.html',
  styleUrls: ['./subjectareas.component.scss']
})
export class SubjectareasComponent {
  constructor(private router: Router) {}

  navigateToEnquiry() {
    this.router.navigate(['/enquiry-form']);

  }
}
