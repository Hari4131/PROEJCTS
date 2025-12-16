import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, HostListener } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CustomvalidationService } from 'src/app/module/pages/customvalidation.service';
import { PopupComponent } from 'src/app/module/pages/popup/popup.component';
import { UserProfile } from 'src/app/shared/user.profile';
import { InstallAlertComponent } from '../install-alert/install-alert.component';
import { ApiService } from 'src/app/module/pages/api.service';
import { ClinicalservicesComponent } from 'src/app/module/pages/Enquiry/clinicalservices.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isMobileView = false;
  isSidebarVisible = false;
  isAboutDropdownOpen = false;
  [x: string]: any;
  isHovered = false;
  slides = [
    { url: 'assets/img/.jpg' },
    { url: 'assets/img/slide2.jpg' },
    { url: 'assets/img/slide3.jpg' }
  ];
  currentSlide = 0;
  dropdownVisible = false;
  showAboutUsSubItems = false;
  isDropdownOpens: boolean = false;
  isDropdownOpen: boolean = false;
  isDropdowncourses: boolean = false;
  isDropdowntraining: boolean = false;
  isDropdownevnets: boolean = false;
  constructor(private api: ApiService,   private customValidator:CustomvalidationService,private fb: FormBuilder,public dialog: MatDialog, private router: Router, private authProfile: UserProfile, private Http: HttpClient, private notify: ToastrService,) {


    this.activeCity = '';
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.detectScreenSize();
  }
  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }
  
  user_login=false;

  reloadHome() {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/homepage']);
    });
  }
  navigateAndReload(event: Event) {
    event.preventDefault(); // Prevent the default anchor behavior
    this.router.navigateByUrl('/carrers').then(() => {
      window.location.reload();
    });
  }
  //isAboutDropdownOpen = false;

toggleAboutDropdown() {
  this.isAboutDropdownOpen = !this.isAboutDropdownOpen;
}
toggleAboutDropdowns()
{

  this.isAboutDropdownOpens = !this.isAboutDropdownOpens;
}

