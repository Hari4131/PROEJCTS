import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { product, product_kit } from './data-type';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  sD_ClinicalSpecilist: string;

  constructor(private http: HttpClient) { }

  getAllproducts(): Observable<any>{
    return this.http.get<any>(`${environment.API_Base_URL}`+`online/Package/GetAllPackages_Online`)
  }

  productListById(id:any){
    return this.http.get(`${environment.API_Base_URL}`+`productList/getAllproductListById?Id=${id}`)
  }

  InsertCustomer_Callback_Online(data: any) {
    return this.http.post(`${environment.API_Base_URL}` + `ContactUs/InsertContactUs`, data)
  }
  InsertproductCartList(data:product):Observable<product>{
    return this.http.post<product>(`${environment.API_Base_URL}`+`online/Package/InsertProductCartList_Online`,data)
  }

  getAllproductCartListById(userId:any): Observable<any>{
    return this.http.get<any>(`${environment.API_Base_URL}`+`online/Package/GetAllProductCartListById_Online?userId=${userId}`)
  }

   removeToCart(cart_id:any):Observable<any> {
    return this.http.delete<any>(`${environment.API_Base_URL}`+`online/Package/DeleteProductCartList_Online?cart_id=${cart_id}`);
  }
  
  getAllLab(){
    return this.http.get(`${environment.API_Base_URL}`+`online/Package/GetAllLabs_Online`)
  }

  Get_Homepage_statusCount(){
    return this.http.get(`${environment.API_Base_URL}`+`DashBoard_Count/Get_Homepage_statusCount`)

  }
  Get_AllNutritionlist(){
    return this.http.get(`${environment.API_Base_URL}`+`Wellness/GetAllNutritionlist`)
  }
  Get_AllFitness_Expert(){
    return this.http.get(`${environment.API_Base_URL}`+`Wellness/GetAllFitness_Expert`)
  }

  // wellness Packages
  Get_wellness_names(){
    return this.http.get(`${environment.API_Base_URL}`+`online/Package/GetWellnessNames`)
  }
  Get_specilaistdoctor(){
    return this.http.get(`${environment.API_Base_URL}`+`SpecilistDoctor/GetSpecilistDoctor_DD`)
  }
  Specalist_Doctor_Id(SD_Id: any) {
    return this.http.get(`${environment.API_Base_URL}` + `Doctor/GetDoctorSpecialistDoctorById?SD_Id=${SD_Id}`)
  }

  Get_Wellness_packages(){
    return this.http.get(`${environment.API_Base_URL}`+`online/Package/Wellness_packages`)
  }

  remove_wellnessCart_list(cart_id:any):Observable<any>{
    return this.http.delete(`${environment.API_Base_URL}`+`online/Package/DeleteWellnessCart_List?cart_id=${cart_id}`)
  }

  Get_WellnessListById(userId:any){
    return this.http.get(`${environment.API_Base_URL}`+`online/Package/WellnessCart_ListById?userId=${userId}`) 
  }

  Insert_WellnessproductCartList(data:product):Observable<product>{
    return this.http.post<product>(`${environment.API_Base_URL}`+`online/Package/Insert_WellnessCart_List`,data)
  }

  GetAllPackages_PHC_lab_test_packages(){
    return this.http.get(`${environment.API_Base_URL}`+`PriceMaster/GetAllPackages_PHC`)
  }

  GetAllPackages_PHC_lab_test_packages_ById(data:any){
    return this.http.get(`${environment.API_Base_URL}`+`online/Package/GetPackagePriceById_online?userName=${data}`)
  }
  
  Insert_productCartList_kit(data:product_kit):Observable<product_kit>{
    return this.http.post<product_kit>(`${environment.API_Base_URL}`+`online/Package/InsertPatientPackage_Online`,data)
  }



  get_course_dd() {
    return this.http.get(`${environment.API_Base_URL}` + `Branch/GetCourse_DD`)
    }
  Contact_us(data: any) {
    return this.http.post(`${environment.API_Base_URL}` + 'CustomerCallback/InsertCustomerCallback', data);
    // return this.http.post(`${this.api_url}` + 'Package/packages_multiplelabs');
  }
  getallmediaodata(data:any) {
    return this.http.get(`${environment.API_Base_URL}` + `MediaAwareness/GetAllMediaDocument`,data)
  }
  remove_productCartList_kit(cart_id:any):Observable<any>{
    return this.http.delete(`${environment.API_Base_URL}`+`online/Package/DeletePatientPackage_Online?pck_id=${cart_id}`)
  }
  getBranch_dd() {
    return this.http.get(`${environment.API_Base_URL}` + `Branch/GetBranch_DD`)
    }
  GetAllMediaDocument_by_id(data:any){
    return this.http.get(`${environment.API_Base_URL}` + `MediaAwareness/GetMediaAwarnessDocumentByMediaId?media_Id=${data}`)
  }
  Post_Application(data: any) {
    return this.http.post(`${environment.API_Base_URL}` + 'StudentDetails/InsertStudentDetails', data);
    // return this.http.post(`${this.api_url}` + 'Package/packages_multiplelabs');
  }
  Get_StateDD() {
    return this.http.get(`${environment.API_Base_URL}` + `State/GetAllState`)
    }

    Get_bloodDD() {
    return this.http.get(`${environment.API_Base_URL}` + `StudentDetails/BloodGroupDD`)
    }
    Get_CertificateCourse() {
    return this.http.get(`${environment.API_Base_URL}` + `StudentDetails/CertificateCoursesDD`)
    }
    Get_DiplomaCourse() {
    return this.http.get(`${environment.API_Base_URL}` + `StudentDetails/DiplomaCoursesDD`)
    }
    getSitemapContent() {
      return this.http.get('assets/sitemap.xml', { responseType: 'text' });
    }
}