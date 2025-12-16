import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { event } from 'jquery';
import { ToastrService } from 'ngx-toastr';
import { CustomvalidationService } from 'src/app/module/pages/customvalidation.service';
import { UserProfile } from 'src/app/shared/user.profile';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  constructor( private customValidator:CustomvalidationService,private fb: FormBuilder,public dialog: MatDialog, private router: Router, private authProfile: UserProfile, private Http: HttpClient, private notify: ToastrService,) {
    
  }
  navigateAndReload(event: Event) {
    event.preventDefault(); // Prevent the default anchor behavior
    this.router.navigateByUrl('/carrers').then(() => {
      window.location.reload();
    });
  }
  
  // openHome(){
  //   this.router.navigate(['/homepage']);
  // }
  // refresh()
  // {
  // {
  //   this.router.navigate([this.router.url])
  //     };
  // }
  // Navigate using the Angular Router
  refresh()
  { this.router.navigateByUrl('/').then(() => {
    location.reload();
    });
    }
  // refresh()
  // {
  //   // this.router.navigateByUrl('/homepage').then(() => {
  //   //   window.location.reload();
  //   //   });
  //   this.router.navigateByUrl('/homepage');
  //   //window.location.reload();
  // //  window.location.reload();
  //   //  this.router.navigateByUrl('/homepage')
  //   //  window.location.reload();
  
  // } 
  too(shareUrl: string) {
    shareUrl = encodeURIComponent(shareUrl);
    window.open(`https://www.instagram.com/medetel_health/`, 'sharer');

    
  }

}