toggleAboutcourse()
{

  this.isAboutDropdowncourse = !this.isAboutDropdowncourse;
}
toggleAboutass()
{
    this.isAboutDropass = !this.isAboutDropass;
}
togglegallery()
{
     this.isAboutgal = !this.isAboutgal; 
}
  toggleAboutUs() {
    this.showAboutUsSubItems = !this.showAboutUsSubItems;
}
navigateAndCloseSidebar(route: string) {
  if (this.isMobileView) {
    this.isSidebarVisible = false; // Close sidebar for mobile view
  }
  this.router.navigateByUrl(route);
  
}
changeColor(event: Event) {
  const elements = document.querySelectorAll('.nav-link, .dropdown-btn');
  elements.forEach(element => element.classList.remove('active'));

  const target = event.target as HTMLElement;
  target.classList.add('active');
}
  ngOnInit(){
    setInterval(() => this.nextSlide(), 3000);
    this.detectScreenSize(); 
    
  }
  detectScreenSize() {
    // Detect viewport width
    if (window.innerWidth <= 968) { // Example width for mobile view, adjust as needed
      this.isMobileView = true;
    } else {
      this.isMobileView = false;
    }
  }
 
  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }
  // cabin() {
    

  //   this.router.navigateByUrl('cabincrews');
  //   // Add any additional logic here
  // }
  cabin()
  {
    this.router.navigateByUrl('/cabincrews').then(() => {
      window.location.reload();
      });
      
  }

  air()
  {
    this.router.navigateByUrl('/aircargo').then(() => {
      window.location.reload();
      });
  }
  //   air() {
  //   this.router.navigate(['/aircargo']);
  //   window.location.reload();
  //   // Add any additional logic here
  // }
  ground()
  {
    this.router.navigateByUrl('/GroundHandlers').then(() => {
      window.location.reload();
      });
  }
  // ground() {
  //   this.router.navigate(['/GroundHandlers']);
  //   window.location.reload();
  //   // Add any additional logic here
  // }
  ticket()
  {
    this.router.navigateByUrl('/airticket').then(() => {
      window.location.reload();
      });
  }
  // ticket() {
  //   this.router.navigate(['/airticket']);
  //   window.location.reload();
  //   // Add any additional logic here
  // }

  os()
  {
    this.router.navigateByUrl('/Operationalstructure').then(() => {
      window.location.reload();
      });
  }
  // os() {
  //   this.router.navigate(['/Operationalstructure']);
  //   window.location.reload();
  //   // Add any additional logic here
  // }
  
  travel()
  {
    this.router.navigateByUrl('/Travel&Tourism').then(() => {
      window.location.reload();
      });
  }
  //  travel() {
  //   this.router.navigate(['/Travel&Tourism']);
  //   window.location.reload();
  //   // Add any additional logic here
  // }

 
  
     
   
  

      toggleSubMenu() {
        this.isSubMenuVisible = !this.isSubMenuVisible;
      }



      showDropdown() {
        setTimeout(() => {
          this.isDropdownVisible = true;
        }, 0); // delay of 300ms before showing the dropdown
      }
    
      hideDropdown() {
        setTimeout(() => {
          this.isDropdownVisible = false;
        }, 0); // delay of 300ms before hiding the dropdown
      }
    
      selectOption(option: string) {
        console.log(`Selected: ${option}`);
        // Perform any action when an option is selected
      }

      send()
      {
        this.router.navigateByUrl('https://portal.aviationacademy.co.in/#/auth/login')
      }

      openCity(evt: Event, cityName: string): void {
        let i, tabcontent, tablinks;
    
        // Get all elements with class="tabcontent" and hide them
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
          (tabcontent[i] as HTMLElement).style.display = "none";
        }
    
        // Get all elements with class="tablinks" and remove the class "active"
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
    
        // Show the current tab, and add an "active" class to the button that opened the tab
        (document.getElementById(cityName) as HTMLElement).style.display = "block";
        (evt.currentTarget as HTMLElement).className += " active";
      }
      openCitys(evt: Event, cityName: string): void {
        let i, tabcontent, tablinks;
    
        // Get all elements with class="tabcontent" and hide them
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
          (tabcontent[i] as HTMLElement).style.display = "none";
        }
    
        // Get all elements with class="tablinks" and remove the class "active"
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
    
        // Show the current tab, and add an "active" class to the button that opened the tab
        (document.getElementById(cityName) as HTMLElement).style.display = "block";
        (evt.currentTarget as HTMLElement).className += " active";
      }
      openCityss(evt: Event, cityName: string): void {
        let i, tabcontent, tablinks;
    
        // Get all elements with class="tabcontent" and hide them
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
          (tabcontent[i] as HTMLElement).style.display = "none";
        }
    
        // Get all elements with class="tablinks" and remove the class "active"
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
    
        // Show the current tab, and add an "active" class to the button that opened the tab
        (document.getElementById(cityName) as HTMLElement).style.display = "block";
        (evt.currentTarget as HTMLElement).className += " active";
      }

      toggleDropdown(event: Event) {
        event.preventDefault(); // Prevents the default behavior of the button
        this.isDropdownOpen = !this.isDropdownOpen;
      }
      toggleDropdowns(event: Event) {
        event.preventDefault(); // Prevents the default behavior of the button
        this.isDropdownOpens = !this.isDropdownOpens;
      }
      togglecourse(event: Event) {
        event.preventDefault(); // Prevents the default behavior of the button
        this.isDropdowncourses = !this.isDropdowncourses;
      }
      toggletraining(event: Event) {
        event.preventDefault(); // Prevents the default behavior of the button
        this.isDropdowntraining = !this.isDropdowntraining;
      }
      toogleevents(event: Event) {
        event.preventDefault(); // Prevents the default behavior of the button
        this.isDropdownevnets = !this.isDropdownevnets;
      }
    }
    