import { Component, HostListener } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { UserService } from './shared/user.service';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from './module/pages/homepage/pop-up/pop-up.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'medetel';
  showPopup = true;
  showButton: boolean = true;
  constructor(private router: Router, private user:UserService,private dialog: MatDialog) { }
      
  // @HostListener('window:beforeunload')
  // unloadHandler(event: Event): void {
  //   localStorage.removeItem('Id');
  //   localStorage.removeItem('access_token');
  //   localStorage.removeItem('expires_in');
  //   localStorage.removeItem('firstName');
  //   localStorage.removeItem('emailId');
  //   localStorage.removeItem('phoneNumber');
  // }
  
  // @HostListener('window:beforeunload', ['$event'])
  // unloadHandler(event: Event): void {
  //   if (event) {
  //     this.user.logout();
  //   }
  // }
  navigateToEnquiry() {
    this.router.navigate(['/enquiry-form']);
  }
   
  ngOnInit() {
       this.router.events.subscribe((event) => {
          if (!(event instanceof NavigationEnd)) {
              return;
          }
          window.scrollTo(0, 0)
      });



      const popupShown = sessionStorage.getItem('popupShown');
      if (!popupShown) {
        this.openDialog();
        sessionStorage.setItem('popupShown', 'true'); // Set flag in sessionStorage
      }


      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          // Check if the current route is 'aviation' or 'enquiry'
          const currentRoute = event.urlAfterRedirects;
          this.showButton = !currentRoute.includes('/Aviation') && !currentRoute.includes('/enquiry-form');
        }
      });
    }
  

  
  
  // openDialog() {
  //   this.dialog.open(PopUpComponent, {
  //     width: '300px'
  //   });
  // }
  openDialog() {
    this.dialog.open(PopUpComponent, {
      width: '400px'
    });
  }

  
}

