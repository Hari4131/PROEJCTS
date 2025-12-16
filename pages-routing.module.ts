import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FaqComponent } from './Learningmethods/faq.component';
import { GalleryComponent } from './Courses/gallery.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductListComponent } from './product-list/product-list.component';
import { QuicklinksComponent } from './quicklinks/quicklinks.component';
import { ClinicalservicesComponent } from './Enquiry/clinicalservices.component';
import { SupportComponent } from './contactus/support.component';
import { ConsultnowComponent } from './aims &obj/consultnow.component';
import { SpecialityHospitalComponent } from './speciality-hospital/speciality-hospital.component';
import { PaymentResultComponent } from './payment-result/payment-result.component';
import { PartnersComponent } from './partners/partners.component';
import { PartnerPageComponent } from './partner-page/partner-page.component';
import { OtppopupComponent } from './otppopup/otppopup.component';
import { VcallComponent } from './vcall/vcall.component';
import { TermsconditionsComponent } from './termsconditions/termsconditions.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { NewsourcesComponent } from './newsources/newsources.component';
import { HomecareComponent } from './Student/homecare.component';
import { LabTestPackagesComponent } from './lab-test-packages/lab-test-packages.component';
import { LabTestPackagesCartComponent } from './lab-test-packages-cart/lab-test-packages-cart.component';
import { SpecalistdoctorComponent } from './specalistdoctor/specalistdoctor.component';
import { HealthpackagesComponent } from './Vison&misson/healthpackages.component';
import { CartComponent } from './ourcommitment/cart.component';
import { ConsultNowNavbarComponent } from './Aviation/consult-now-navbar.component';
import { AboutusPageComponent } from './aboutus-page/aboutus-page.component';
import { LocationComponent } from './location/location.component';
import { AircargoComponent } from '../aircargo/aircargo.component';
import { AirticketComponent } from '../airticket/airticket.component';
import { CabincrewComponent } from '../cabincrew/cabincrew.component';
import { CertificatesComponent } from '../certificates/certificates.component';
import { DiplomacourseComponent } from '../diplomacourse/diplomacourse.component';
import { GroundHandlersComponent } from '../ground-handlers/ground-handlers.component';
import { OperationalinfrastructureComponent } from '../operationalinfrastructure/operationalinfrastructure.component';
import { SubjectareasComponent } from '../subjectareas/subjectareas.component';
import { TrainingcentersComponent } from '../trainingcenters/trainingcenters.component';
import { TrainingpartnersComponent } from '../trainingpartners/trainingpartners.component';
import { TraveltourismComponent } from '../traveltourism/traveltourism.component';
import { TravelTourismsComponent } from '../travel-tourisms/travel-tourisms.component';
import { EnqiuryFormComponent } from './enqiury-form/enqiury-form.component';
import { AssesmentsComponent } from '../assesments/assesments.component';
import { JoinusComponent } from './joinus/joinus.component';
import { DeleverymethodsComponent } from '../deleverymethods/deleverymethods.component';
import { NewseventsComponent } from './newsevents/newsevents.component';
import { PhotosvideosComponent } from './photosvideos/photosvideos.component';
import { AviationVideosComponent } from '../aviation-videos/aviation-videos.component';
import { OurmembersComponent } from '../ourmembers/ourmembers.component';
import { FranchisesDUPComponent } from '../franchises-dup/franchises-dup.component';

const routes: Routes = [
  {
    path:'', redirectTo:'homepage', pathMatch:'full'
  },
  {
    path:'termsconditions', component:TermsconditionsComponent
  },
  
  {
    path:'privacypolicy', component:PrivacypolicyComponent
  },
  {
    path:'ourmembers', component:OurmembersComponent
  },
  {
    path:'Franchises', component:FranchisesDUPComponent
  },
  {
    path:'Learning_Methods', component:FaqComponent
  },

  {
    path:'specalist/:sD_Id', component:SpecalistdoctorComponent
  },
 
  {
    path:'newsources', component:NewsourcesComponent
  },
 
  {
    path: 'partners', component: PartnersComponent
  },
  {
    path: 'vcall', component: VcallComponent
  },
  
  {
    path:'homepage', component:HomepageComponent
  },
  {
    path:'student', component:HomecareComponent
  },
  {
    path:'cabincrew', component:CartComponent
  },
  {
    path:'contactus', component:SupportComponent
  },
  {
    path:'aims&objectives', component:ConsultnowComponent
  },
  {
    path:'franchise', component:AboutusComponent
  },


  
  {
    path:'carrers', component:GalleryComponent
  },

  {
    path:'quicklinks', component:QuicklinksComponent
  },
  {
    path:'enquiry', component:ClinicalservicesComponent
  },
  {
    path:'specialityHospital', component:SpecialityHospitalComponent
  },
  {
    path:'ourcommitment', component:CartComponent
  },
  {
    path:'paymentresult', component:PaymentResultComponent
  },
  {
    path:'vision&mission', component:HealthpackagesComponent
  },
  {
    path:'why_avitation', component:HealthpackagesComponent
  },
  {
    path:'Aviation', component:ConsultNowNavbarComponent
  },
  {
    path:'aboutus-page', component:AboutusPageComponent
  }, 
  {
    path:'location', component:LocationComponent
  },

  {
    path:'airticket', component: AirticketComponent
  },
   {
    path:'frandash', component: FranchisesDUPComponent
  },
  {
    path:'Operationalstructure', component: OperationalinfrastructureComponent
  },
  {
    path:'airticket', component: AirticketComponent
  },
  {
    path:'aircargo', component: AircargoComponent
  },
  {
    path:'cabincrews', component: CabincrewComponent
  },
  {
    path:'GroundHandlers', component: GroundHandlersComponent
  },
  {
    path:'certificates', component: CertificatesComponent
  },
  {
    path:'Privacy&Policy', component: JoinusComponent
  }, 
  {
    path:'Dipolamacourses', component: DiplomacourseComponent
  }, 
   {
    path:'subjectareas', component: SubjectareasComponent
  },
  {
    path:'tariningcenters', component: TrainingcentersComponent
  },
  {
    path:'diplomamethods', component:DeleverymethodsComponent
  },

  {
    path:'Trainingpartners', component: TrainingpartnersComponent
  },
  {
    path:'Travel&Tourism', component: TravelTourismsComponent
  },
  {
    path:'enquiry-form', component: EnqiuryFormComponent
  },
  {
    path:'news&events', component: NewseventsComponent
  },
  {
    path:'AviationVideos', component:AviationVideosComponent
  },
  {
    path:'AviationPhotos', component:PhotosvideosComponent
  },
  {
    path:'assesments', component: AssesmentsComponent
  },
  { path: 'sitemap.xml', redirectTo: 'assets/sitemap.xml' },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
