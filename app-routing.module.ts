import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './layout/base/base.component';
import { TableOverviewExampleComponent } from './table-overview-example/table-overview-example.component';
import { LogincartComponent } from './module/pages/logincart/logincart.component';
import { AuthGuard } from './shared/auth.guard';
import { PackageserversComponent } from './module/pages/packageservers/packageservers.component';
import { PartnersComponent } from './module/pages/partners/partners.component';
import { PopupComponent } from './module/pages/popup/popup.component';
import { OtppopupComponent } from './module/pages/otppopup/otppopup.component';
import { NewloginComponent } from './newlogin/newlogin.component';
import { PopuppdfComponent } from './popuppdf/popuppdf.component';
import { NewloginpasswordComponent } from './newloginpassword/newloginpassword.component';
import { LoginotpComponent } from './module/pages/loginotp/loginotp.component';
import { CartComponent } from './module/pages/ourcommitment/cart.component';
import { PasswordconfirmComponent } from './module/pages/passwordconfirm/passwordconfirm.component';
import { JoinmeetingComponent } from './module/pages/joinmeeting/joinmeeting.component';
// import { MyordersComponent } from './module/pages/myorders/myorders.component';
import { deactivateguardservice } from './shared/deactivateguard.service';
import { ConsultNowNavbarComponent } from './module/pages/Aviation/consult-now-navbar.component';
import { SpecialitiesAppointmentComponent } from './module/pages/specialities-appointment/specialities-appointment.component';
import { LabTestPackagesCartComponent } from './module/pages/lab-test-packages-cart/lab-test-packages-cart.component';
import { LabTestPackagesComponent } from './module/pages/lab-test-packages/lab-test-packages.component';
import { ProductDetailsComponent } from './module/pages/product-details/product-details.component';
import { HomepageComponent } from './module/pages/homepage/homepage.component';
import { VcallComponent } from './module/pages/vcall/vcall.component';
import { MyordersComponent } from './module/pages/franchisedash/myorders.component';
const routes: Routes = [
  {
    path:'base', redirectTo:'base', pathMatch:'full'
  },
  { path: 'sitemap.xml', redirectTo: 'assets/sitemap.xml' },
  {
    path: 'partners', component: PartnersComponent
  },
  {
    path: 'newpass', component: NewloginpasswordComponent
  },
  {
    path: 'popuppdf', component: PopuppdfComponent
  },
  {
    path: 'passwordconfirm', component: PasswordconfirmComponent
  },
    {
    path: 'passwordconfirm', component: NewloginComponent
  },
  {
    path: 'loginotp', component: LoginotpComponent
  },
  {
    path: 'otp', component: OtppopupComponent
  },
  {
    path: 'newlogin', component: NewloginComponent
  },
  {
    path:'table', component:TableOverviewExampleComponent
  },
  {
    path:'packageservers', component:PackageserversComponent
  },
  {
    path:'franchise_dashboard', component:LabTestPackagesCartComponent
  },
  {
    path:'franchiselogin', component:VcallComponent
  },
  {
    canActivate: [AuthGuard],
    path:'patient_quick_consult', component:LogincartComponent
  },
  {
    path:'speciality_doctor_details/:doctorId', component:SpecialitiesAppointmentComponent
  },
  // {
  //   canActivate: [AuthGuard],
  //   path:'patient_quick_consult', component:LogincartComponent, canDeactivate:[deactivateguardservice]
  // },
  {
    canActivate: [AuthGuard],
    path:'joinvc-meeting', component:JoinmeetingComponent
  },
  {
    canActivate: [AuthGuard],
    path:'pop', component:PopupComponent
  },
  {
    path:'cart', component:CartComponent
  },
  {
    path:'myorders', component:MyordersComponent
  },
  {
    path:'', component:BaseComponent,
    children:[
      {
        path:'',
        loadChildren:()=>import('./module/pages/pages.module').then((m)=>m.PagesModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
