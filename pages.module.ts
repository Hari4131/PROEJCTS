import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SupportComponent } from './contactus/support.component';
import { FaqComponent } from './Learningmethods/faq.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ClinicalservicesComponent } from './Enquiry/clinicalservices.component';
import { HealthpackagesComponent } from './Vison&misson/healthpackages.component';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { GalleryComponent } from './Courses/gallery.component';
import { QuicklinksComponent } from './quicklinks/quicklinks.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatIconButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables/src/angular-datatables.module';
import { MatInputModule } from '@angular/material/input';
import { CartComponent } from './ourcommitment/cart.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ToastrModule } from 'ngx-toastr';
import { FilterPipe } from './filter.pipe';
import { KnowmoreComponent } from './knowmore/knowmore.component';
import { ConsultnowComponent } from './aims &obj/consultnow.component';
import {MatButtonModule} from '@angular/material/button';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { LogincartComponent } from './logincart/logincart.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { SpecialityHospitalComponent } from './speciality-hospital/speciality-hospital.component';
import { HomecareComponent } from './Student/homecare.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatStepperModule } from '@angular/material/stepper';
import { PaymentResultComponent } from './payment-result/payment-result.component';
import { PacklayoutModule } from './packageservers/packlayout/packlayout.module';
import { MatTooltipModule } from '@angular/material/tooltip';
import { JoinmeetingComponent } from './joinmeeting/joinmeeting.component';
  
import { PartnersComponent } from './partners/partners.component';
import { PartnerPageComponent } from './partner-page/partner-page.component';
import { OtppopupComponent } from './otppopup/otppopup.component';
import { VcallComponent } from './vcall/vcall.component';
import { LoginotpComponent } from './loginotp/loginotp.component';
import { PasswordconfirmComponent } from './passwordconfirm/passwordconfirm.component';
//import { ConfirmpasswordComponent } from './confirmpassword/confirmpassword.component';
import {MatDividerModule} from '@angular/material/divider';
import { ConsultNowNavbarComponent } from './Aviation/consult-now-navbar.component';
import { SpecialitiesAppointmentComponent } from './specialities-appointment/specialities-appointment.component';
import { LabTestPackagesComponent } from './lab-test-packages/lab-test-packages.component';
import { LabTestPackagesCartComponent } from './lab-test-packages-cart/lab-test-packages-cart.component';
import { LabTestPackagesNavbarComponent } from './lab-test-packages-navbar/lab-test-packages-navbar.component';
import { SpecalistdoctorComponent } from './specalistdoctor/specalistdoctor.component';
import { SurgionComponent } from './surgion/surgion.component';
import { AboutusPageComponent } from './aboutus-page/aboutus-page.component';
import { LocationComponent } from './location/location.component';
import { EnqiuryFormComponent } from './enqiury-form/enqiury-form.component';
import { MatMenuModule } from '@angular/material/menu';
import { ThankDialogueComponent } from './enqiury-form/thank-dialogue/thank-dialogue.component';
import { ThankSubmittedComponent } from './Aviation/thank-submitted/thank-submitted.component';
import { PopUpComponent } from './homepage/pop-up/pop-up.component';
import { NewseventsComponent } from './newsevents/newsevents.component';
import { PhotosvideosComponent } from './photosvideos/photosvideos.component';


@NgModule({
  declarations: [
    PagesComponent,
    HomepageComponent,
    SupportComponent,
    FaqComponent,
    AboutusComponent,
    ClinicalservicesComponent,
    HealthpackagesComponent,
    GalleryComponent,
    QuicklinksComponent,
    ProductListComponent,
    CartComponent,
    FilterPipe,
    KnowmoreComponent,
    ConsultnowComponent,
    LogincartComponent,
    SpecialityHospitalComponent,
    HomecareComponent,
    PaymentResultComponent,
    PartnersComponent,
    PartnerPageComponent,
    OtppopupComponent,
    VcallComponent,
    HomecareComponent,
    LoginotpComponent,
    PasswordconfirmComponent,
    JoinmeetingComponent,
    ConsultNowNavbarComponent,
    SpecialitiesAppointmentComponent,
    HomepageComponent,
    LabTestPackagesComponent,
    LabTestPackagesCartComponent,
    LabTestPackagesNavbarComponent,
    SpecalistdoctorComponent,
    SurgionComponent,
    AboutusPageComponent,
    LocationComponent,
    EnqiuryFormComponent,
    ThankDialogueComponent,
    ThankSubmittedComponent,
    PopUpComponent,
    NewseventsComponent,
    PhotosvideosComponent,
    //ConfirmpasswordComponent
  ],
  imports: [
    MatDividerModule,
    CommonModule,
    PagesRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatCheckboxModule,
    HttpClientModule,
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule,
    MatIconModule,
    MatCardModule,
    ReactiveFormsModule,
   // DataTablesModule,
    MatDialogModule,
    MatButtonModule,
    MatChipsModule,
    MatAutocompleteModule,
    CarouselModule,
    PdfViewerModule,
    NgSelectModule,
    MatStepperModule,
    PacklayoutModule,
    MatTooltipModule,
    MatMenuModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      preventDuplicates: true,
      progressBar:true
    }),
  ]
})
export class PagesModule { }
