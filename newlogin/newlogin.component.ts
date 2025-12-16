import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomvalidationService } from '../module/pages/customvalidation.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { IProfile } from '../shared/user.model';
import { PasswordresetComponent } from '../passwordreset/passwordreset.component';
import { OtppopupComponent } from '../module/pages/otppopup/otppopup.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserProfile } from '../shared/user.profile';
import { ToastrService } from 'ngx-toastr';
import { NewloginpasswordComponent } from '../newloginpassword/newloginpassword.component';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-newlogin',
  templateUrl: './newlogin.component.html',
  styleUrls: ['./newlogin.component.scss']
})
export class NewloginComponent {
  isShow = false;
  private storageKey = 'roleName';
  toggleStatus() {
    this.isShow = !this.isShow;
  }
  register: boolean = true;
  errorMessage:boolean=true;
  Registerform: FormGroup;
  loginform:FormGroup;
  Id: any;
  value:any;
  TooltipPosition:any = ['below'];
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
  clientId='Global_spa';
  dialogRef: any;
  
  constructor( private customValidator:CustomvalidationService,private fb: FormBuilder,public dialog: MatDialog, private router: Router, private authProfile: UserProfile, private Http: HttpClient, private notify: ToastrService,) { 
    this.Registerform = this.fb.group({
      'PR_FirstName': ['', [ Validators.pattern('^[a-zA-Z ]*$'), Validators.required]],
      'PR_MobileNumber': ['', [Validators.required]],
      'PR_Email': ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      'Password': ['', Validators.compose([Validators.required, 
  this.customValidator.patternValidator(new RegExp(/[^A-Za-z0-9]/), { hasNonAlphanum: true }),
  this.customValidator.patternValidator(new RegExp(/[A-Z]/), { hasCapitalCase: true }),
  this.customValidator.patternValidator(new RegExp(/[a-z]/), { hasSmallCase: true }),
  Validators.minLength(6)
])],
 'ConfirmPassword': ['', [Validators.required]],
},
{ validators: this.customValidator.MatchValidators('Password', 'ConfirmPassword') });

    this.loginform=this.fb.group({
      'username':['',[Validators.pattern("[0-9]{10}$"), Validators.minLength(10), Validators.maxLength(10), Validators.required]],
      'password':['',[Validators.required,Validators.minLength(6)]],
    })
   }
  ngAfterViewInit(): void {
    this.loadJsFile("assets/assets/js/loginslider.js");  
  }
 
  public loadJsFile(url: any) {
    let node = document.createElement('script');
    node.src = url;
    node.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(node);
  }


  onSubmit() {
//     const isInstanceRunning = localStorage.getItem(this.storageKey);
// if (isInstanceRunning ) {
// alert('The application is already running and cannot be launched again.');
// this.router.navigate(["/logincart"]);       
// } 
// else {
//this.router.navigate(["/logincart"]);     
localStorage.setItem(this.storageKey, 'false');
    const header = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const params = new HttpParams()
        .append('username', this.loginform.value.username)
        .append('password', this.loginform.value.password)
        .append('client_id', this.clientId)
        .append('grant_type', 'phone_number_token')
        .append('client_secret', 'secret')
        .append('role','Patient')       
        this.Http.post(`${environment.Login_URL}`+`connect/token`,params, { headers: header }).subscribe((res:any)=>{        
        var userProfile: IProfile = res;
        console.log('login data :' +JSON.stringify(res))
        this.authProfile.setProfile(userProfile);
        //this.notify.success(res.firstName + " logged Successfully.");
        this.router.navigate([]);       
        },
        // (error)=>{
        //   this.notify.error(error)
        // }
        )
       
  }


  // login field validation

  public checkError = (controlName: string, errorName: string) => {
    return this.Registerform.controls[controlName].hasError(errorName);
  }

  nameValidatorss(control: any): { [key: string]: boolean } {
    const nameRegexp: RegExp = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?/\/,/0-9]/;
    // const spaceexp: RegExp =/[/\s/g, '']/

    if (control.value && nameRegexp.test(control.value)) {
      return { invalidName: true };
    }
    return { invalidName: false };
  }

  nameValidator(control: any): { [key: string]: boolean } {
    const nameRegexp: RegExp = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?/\s/g,''/a-zA-Z]/;
    // const spaceexp: RegExp =/[/\s/g, '']/

    if (control.value && nameRegexp.test(control.value)) {
      return { invalidName: true };
    }
    return { invalidName: false };
  }
  get f(): { [key: string]: AbstractControl } {
    return this.Registerform.controls;
  }
  reset(): void {
    const dialogRef = this.dialog.open(NewloginpasswordComponent, {
      width: '500px',
      height: '400px',
      data: { message: 'This is an alert!' }
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
    });
  //   const channel = new BroadcastChannel('tab');

  //   channel.postMessage('another-tab');
  //   // note that listener is added after posting the message

  //   channel.addEventListener('message', (msg) => {
  //     if (msg.data === 'another-tab') {
  //       // message received from 2nd tab
  //       alert('Cannot open multiple instances');
  //     }
  //   });
  }

  SendOTP():
   void {
    const dialogRef = this.dialog.open(OtppopupComponent, {
      width: '500px',
      height: '400px',
    
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
    });

     this.Http.get(`${environment.API_Base_URL}` + `Authentication/SendOTP/${this.Registerform.value.PR_MobileNumber}/${'1407167957139097720'}`).subscribe((data: any) => {
       console.log('Data', data);
      this.Id = data.Id;
      if (data.IsSuccess) {
        let Data = {
           "PR_FirstName": this.Registerform.value.PR_FirstName,
           "PR_MobileNumber": this.Registerform.value.PR_MobileNumber,
           "PR_Email": this.Registerform.value.PR_Email,
           "Password": this.Registerform.value.Password,
           "ConfirmPassword": this.Registerform.value.ConfirmPassword,
           "Id": this.Id,
           "OTP": ""
        };
        const dialogRef = this.dialog.open(OtppopupComponent, {
          width: '260px',
          height: '180px',
          data: Data,
          disableClose: true
       });
     }
     else if (!data.IsSuccess) {
       this.notify.error(data.Message);
    }
   })
  }

  customOptions: any = {
    loop: true,
    // autoplayTimeout: 3000,
    margin: 10,
    smartSpeed: 3000,
    autoplay: true,
    responsiveClass: true,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }
  
  
}



