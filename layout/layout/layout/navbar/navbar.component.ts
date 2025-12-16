import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CustomvalidationService } from 'src/app/module/pages/customvalidation.service';
import { PopupComponent } from 'src/app/module/pages/popup/popup.component';
import { UserProfile } from 'src/app/shared/user.profile';
import { InstallAlertComponent } from '../install-alert/install-alert.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  data: string = 'Initial Data';
  constructor( private customValidator:CustomvalidationService,private fb: FormBuilder,public dialog: MatDialog, private router: Router, private authProfile: UserProfile, private Http: HttpClient, private notify: ToastrService,) {}
  
  user_login=false;
  ngOnInit(){
    let Id = localStorage.getItem('Id')
    if(Id==null){
      this.user_login=true;
    }
  }

  refreshpage(){
    this.router.navigateByUrl('/cardiologist').then(() => {
    window.location.reload();
    });
    }
    page()
    {
      this.router.navigateByUrl('/dentist').then(() => {
        window.location.reload();
        });
    }
    dermatologist()
    {
      this.router.navigateByUrl('/dermatologist').then(() => {
        window.location.reload();
        });
    }
    gastroentrologist()
    {
      this.router.navigateByUrl('/gastroentrologist').then(() => {
        window.location.reload();
        });
    }
    Gynecology()
    {
      this.router.navigateByUrl('/gyneocologist').then(() => {
        window.location.reload();
        });
    }
    nephrologist()
    {
      this.router.navigateByUrl('/nephrologist').then(() => {
        window.location.reload();
        });
    }
    hepatologist()
    {
      this.router.navigateByUrl('/hepatologist').then(() => {
        window.location.reload();
        });
    }
    orthopaedic()
    {
      this.router.navigateByUrl('/orthopaedic').then(() => {
      window.location.reload();
      });
    }
    homecare()
    {
      this.router.navigateByUrl('/homecare').then(() => {
       
        });
    }
    refresh()
    { this.router.navigateByUrl('/').then(() => {
      location.reload();
      });
      }

      
      open_install_apk(){
      this.dialog.open(InstallAlertComponent,
        {
          width:'50%',
        })
      }
    }