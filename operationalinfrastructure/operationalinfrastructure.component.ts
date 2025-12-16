import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-operationalinfrastructure',
  templateUrl: './operationalinfrastructure.component.html',
  styleUrls: ['./operationalinfrastructure.component.scss']
})
export class OperationalinfrastructureComponent {
  constructor(private router: Router) {}

  navigateToEnquiry() {
    this.router.navigate(['/enquiry-form']);
  }

}
