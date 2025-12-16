import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTabsModule } from '@angular/material/tabs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import { TableOverviewExampleComponent } from './table-overview-example/table-overview-example.component';
import { DataTablesModule } from 'angular-datatables';
import { MatDialogModule } from '@angular/material/dialog';
import { ToastrModule } from 'ngx-toastr';
import { MatButtonModule } from '@angular/material/button';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { httpInterceptorProviders } from './shared';
import { UserService } from './shared/user.service';
import { UserProfile } from './shared/user.profile';
import { AuthGuard } from './shared/auth.guard';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { ErrorInterceptor } from './shared/errorInterceptor';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatStepperModule} from '@angular/material/stepper';
import { TermsconditionsComponent } from './module/pages/termsconditions/termsconditions.component';
import { PrivacypolicyComponent } from './module/pages/privacypolicy/privacypolicy.component';
//import { JoinusComponent } from './module/pages/joinus/joinus.component';
import { NewsourcesComponent } from './module/pages/newsources/newsources.component';
import { PackageserversComponent } from './module/pages/packageservers/packageservers.component';
import { PacklayoutModule } from './module/pages/packageservers/packlayout/packlayout.module';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PopupComponent } from './module/pages/popup/popup.component';
import { PasswordresetComponent } from './passwordreset/passwordreset.component';
import { NewloginComponent } from './newlogin/newlogin.component';
import { PopuppdfComponent } from './popuppdf/popuppdf.component';
import { NewloginpasswordComponent } from './newloginpassword/newloginpassword.component';
import { HomecareComponent } from './module/pages/Student/homecare.component';
import {MatDividerModule} from '@angular/material/divider';

import { deactivateguardservice } from './shared/deactivateguard.service';
import { ProductDetailsComponent } from './module/pages/product-details/product-details.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TrainingcentersComponent } from './module/trainingcenters/trainingcenters.component';
import { TrainingpartnersComponent } from './module/trainingpartners/trainingpartners.component';
import { SubjectareasComponent } from './module/subjectareas/subjectareas.component';
import { OperationalinfrastructureComponent } from './module/operationalinfrastructure/operationalinfrastructure.component';
import { GroundHandlersComponent } from './module/ground-handlers/ground-handlers.component';
import { DiplomacourseComponent } from './module/diplomacourse/diplomacourse.component';
import { CertificatesComponent } from './module/certificates/certificates.component';
import { CabincrewComponent } from './module/cabincrew/cabincrew.component';
import { AirticketComponent } from './module/airticket/airticket.component';
import { AircargoComponent } from './module/aircargo/aircargo.component';
import { TraveltourismComponent } from './module/traveltourism/traveltourism.component';
import { TravelTourismsComponent } from './module/travel-tourisms/travel-tourisms.component';
import { JoinusComponent } from './module/pages/joinus/joinus.component';
import { AviationVideosComponent } from './module/aviation-videos/aviation-videos.component';
import { OurmembersComponent } from './module/ourmembers/ourmembers.component';
import { FranchisesDUPComponent } from './module/franchises-dup/franchises-dup.component';



export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  },
};

@NgModule({
  declarations: [

    JoinusComponent,
    TravelTourismsComponent,
    TrainingcentersComponent,
    TrainingpartnersComponent,
    SubjectareasComponent,
    OperationalinfrastructureComponent,
    GroundHandlersComponent,
    DiplomacourseComponent,
    CertificatesComponent,
    CabincrewComponent,
    AirticketComponent,
    AircargoComponent,
    AppComponent,
    TableOverviewExampleComponent,
    //TermsconditionsComponent,
    PrivacypolicyComponent,
    NewsourcesComponent,
    //JoinusComponent,
    PackageserversComponent,
    PopupComponent,
    PasswordresetComponent,
    NewloginComponent,
    PopuppdfComponent,
    NewloginpasswordComponent,
    //MyordersComponent,
    ProductDetailsComponent,
    TraveltourismComponent,
    AviationVideosComponent,
    OurmembersComponent,
    FranchisesDUPComponent,
 
    
  ],
  imports: [

    MatToolbarModule ,
    MatMenuModule,
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    BrowserAnimationsModule,
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
    //DataTablesModule,
    MatDialogModule,   
    MatButtonModule,
    CarouselModule,
    PdfViewerModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatStepperModule,
    NgSelectModule,
    PacklayoutModule,
    MatTooltipModule,
    MatDividerModule,
    MatTabsModule ,
    MatMenuModule,
    MatMenuModule,
    ToastrModule.forRoot({
      timeOut: 1000,
      preventDuplicates: true,
      progressBar:true
    }),
  ],
  providers: [ 
    {
    provide: LocationStrategy, useClass: HashLocationStrategy
  },

  httpInterceptorProviders,
  UserService,
  UserProfile,
  AuthGuard,
{ provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS },
{
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true
},
deactivateguardservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
