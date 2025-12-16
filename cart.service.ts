import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { ApiService } from './api.service';
import { product } from './data-type';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  httpOptions: any;

  constructor(private http: HttpClient, private api: ApiService, private toastr: ToastrService) {
    //saheb
    let accesstoken = localStorage.getItem('accessToken');
    if (accesstoken != null && accesstoken != '' && typeof (accesstoken) != undefined) {
      this.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + accesstoken,
          'No-Auth': 'True'
        })
      };
    }
  }

  cardiology(id: any) {
    return this.http.get(`${environment.API_Base_URL}` + `Doctor/GetDoctorbyDispline?Des_Id=${id}`)
  }

  getDoctorById(DO_Id: any) {
    return this.http.get(`${environment.API_Base_URL}` + `Doctor/getdisplinedoctor_ById?DO_Id=${DO_Id}`)
  }

  clinicalDoctor(): Observable<any> {
    return this.http.get(`${environment.API_Base_URL}` + `Doctor/GetAvailableDoctor_Todaydate`)
  }

  Specalist_Doctor_Id(id: any) {
    return this.http.get(`${environment.API_Base_URL}` + `Doctor/GetDoctorSpecialistDoctorById?SD_Id=${id}`)
  }

  Get_Complaintsdd() {
    return this.http.get(`${environment.API_Base_URL}` + `ComplaintMst/GetComplaintMst_DD`)
  }
  hospitalDoctor() {
    return this.http.get(`${environment.API_Base_URL}` + `Doctor/HospitalDoctor`)
  }
  specialityDoctor() {
    return this.http.get(`${environment.API_Base_URL}` + `Doctor/SpecialityDoctor`)
  }
  //saheb new for doctor info
  GetConsult_Meeting_Doctor(meeting_id: any) {
    return this.http.get(`${environment.API_Base_URL}` + `Consultation/GetConsult_Meeting_Doctor/${meeting_id}`, this.httpOptions)
  }

  //saheb new for doctor info
  GetConsultation_Doctor_Detail(pate_id: any, cons_id: any) {
    return this.http.get(`${environment.API_Base_URL}` + `Consultation/GetConsultation_Doctor_Detail/${pate_id}/${cons_id}`)
  }
  getSitemapContent() {
    return this.http.get('assets/sitemap.xml', { responseType: 'text' });
  }
  //saheb
  joinMeeting(data: any) {
    return this.http.post(`${environment.API_Base_URL}` + 'VideoConference/JoinMeeting_Online', data, this.httpOptions);
  }
  Get_Userprofile() {
    return this.http.get(`${environment.API_Base_URL}` + `User/GetUserByname`)
  }

  InsertAppointment_consultnow(data: any) {
    return this.http.post(`${environment.API_Base_URL}` + `Payment/CreatePaymentRequest_Online`, data)
  }

  UpdatePaymentStatus(data: any) {
    return this.http.post(`${environment.API_Base_URL}` + 'Payment/UpdatePaymentStatus_Online', data);
  }

  GetAllLabs() {
    return this.http.get(`${environment.API_Base_URL}` + 'online/Package/GetAllLabs_Online');
  }

  GetAllLabPackages() {
    return this.http.get(`${environment.API_Base_URL}` + 'online/Package/GetAllProductList');
  }
  Contact_us(data: any) {
    return this.http.post(`${environment.API_Base_URL}` + 'api/ContactUs/InsertContactUs', data);
  }
  GetAllPackages(data: any) {
    return this.http.post(`${environment.API_Base_URL}` + 'Package/packages_multiplelabs', data);
    // return this.http.post(`${this.api_url}` + 'Package/packages_multiplelabs');
  }

  GetPackages_LabId(data: any) {
    return this.http.get(`${environment.API_Base_URL}` + `Package/Getlabtest_packageId?PackageMst_Id_FK=${data}`)
  }

  // InsertCustomerCallback(data: any) {
  //   return this.http.post(`${environment.API_Base_URL}` + `CustomerCallback/InsertCustomerCallback`, data)
  // }

  Get_concerndd() {
    return this.http.get(`${environment.API_Base_URL}` + `CustomerCallback/GetAllCustomerConcern`)
  }

  GetAllConcern(data: any) {
    return this.http.get(`${environment.API_Base_URL}` + `CustomerCallback/GetAllConcern/${data}`)
  }


  public cartItemList: any = []
  localData = localStorage.getItem('products')
  localId = localStorage.getItem('Id')
  localDataArray = JSON.parse('' + this.localData)
  productListCartList = new BehaviorSubject<any>(this.localDataArray);

  localData_wellness = localStorage.getItem('products_wellness')
  localDataArray_wellness = JSON.parse('' + this.localData_wellness)
  productListCartList_wellness = new BehaviorSubject<any>(this.localDataArray_wellness);
  productListCartListFunction_wellness() {
    return this.productListCartList_wellness.asObservable();
  }

  public productList = new BehaviorSubject<any>([]);
  public productList1 = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");

  dynamicDataSubject = new BehaviorSubject<any>(null);
  dynamicData$ = this.dynamicDataSubject.asObservable();

  setDynamicData(data: any) {
    this.dynamicDataSubject.next(data);
  }

  productListCartListFunction() {
    return this.productListCartList.asObservable();
  }

  localData_kit = localStorage.getItem('products_kit')
  localDataArray_kit = JSON.parse('' + this.localData_kit)
  productListCartList_kit = new BehaviorSubject<any>(this.localDataArray_kit);
  dynamicDataSubject_kit = new BehaviorSubject<any>(null);
  dynamicData$_kit = this.dynamicDataSubject_kit.asObservable();

  setDynamicData_kit(data: any) {
    this.dynamicDataSubject_kit.next(data);
  }

  productListCartListFunction_kit() {
    return this.productListCartList_kit.asObservable();
  }

  getProducts() {
    return this.productList.asObservable();
    // this.productsJSON = localStorage.getItem('products');
    // return JSON.parse(this.productsJSON) || [];
  }
  GetAllPackagesTest() {
    return this.http.get(`${environment.API_Base_URL}` + 'Package/GetAllPackages');
    // return this.http.post(`${this.api_url}` + 'Package/packages_multiplelabs');
  }
  productsJSON: any
  getProducts1() {
    return this.productList1.asObservable();
  }

  cartItemData: any = []
  addtoCart(product: any): void {
    let uniqId = localStorage.getItem('products')
    if (!localStorage.getItem('Id')) {
      // if(uniqId?.includes(product.pkg_id)){
      if (uniqId?.includes(product.pkg_id)) {
        this.toastr.error('Package already exists', 'Error')
      } else {
        const products = this.getCartProducts();
        products.push(product);
        this.saveProducts(products);
        this.productListCartList.next(products);
        this.toastr.success('Package added to cart', 'Success')
      }
    } else {
      let user = localStorage.getItem('Id');
      let user_id = user;// && JSON.parse(user);
      this.cartItemData = {
        ...product,
        cart_id: product.pkg_id,
        user_id
      }
      //delete cartItemData.id;
      this.api.InsertproductCartList(this.cartItemData).subscribe((data: any) => {
        this.toastr.success('Package added to cart', 'Success')
        this.api.getAllproductCartListById(user_id).subscribe(res => {
          this.setDynamicData(res);
          this.getUserCartListById()
        })
      })
    }
  }

  addtoCart_kit(product: any): void {
    let uniqId = localStorage.getItem('products_kit')
    if (!localStorage.getItem('phoneNumber')) {
      // if(uniqId?.includes(product.pkg_id)){
      if (uniqId?.includes(product.pck_id)) {
        this.toastr.error('Package already exists', 'Error')
      } else {
        const products = this.getCartProducts_kit();
        products.push(product);
        this.saveProducts_kit(products);
        this.productListCartList_kit.next(products);
        this.toastr.success('Package added to cart', 'Success')
      }
    } else {
      let user = localStorage.getItem('phoneNumber');
      let userName = user;// && JSON.parse(user);
      this.cartItemData = {
        // ...product,
        price_Id: product.price_Id,
        userName
      }
      //delete cartItemData.id;
      console.log("Insert kit data", this.cartItemData)
      this.api.Insert_productCartList_kit(this.cartItemData).subscribe((data: any) => {
        this.toastr.success('Package added to cart', 'Success')
        this.getUserCartListById_kit()
        this.api.GetAllPackages_PHC_lab_test_packages_ById(user).subscribe(res=>{
          this.setDynamicData_kit(res);
          this.getUserCartListById_kit()
        })
      })
    }
  }
  addtoCart_wellness(product: any): void {
    let uniqId = localStorage.getItem('products_wellness')
    if (!localStorage.getItem('Id')) {
      // if(uniqId?.includes(product.pkg_id)){
      if (uniqId?.includes(product.package_id)) {
        this.toastr.error('Package already exists', 'Error')
      } else {
        const products = this.getCartProducts_wellness();
        products.push(product);
        this.saveProducts_wellness(products);
        this.productListCartList_wellness.next(products);
        this.toastr.success('Package added to cart', 'Success')
      }
    } else {
      let user = localStorage.getItem('Id');
      let user_id = user;// && JSON.parse(user);
      this.cartItemData = {
        ...product,
        cart_id: product.package_id,
        user_id
      }
      //delete cartItemData.id;
      this.api.Insert_WellnessproductCartList(this.cartItemData).subscribe((data: any) => {
        this.toastr.success('Package added to cart', 'Success')
        this.api.Get_WellnessListById(user_id).subscribe(res => {
          this.setDynamicData(res);
          this.getUserCartListById_wellness()
        })
      })
    }
  }
  removeProduct(productId: number): void {
    let products = this.getCartProducts();
    products = products.filter((product: any) => product.id !== productId);
    this.saveProducts(products);
  }
  remove_WellnessProduct(productId: number): void {
    let products = this.getCartProducts_wellness();
    products = products.filter((product: any) => product.id !== productId);
    this.saveProducts_wellness(products);
  }
  saveProducts(products: any[]): void {
    localStorage.setItem('products', JSON.stringify(products));
  }

  getCartProducts(): any[] {
    const productsString = localStorage.getItem('products');
    return productsString ? JSON.parse(productsString) : [];
  }
  saveProducts_kit(products: any[]): void {
    localStorage.setItem('products_kit', JSON.stringify(products));
  }
  getCartProducts_kit(): any[] {
    const productsString = localStorage.getItem('products_kit');
    return productsString ? JSON.parse(productsString) : [];
  }
  saveProducts_wellness(products: any[]): void {
    localStorage.setItem('products_wellness', JSON.stringify(products));
  }
  getCartProducts_wellness(): any[] {
    const productsString = localStorage.getItem('products_wellness');
    return productsString ? JSON.parse(productsString) : [];
  }
  userCart: any = [];
  cartDataCount = new EventEmitter<any>(this.userCart);
  removeItemFromCart(productId: any) {
    if (!localStorage.getItem('Id')) {
      console
      let cartData = localStorage.getItem('products');
      if (cartData) {
        let items: product[] = JSON.parse(cartData);
        items = items.filter((item: product) => item.pkg_id !== productId);
        localStorage.setItem('products', JSON.stringify(items));
        this.productListCartList.next(items);
        this.toastr.success('Package removed from cart', 'Removed');
      }
    } else {
      console.log(productId)
      this.api.removeToCart(productId)
        .subscribe((result: any) => {
          this.getUserCartListById()
          console.log(result)
          this.toastr.success('Package removed from cart', 'Removed')
        })
    }
  }

  removeItemFromCart_kit(productId: any) {
    if (!localStorage.getItem('phoneNumber')) {
      let cartData = localStorage.getItem('products_kit');
      if (cartData) {
        let items: any[] = JSON.parse(cartData);
        items = items.filter((item: any) => item.price_Id !== productId);
        localStorage.setItem('products_kit', JSON.stringify(items));
        this.productListCartList_kit.next(items);
        this.toastr.success('Package removed from cart', 'Removed');
      }
    } else {
      console.log(productId)
      this.api.remove_productCartList_kit(productId)
        .subscribe((result: any) => {
          this.getUserCartListById_kit()
          console.log(result)
          this.toastr.success('Package removed from cart', 'Removed')
        })
    }
  }

  userCart_kit: any = [];
  getUserCartListById_kit() {
    let userId = localStorage.getItem('phoneNumber');
    this.api.GetAllPackages_PHC_lab_test_packages_ById(userId).subscribe((res) => {
      this.userCart_kit = res;
      this.setDynamicData_kit(res)
      console.log("cart_kit", this.userCart_kit)
    })
  }

  getUserCartListById() {
    let userId = localStorage.getItem('Id');
    this.api.getAllproductCartListById(userId).subscribe((res) => {
      this.userCart = res;
      this.setDynamicData(res)
      console.log("user logged cart", this.userCart)
    })
  }
  removeToCartDynamic(productId: any) {
    this.api.removeToCart(productId)
      .subscribe((result: any) => {
        this.toastr.success('Package removed to cart', 'Success')
        this.getUserCartListById()
      })
  }
  wellness_userCart: any = [];
  wellness_cartDataCount = new EventEmitter<any>(this.userCart);
  removeItemFromWellness_Cart(productId: any) {
    if (!localStorage.getItem('Id')) {
      let cartData = localStorage.getItem('products_wellness');
      if (cartData) {
        let items: any[] = JSON.parse(cartData);
        items = items.filter((item: any) => item.package_id !== productId);
        localStorage.setItem('products_wellness', JSON.stringify(items));
        this.productListCartList_wellness.next(items);
        this.toastr.success('Package removed from cart', 'Removed');
      }
    } else {
      console.log(productId)
      this.api.remove_wellnessCart_list(productId)
        .subscribe((result: any) => {
          this.getUserCartListById_wellness()
          console.log(result)
          this.toastr.success('Package removed from cart', 'Removed')
        })
    }
  }

  removeItemFromCart_homecare(productId: any) {
    // if(!localStorage.getItem('Id')){
    //   let cartData = localStorage.getItem('products_wellness');
    //   if (cartData) {
    //     let items: any[] = JSON.parse(cartData);
    //     items = items.filter((item: any) => item.package_id !== productId);
    //     localStorage.setItem('products_wellness', JSON.stringify(items));
    //     this.productListCartList_wellness.next(items);
    //     this.toastr.success('Package removed from cart','Removed');
    //   } 
    // }else{
    //   console.log(productId)
    //   this.api.remove_wellnessCart_list(productId)
    //   .subscribe((result:any)=>{
    //     this.getUserCartListById_wellness()
    //     console.log(result)
    //     this.toastr.success('Package removed from cart','Removed')
    //   })
    // }
  }

  getTotalPrice(): number {
    let grandTotal = 0;
    this.cartItemList.map((a: any) => {
      grandTotal += a.price;
    })
    return grandTotal;
  }

  removeAllCart() {
    this.cartItemList = []
    this.productList.next(this.cartItemList);
    this.productList1.next(this.cartItemList);
  }
  getUserCartListById_wellness() {
    let userId = localStorage.getItem('Id');
    this.api.Get_WellnessListById(userId).subscribe((res) => {
      this.userCart = res;
      this.setDynamicData(res)
      console.log("user logged cart", this.userCart)
    })
  }

  removeToCartDynamic_wellness(productId: any) {
    this.api.remove_wellnessCart_list(productId)
      .subscribe((result: any) => {
        this.toastr.success('Package removed to cart', 'Success')
        this.getUserCartListById_wellness()
      })
  }


  removeAllCart_wellness() {
    this.cartItemList = []
    this.productList.next(this.cartItemList);
    this.productList1.next(this.cartItemList);
  }

  removeToCartDynamic_product_kit(productId: any) {
    this.api.remove_productCartList_kit(productId)
      .subscribe((result: any) => {
        this.toastr.success('Package removed to cart', 'Success')
        this.getUserCartListById_kit()
      })
  }

  itemInCart_wellness(itemId: number): boolean {
    if (!localStorage.getItem('Id')) {
      const productsString = localStorage.getItem('products_wellness');
      let local = productsString ? JSON.parse(productsString) : []
      return local.some((item: any) => item.package_id === itemId);
    } else {
      return this.userCart.some((item: any) => item.package_id === itemId);
    }
  }

  isInCart(itemId: number): boolean {
    if (!localStorage.getItem('Id')) {
      const productsString = localStorage.getItem('products');
      let local = productsString ? JSON.parse(productsString) : []
      return local.some((item: any) => item.pkg_id === itemId);
    } else {
      return this.userCart.some((item: any) => item.pkg_id === itemId);
    }
  }

  isInCart_kit(itemId: number): boolean {
    if (!localStorage.getItem('phoneNumber')) {
      const productsString = localStorage.getItem('products_kit');
      let local = productsString ? JSON.parse(productsString) : []
      return local.some((item: any) => item.price_Id === itemId);
    } else {
      return this.userCart_kit.some((item: any) => item.pck_id === itemId);
    }
  }
}
