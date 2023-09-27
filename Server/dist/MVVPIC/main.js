"use strict";
(self["webpackChunkMVVPIC"] = self["webpackChunkMVVPIC"] || []).push([["main"],{

/***/ 2319:
/*!******************************************!*\
  !*** ./src/app/Services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 4766);




const baseurl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseurl;
const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({ 'Content-Type': 'application/json' })
};
let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
        //Route Athentication============================>
        this.users = {
            role: ["ADMIN"]
        };
    }
    canActivate(next, state) {
        if (next.data[0] == this.users.role) {
            return true;
        }
        else {
            return false;
        }
    }
    // checkUserCredential(uname: string, pass: string){
    //   console.log("route in service",uname,pass);
    //   if(uname == "admin" && pass == "admin")
    //   {
    //     localStorage.setItem('username',uname);
    //     console.log("localStorage data---->",localStorage)
    //     return true;
    //   }
    //   else{
    //     return false;
    //   } 
    // }
    // login details=====================>
    // getLoginDetails(username: string,pass: string ){
    //   console.log("Login details called in service--");
    //   return this.http.get(this.baseurl+"login/"+username+"/"+pass+"").pipe(map(res =>res));
    //   }
    signOut() {
        this.signOut();
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ 1556:
/*!****************************************************!*\
  !*** ./src/app/Services/mainController.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainControllerService": () => (/* binding */ MainControllerService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 6587);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 4766);







const baseurl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseurl;
const token = localStorage.getItem('token');
console.log("get Token inside main service", token);
const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({ 'Content-Type': 'application/json',
        "Authorization": "Bearer " + token })
};
let MainControllerService = class MainControllerService {
    constructor(http, routes) {
        this.http = http;
        this.routes = routes;
    }
    // loginStudent(uname: string, pass: string,) {
    //   if (uname != null && uname != "" || pass != null && pass != "") {
    //     console.log("if condition called");
    //     // cheking route authentication-------------->
    //     var checkUserData = this.logService.getLoginDetails(uname, pass);
    //     var checkedRoute = this.logService.checkUserCredential(uname, pass);
    //     if (checkUserData != null) {
    //       if (checkedRoute == true) {
    //         this.logService.getLoginDetails(uname, pass);
    //         this.routes.navigate(['/home']);
    //       }
    //       else {
    //         this.routes.navigate(['/login']);
    //         this.msg = "Invalid Credential Please Try agian...!";
    //       }
    //     }
    //   }
    //   else {
    //     this.msg = "Invalid Credential Please Try agian...!";
    //   }
    // };
    getStudents() {
        console.log("inside service====");
        return this.http.get(baseurl + "student", httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((data) => {
            return data;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)('Something went wrong!');
        }));
    }
    ;
    getStudentsByid(_id) {
        console.log("inside main services", _id);
        return this.http.get(baseurl + "student" + _id)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((data) => {
            return data;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)('Something went wrong!');
        }));
    }
    ;
    deteleById(_id) {
        console.log("inside main services---delete", _id);
        return this.http.delete(baseurl + "student/" + _id)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((data) => {
            return data;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)('Something went wrong!', error);
        }));
    }
    ;
    addStudent(data) {
        console.log("stdData- in service--->", data);
        console.log("Token in service--->", httpOptions);
        return this.http.post(baseurl + 'student', data, httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((data) => {
            return data;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(error);
        }));
    }
    ;
};
MainControllerService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
MainControllerService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
        providedIn: 'root'
    })
], MainControllerService);



/***/ }),

/***/ 2167:
/*!******************************************!*\
  !*** ./src/app/Services/user.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 6587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 4766);






// import {NGXLogger} from 'ngx-logger';
const token = localStorage.getItem('token');
const baseurl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseurl;
const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({ 'Content-Type': 'application/json',
        "Authorization": "Bearer " + token })
};
console.log("Headers Type", httpOptions);
let UserService = class UserService {
    constructor(http) {
        this.http = http;
        this.logedinUserDetails = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    }
    getUser() {
        return this.http.get(baseurl + "user", httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(res => res));
    }
    getUserById(_id) {
        return this.http.get(baseurl + "user/" + _id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(res => res));
    }
    login(data) {
        return this.http.post(baseurl + 'user/login', data, httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.retry)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((data) => {
            return data;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(error);
        }));
    }
    // getUserEmail(): Observable<any> {
    //   return this.http.get(baseurl + 'user/userEmail')
    //     .pipe(map((data: any) => {
    //       return {
    //         data: data,
    //         params: new HttpParams().append('token', localStorage.getItem('token'))
    //       }
    //     }),
    //       catchError(error => {
    //         return throwError(error);
    //       })
    //     )
    // };
    signUp(userData) {
        let headers = new Headers();
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        console.log("headers--->", httpOptions);
        return this.http.post(baseurl + 'user/signup', userData, httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(res => res));
    }
    deteleById(_id) {
        return this.http.delete(baseurl + "user/" + _id, httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((data) => {
            return data;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)('Something went wrong!');
        }));
    }
    ;
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
UserService = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ 809:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule),
/* harmony export */   "routingComponent": () => (/* binding */ routingComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _views_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/homepage/homepage.component */ 5977);
/* harmony import */ var _Services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Services/auth.service */ 2319);
/* harmony import */ var _views_faculty_faculty_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/faculty/faculty.component */ 2089);
/* harmony import */ var _views_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/footer/footer.component */ 4778);
/* harmony import */ var _views_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/page-not-found/page-not-found.component */ 5618);
/* harmony import */ var _views_exams_exams_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/exams/exams.component */ 6066);
/* harmony import */ var _views_results_results_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/results/results.component */ 8141);
/* harmony import */ var _views_about_college_about_college_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/about-college/about-college.component */ 8753);
/* harmony import */ var _views_about_staff_about_staff_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/about-staff/about-staff.component */ 8533);
/* harmony import */ var _views_mission_vission_mission_vission_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/mission-vission/mission-vission.component */ 2362);
/* harmony import */ var _views_principal_msg_principal_msg_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/principal-msg/principal-msg.component */ 4991);
/* harmony import */ var _views_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/feedback/feedback.component */ 1207);
/* harmony import */ var _views_img_gallery_img_galery_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/img-gallery/img-galery.component */ 6597);
/* harmony import */ var _views_slides_slides_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/slides/slides.component */ 7095);
/* harmony import */ var _views_dynamic_page_dynamic_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/dynamic-page/dynamic-page.component */ 1798);
/* harmony import */ var _views_admin_panel_stdreport_stdreport_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./views/admin-panel/stdreport/stdreport.component */ 4444);
/* harmony import */ var _views_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./views/contact-us/contact-us.component */ 7337);




















// import {AdminPanelModule} from './views/admin-panel/admin-panel.module'
const routes = [
    {
        path: 'admin',
        canActivate: [_Services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService],
        data: ['ADMIN'],
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_views_admin-panel_admin-panel_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./views/admin-panel/admin-panel.module */ 8405))
            .then(mod => mod.AdminPanelModule)
    },
    // {path: '**',component: PageNotFoundComponent},
    // {
    //   path: 'login',
    //   component: LoginComponent,
    //   // loadChildren: ()=> import('./views/homepage/homepage.module').then(m => m.HomepageModule)
    // }, 
    // {
    //   path: 'register',
    //   component: RegisterComponent
    // },
    {
        path: 'home',
        component: _views_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_0__.HomepageComponent
    },
    // {
    //   path: 'dashboard',
    //   canActivate: [AuthService],
    //   data: ['ADMIN'],
    //   component: DashboardComponent
    // },
    {
        path: 'slids',
        component: _views_slides_slides_component__WEBPACK_IMPORTED_MODULE_13__.SlidesComponent
    },
    {
        path: 'footer',
        canActivate: [_Services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService],
        data: ['ADMIN'],
        component: _views_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent
    },
    {
        path: 'academics',
        canActivate: [_Services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService],
        data: ['ADMIN'],
        component: _views_dynamic_page_dynamic_page_component__WEBPACK_IMPORTED_MODULE_14__.DynamicPageComponent
    },
    {
        path: 'report',
        canActivate: [_Services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService],
        data: ['ADMIN'],
        component: _views_admin_panel_stdreport_stdreport_component__WEBPACK_IMPORTED_MODULE_15__.StdreportComponent
    },
    {
        path: 'faculty',
        canActivate: [_Services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService],
        data: ['ADMIN'],
        component: _views_faculty_faculty_component__WEBPACK_IMPORTED_MODULE_2__.FacultyComponent
    },
    {
        path: 'about-college',
        component: _views_about_college_about_college_component__WEBPACK_IMPORTED_MODULE_7__.AboutCollegeComponent
    },
    {
        path: 'about-staff',
        component: _views_about_staff_about_staff_component__WEBPACK_IMPORTED_MODULE_8__.AboutStaffComponent
    },
    {
        path: 'contact-us',
        component: _views_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_16__.ContactUsComponent
    },
    // {
    //   path: 'admission-details',
    //   component: AdmissionDetailsComponent
    // },
    {
        path: 'exams',
        component: _views_exams_exams_component__WEBPACK_IMPORTED_MODULE_5__.ExamsComponent
    },
    {
        path: 'results',
        component: _views_results_results_component__WEBPACK_IMPORTED_MODULE_6__.ResultsComponent
    },
    {
        path: 'mis-vission',
        component: _views_mission_vission_mission_vission_component__WEBPACK_IMPORTED_MODULE_9__.MissionVissionComponent
    },
    {
        path: 'principal-msg',
        component: _views_principal_msg_principal_msg_component__WEBPACK_IMPORTED_MODULE_10__.PrincipalMsgComponent
    },
    {
        path: 'feedback',
        component: _views_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_11__.FeedbackComponent
    },
    {
        path: 'gallery',
        component: _views_img_gallery_img_galery_component__WEBPACK_IMPORTED_MODULE_12__.ImgGaleryComponent
    },
    {
        path: '',
        redirectTo: "home",
        pathMatch: 'full'
    },
    {
        path: '**',
        component: _views_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__.PageNotFoundComponent
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_18__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule.forRoot(routes, {})],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule]
    })
], AppRoutingModule);

const routingComponent = [_views_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_0__.HomepageComponent,
    _views_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent,
    _views_exams_exams_component__WEBPACK_IMPORTED_MODULE_5__.ExamsComponent,
    _views_results_results_component__WEBPACK_IMPORTED_MODULE_6__.ResultsComponent,
    _views_about_college_about_college_component__WEBPACK_IMPORTED_MODULE_7__.AboutCollegeComponent,
    _views_about_staff_about_staff_component__WEBPACK_IMPORTED_MODULE_8__.AboutStaffComponent,
    _views_mission_vission_mission_vission_component__WEBPACK_IMPORTED_MODULE_9__.MissionVissionComponent,
    _views_principal_msg_principal_msg_component__WEBPACK_IMPORTED_MODULE_10__.PrincipalMsgComponent,
    _views_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_11__.FeedbackComponent,
    _views_img_gallery_img_galery_component__WEBPACK_IMPORTED_MODULE_12__.ImgGaleryComponent,
    _views_slides_slides_component__WEBPACK_IMPORTED_MODULE_13__.SlidesComponent,
    _views_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__.PageNotFoundComponent
];


/***/ }),

/***/ 721:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.css?ngResource */ 3088);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _Services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Services/auth.service */ 2319);
/* harmony import */ var _Services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Services/user.service */ 2167);







let AppComponent = class AppComponent {
    constructor(authService, routes, userService, 
    // private toastrService: ToastrService,
    activatedRoute) {
        this.authService = authService;
        this.routes = routes;
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.title = 'mvvpic';
        this.adminMenus = false;
        this.HideimgSlidder = true;
        this.facultyMenues = false;
        this.loginStatus = false;
        this.HideLoginBtn = true;
        this.loginProfile = false;
        this.isActiveSlids = true;
    }
    ngOnInint() {
        console.log("logedin sts ", sessionStorage.getItem('loginStatus'));
    }
    // url = document.URL;
    // red = (url.substring(url.lastIndexOf('=') + 1));
    // window.location.replace("https://api.whatsapp.com/send?text=" + red);
    ngAfterViewChecked() {
        this.userService.logedinUserDetails.subscribe((data) => {
            this.logedinUserDetails = data[0];
        });
        if (sessionStorage.getItem('loginStatus') === '1') {
            // console.log("inside if", this.logedinUserDetails)
            let loginUserType = this.logedinUserDetails?.userType; //sessionStorage.getItem('loginUserType');
            setInterval(() => {
                this.currentDateTime = new Date();
            }, 1000);
            if (loginUserType === 'admin') {
                this.adminMenus = true;
                this.HideLoginBtn = false;
                this.loginProfile = true;
            }
            if (loginUserType === 'faculty') {
                this.facultyMenues = true;
                this.HideLoginBtn = false;
                this.loginProfile = true;
            }
            // console.log("userType in home page", loginUserType)
        }
        else {
            // console.log("inside else");
            this.adminMenus = false;
            this.HideLoginBtn = true;
            this.loginProfile = false;
        }
    }
    ngAfterViewInit() {
    }
    logout() {
        console.log("logout clicked");
        localStorage.removeItem('token');
        sessionStorage.removeItem('userType');
        sessionStorage.removeItem('loginStatus');
        this.adminMenus = false;
        this.loginProfile = false;
        this.routes.navigate(['./home']);
        // this.toastrService.success("Successfully loged out")
        // alert("Sucessfully Loged Out")
    }
    signOut() {
        this.authService.signOut();
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
};
AppComponent.ctorParameters = () => [
    { type: _Services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _Services_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 23:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-pagination */ 5595);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 809);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 721);
/* harmony import */ var _Services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Services/auth.service */ 2319);
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angularx-social-login */ 6727);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _loader_interceptor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loader/interceptor.service */ 7870);
/* harmony import */ var _views_dynamic_page_dynamic_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/dynamic-page/dynamic-page.component */ 1798);
/* harmony import */ var _views_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/contact-us/contact-us.component */ 7337);















let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.routingComponent,
            _views_dynamic_page_dynamic_page_component__WEBPACK_IMPORTED_MODULE_5__.DynamicPageComponent,
            _views_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_6__.ContactUsComponent
            // NewAdmissionComponent
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule,
            ngx_pagination__WEBPACK_IMPORTED_MODULE_0__.NgxPaginationModule,
            angularx_social_login__WEBPACK_IMPORTED_MODULE_14__.SocialLoginModule,
            // WavesModule,
            // ButtonsModule,
            // IconsModule,
            // LightBoxModule,
            // CarouselModule,
            // ModalModule,
            // ChartSimpleModule,
            // ChartsModule,
            // GoogleMapsModule,
            // ToastrModule.forRoot(),
            // BrowserAnimationsModule,
            // LoggerModule.forRoot({
            //   serverLoggingUrl: '${environment.baseurl}',
            //   level: environment.logLevel,
            //   serverLogLevel: environment.serverLogLevel,
            //   disableConsoleLogging: false
            // })
        ],
        providers: [{ provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HTTP_INTERCEPTORS, useClass: _loader_interceptor_service__WEBPACK_IMPORTED_MODULE_4__.InterceptorService, multi: true, },
            {
                provide: 'SocialAuthServiceConfig',
                useValue: {
                    autoLogin: false,
                    providers: [
                        {
                            id: angularx_social_login__WEBPACK_IMPORTED_MODULE_14__.GoogleLoginProvider.PROVIDER_ID,
                            provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_14__.GoogleLoginProvider('1043334809034-h3gck3cp5c2boggj9hg5dhrl172fr5ms.apps.googleusercontent.com'),
                        },
                        {
                            id: angularx_social_login__WEBPACK_IMPORTED_MODULE_14__.FacebookLoginProvider.PROVIDER_ID,
                            provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_14__.FacebookLoginProvider('960288311068672'),
                        },
                    ], AuthService: _Services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService,
                },
            },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent]
    })
], AppModule);



/***/ }),

/***/ 7870:
/*!***********************************************!*\
  !*** ./src/app/loader/interceptor.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InterceptorService": () => (/* binding */ InterceptorService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 4661);
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loader.service */ 6124);




let InterceptorService = class InterceptorService {
    constructor(loaderService) {
        this.loaderService = loaderService;
    }
    // intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //   const loaderService  = this.injector.get(LoaderService);
    //   loaderService.isLoading.next(false); 
    //  return next.handle(req).pipe(
    //    finalize(()=>{
    //      loaderService.isLoading.next(false);
    //    })
    //  )
    intercept(req, next) {
        this.loaderService.isLoading.next(true);
        return next.handle(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.finalize)(() => {
            this.loaderService.isLoading.next(false);
        }));
    }
};
InterceptorService.ctorParameters = () => [
    { type: _loader_service__WEBPACK_IMPORTED_MODULE_0__.LoaderService }
];
InterceptorService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], InterceptorService);



/***/ }),

/***/ 6124:
/*!******************************************!*\
  !*** ./src/app/loader/loader.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoaderService": () => (/* binding */ LoaderService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 4505);



let LoaderService = class LoaderService {
    constructor() {
        this.isLoading = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    }
};
LoaderService.ctorParameters = () => [];
LoaderService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], LoaderService);



/***/ }),

/***/ 8753:
/*!****************************************************************!*\
  !*** ./src/app/views/about-college/about-college.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutCollegeComponent": () => (/* binding */ AboutCollegeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _about_college_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about-college.component.html?ngResource */ 6471);
/* harmony import */ var _about_college_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about-college.component.css?ngResource */ 5322);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let AboutCollegeComponent = class AboutCollegeComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutCollegeComponent.ctorParameters = () => [];
AboutCollegeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-about-college',
        template: _about_college_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_about_college_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AboutCollegeComponent);



/***/ }),

/***/ 8533:
/*!************************************************************!*\
  !*** ./src/app/views/about-staff/about-staff.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutStaffComponent": () => (/* binding */ AboutStaffComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _about_staff_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about-staff.component.html?ngResource */ 3466);
/* harmony import */ var _about_staff_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about-staff.component.css?ngResource */ 758);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let AboutStaffComponent = class AboutStaffComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutStaffComponent.ctorParameters = () => [];
AboutStaffComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-about-staff',
        template: _about_staff_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_about_staff_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AboutStaffComponent);



/***/ }),

/***/ 4444:
/*!********************************************************************!*\
  !*** ./src/app/views/admin-panel/stdreport/stdreport.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StdreportComponent": () => (/* binding */ StdreportComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _stdreport_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stdreport.component.html?ngResource */ 1518);
/* harmony import */ var _stdreport_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stdreport.component.css?ngResource */ 1087);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _Services_mainController_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Services/mainController.service */ 1556);
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-smart-table */ 6819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);








// import { NGXLogger } from 'ngx-logger';

let StdreportComponent = class StdreportComponent {
    constructor(_mainService, router, http) {
        this._mainService = _mainService;
        this.router = router;
        this.http = http;
        this.collection = { count: 10, data: [] };
        this.p = 1;
        this.count = 5;
        this.Data = [];
        this.tData = false;
        this.addedDay = function addDays() {
            var dateObj = new Date();
            var val = dateObj.getTime();
            //86400 * 1000 * 3  Each day is 86400 seconds 
            var days = 604800000;
            val = val + days;
            dateObj = new Date(val); // ********important*********//
            val = dateObj.getMonth() + 1 + "/" + dateObj.getDate() + "/" + dateObj.getFullYear();
            alert(val);
        };
        this.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_3__.LocalDataSource(this.Data);
    }
    pageChanged(event) {
        this.config.currentPage = event;
    }
    ngOnInit() {
        this.stdReportForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormGroup({
            std_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl(''),
            std_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl(''),
            startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl(''),
            endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl(''),
        });
        console.log("inside student Component");
        this.tData = true;
        this._mainService.getStudents().subscribe((result) => {
            this.Data = result;
            this.numerOfResult = this.Data.length;
            console.log("All Data-->", this.Data);
        });
        var dt = new Date();
    }
    filter(event) {
        console.log("------=", this.std_id);
        this._mainService.getStudentsByid(this.std_id).subscribe((result) => {
            console.log(result);
            this.Data.push(result);
        });
    }
    ;
    search(term) {
        console.log("search=====>");
        if (!term) {
            this.filterData = this.Data;
        }
        else {
            this.filterData = this.Data.filter(x => x.name.trim().toLowerCase().includes(term.trim().toLowerCase()));
        }
    }
    ;
    delete(value) {
        console.log("inside Delete-->", value);
        let index = this.Data.indexOf(value);
        this.Data.splice(index, 1);
        this.tData = true;
        this._mainService.deteleById(value).subscribe((result) => {
            console.log(result);
            this.Data.push(this._mainService.getStudents());
        });
    }
    exportClick(AllData) {
        console.log("export click called", this.Data);
        // this._csvService.download_CSV(this.Data, 'studentreport');
    }
    movetoAdmission() {
        this.router.navigate(['/admission']);
    }
};
StdreportComponent.ctorParameters = () => [
    { type: _Services_mainController_service__WEBPACK_IMPORTED_MODULE_2__.MainControllerService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient }
];
StdreportComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-stdreport',
        template: _stdreport_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_stdreport_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], StdreportComponent);



/***/ }),

/***/ 7337:
/*!**********************************************************!*\
  !*** ./src/app/views/contact-us/contact-us.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactUsComponent": () => (/* binding */ ContactUsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _contact_us_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact-us.component.html?ngResource */ 2562);
/* harmony import */ var _contact_us_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact-us.component.css?ngResource */ 151);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);





let ContactUsComponent = class ContactUsComponent {
    constructor() {
        this.lat = 28.704060;
        this.long = 77.102493;
        this.googleMapType = 'satellite';
    }
    ngOnInit() {
        this.questionForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(''),
            subject: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(''),
            mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(''),
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('')
        });
    }
    onSubmit() {
        console.log(this.questionForm.value);
    }
};
ContactUsComponent.ctorParameters = () => [];
ContactUsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-contact-us',
        template: _contact_us_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_contact_us_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ContactUsComponent);



/***/ }),

/***/ 1798:
/*!**************************************************************!*\
  !*** ./src/app/views/dynamic-page/dynamic-page.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynamicPageComponent": () => (/* binding */ DynamicPageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _dynamic_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dynamic-page.component.html?ngResource */ 3102);
/* harmony import */ var _dynamic_page_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dynamic-page.component.css?ngResource */ 8725);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);





let DynamicPageComponent = class DynamicPageComponent {
    constructor(_fb) {
        this._fb = _fb;
    }
    ngOnInit() {
        this.dynamicForm = this._fb.group({
            fullname: this._fb.array([this.createFieldGroup()])
        });
    }
    addMore() {
        alert("add");
        const fullname = this.dynamicForm.get('fullname');
        fullname.push(this.createFieldGroup());
    }
    createFieldGroup() {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormGroup({
            fullname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormControl('')
        });
    }
};
DynamicPageComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormBuilder }
];
DynamicPageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-dynamic-page',
        template: _dynamic_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_dynamic_page_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DynamicPageComponent);



/***/ }),

/***/ 6066:
/*!************************************************!*\
  !*** ./src/app/views/exams/exams.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExamsComponent": () => (/* binding */ ExamsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _exams_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exams.component.html?ngResource */ 6030);
/* harmony import */ var _exams_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exams.component.css?ngResource */ 5664);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let ExamsComponent = class ExamsComponent {
    constructor() { }
    ngOnInit() {
    }
};
ExamsComponent.ctorParameters = () => [];
ExamsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-exams',
        template: _exams_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_exams_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ExamsComponent);



/***/ }),

/***/ 2089:
/*!****************************************************!*\
  !*** ./src/app/views/faculty/faculty.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FacultyComponent": () => (/* binding */ FacultyComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _faculty_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./faculty.component.html?ngResource */ 4248);
/* harmony import */ var _faculty_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./faculty.component.css?ngResource */ 3037);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);





let FacultyComponent = class FacultyComponent {
    constructor() { }
    ngOnInit() {
        this.facultyForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
            faName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(),
            faFather: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(),
            faMother: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(),
            faDob: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(),
            faDepartment: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(),
            faMobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(),
            faEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(),
            faAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(),
        });
    }
    onSubmit() {
    }
};
FacultyComponent.ctorParameters = () => [];
FacultyComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-faculty',
        template: _faculty_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_faculty_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FacultyComponent);



/***/ }),

/***/ 1207:
/*!******************************************************!*\
  !*** ./src/app/views/feedback/feedback.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeedbackComponent": () => (/* binding */ FeedbackComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _feedback_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feedback.component.html?ngResource */ 514);
/* harmony import */ var _feedback_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feedback.component.css?ngResource */ 3472);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let FeedbackComponent = class FeedbackComponent {
    constructor() { }
    ngOnInit() {
    }
};
FeedbackComponent.ctorParameters = () => [];
FeedbackComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-feedback',
        template: _feedback_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_feedback_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FeedbackComponent);



/***/ }),

/***/ 4778:
/*!**************************************************!*\
  !*** ./src/app/views/footer/footer.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _footer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.component.html?ngResource */ 695);
/* harmony import */ var _footer_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.component.css?ngResource */ 2712);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let FooterComponent = class FooterComponent {
    constructor() {
        this.whatsAppLink = "whatsapp://send?text="; //This is WhatsApp sharing example using link"
        this.msg = "Wecome to Maharashi Valmiki Vidya Peeth Inter College.";
    }
    ngOnInit() {
    }
    openLink(linkType) {
        window.open(this.whatsAppLink + this.msg, "_blank");
    }
};
FooterComponent.ctorParameters = () => [];
FooterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-footer',
        template: _footer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_footer_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FooterComponent);



/***/ }),

/***/ 5977:
/*!******************************************************!*\
  !*** ./src/app/views/homepage/homepage.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomepageComponent": () => (/* binding */ HomepageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _homepage_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage.component.html?ngResource */ 3692);
/* harmony import */ var _homepage_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage.component.css?ngResource */ 6483);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _Services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/auth.service */ 2319);
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularx-social-login */ 6727);
/* harmony import */ var _Services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Services/user.service */ 2167);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);








let HomepageComponent = class HomepageComponent {
    rotate(direction) {
        console.log("direction", direction);
        if (direction === 'left') {
            console.log("left clicked");
            this.state = (this.state === 'default' ? 'rotatedleft' : 'default');
            console.log("state", this.state);
        }
        if (direction === 'right') {
            console.log("right clicked");
            this.state = (this.state === 'default' ? 'rotatedright' : 'default');
            console.log("state", this.state);
        }
    }
    constructor(authService, socialService, userService, routes, activatedRoute) {
        this.authService = authService;
        this.socialService = socialService;
        this.userService = userService;
        this.routes = routes;
        this.activatedRoute = activatedRoute;
        this.state = 'default';
        this.adminMenus = false;
        this.HideimgSlidder = true;
        this.facultyMenues = false;
        this.loginStatus = false;
        this.HideLoginBtn = true;
        this.loginProfile = false;
        this.isActiveSlids = true;
        this.isSticky = false;
        this.socialService.authState.subscribe((user) => {
            this.user = user;
            console.log("email users", this.user);
            this.loggedIn = (user != null);
        });
    }
    ngOnInit() {
        console.log(window.location.href);
        if (window.location.href === 'http://localhost:4200/home') {
            this.HideimgSlidder = false;
        }
        else {
            this.adminDashBoard = true;
        }
        if (sessionStorage.getItem('loginStatus') === '1') {
            console.log("inside if");
            let loginUserType = sessionStorage.getItem('loginUserType');
            if (loginUserType = 'admin') {
                this.adminMenus = true;
                this.HideLoginBtn = false;
                this.loginProfile = true;
            }
            if (loginUserType = 'faculty') {
                this.facultyMenues = true;
                this.HideLoginBtn = false;
                this.loginProfile = true;
            }
            console.log("userType in home page", loginUserType);
        }
    }
    checkScroll() {
        this.isSticky = window.pageYOffset >= 250;
    }
    logout() {
        console.log("logout clicked");
        localStorage.removeItem('token');
        sessionStorage.removeItem('userType');
        sessionStorage.removeItem('loginStatus');
        this.routes.navigate(['/login']);
        alert("Sucessfully Loged Out");
    }
    signOut() {
        this.authService.signOut();
    }
};
HomepageComponent.ctorParameters = () => [
    { type: _Services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: angularx_social_login__WEBPACK_IMPORTED_MODULE_4__.SocialAuthService },
    { type: _Services_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute }
];
HomepageComponent.propDecorators = {
    checkScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.HostListener, args: ['window:scroll', ['$event'],] }]
};
HomepageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-homepage',
        template: _homepage_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_homepage_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomepageComponent);



/***/ }),

/***/ 6597:
/*!***********************************************************!*\
  !*** ./src/app/views/img-gallery/img-galery.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImgGaleryComponent": () => (/* binding */ ImgGaleryComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _img_galery_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img-galery.component.html?ngResource */ 2535);
/* harmony import */ var _img_galery_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img-galery.component.css?ngResource */ 5110);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let ImgGaleryComponent = class ImgGaleryComponent {
    constructor() {
        this.images = [
            { img: "/assets/images/image1.jpg", thumb: "/assets/images/image1.jpg", description: "Image 1" },
            { img: "/assets/images/image12.jpg", thumb: "/assets/images/image2.jpg", description: "Image 2" },
            { img: "/assets/images/image24.jpg", thumb: "/assets/images/image24.jpg", description: "Image 3" },
            { img: "/assets/images/image14.jpg", thumb: "/assets/images/image36.jpeg", description: "Image 4" },
            { img: "/assets/images/image30.jpg", thumb: "/assets/images/image5.jpg", description: "Image 5" },
            { img: "/assets/images/image24.jpg", thumb: "/assets/images/image24.jpg", description: "Image 6" },
            { img: "/assets/images/image7.jpg", thumb: "/assets/images/image7.jpg", description: "Image 7" },
            { img: "/assets/images/image8.jpg", thumb: "/assets/images/image8.jpg", description: "Image 8" },
            { img: "/assets/images/image9.jpg", thumb: "/assets/images/image9.jpg", description: "Image 9" },
            { img: "/assets/images/image19.jpg", thumb: "/assets/images/image10.jpg", description: "Image 10" },
            { img: "/assets/images/image11.jpg", thumb: "/assets/images/image11.jpg", description: "Image 11" },
            { img: "/assets/images/image12.jpg", thumb: "/assets/images/image12.jpg", description: "Image 12" },
            { img: "/assets/images/image13.jpg", thumb: "/assets/images/image13.jpg", description: "Image 13" },
            { img: "/assets/images/image14.jpg", thumb: "/assets/images/image14.jpg", description: "Image 14" },
            { img: "/assets/images/image16.jpg", thumb: "/assets/images/image16.jpg", description: "Image 16" },
            { img: "/assets/images/image18.jpg", thumb: "/assets/images/image17.jpg", description: "Image 17" },
            { img: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(152).jpg", thumb: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(152).jpg", description: "Image 3" },
            { img: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(42).jpg", thumb: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(42).jpg", description: "Image 4" },
            // { img: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(151).jpg", thumb: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(151).jpg", description: "Image 5" },
            // { img: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(40).jpg", thumb: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(40).jpg", description: "Image 6" },
            // { img: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(148).jpg", thumb: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(148).jpg", description: "Image 7" },
            // { img: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(147).jpg", thumb: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(147).jpg", description: "Image 8" },
            // { img: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(149).jpg", thumb: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(149).jpg", description: "Image 9" }
        ];
    }
    ngOnInit() {
    }
    openImage(event, image) {
        console.log(event, image);
        const imgElem = event.target;
        this.imgDescription = image.description;
        var target = event.target || event.srcElement || event.currentTarget;
        var srcAttr = target.attributes.src;
        this.imgSrc = srcAttr.nodeValue;
    }
};
ImgGaleryComponent.ctorParameters = () => [];
ImgGaleryComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-img-galery',
        template: _img_galery_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_img_galery_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ImgGaleryComponent);



/***/ }),

/***/ 2362:
/*!********************************************************************!*\
  !*** ./src/app/views/mission-vission/mission-vission.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MissionVissionComponent": () => (/* binding */ MissionVissionComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _mission_vission_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mission-vission.component.html?ngResource */ 1689);
/* harmony import */ var _mission_vission_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mission-vission.component.css?ngResource */ 2180);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let MissionVissionComponent = class MissionVissionComponent {
    constructor() { }
    ngOnInit() {
    }
};
MissionVissionComponent.ctorParameters = () => [];
MissionVissionComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-mission-vission',
        template: _mission_vission_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_mission_vission_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MissionVissionComponent);



/***/ }),

/***/ 5618:
/*!******************************************************************!*\
  !*** ./src/app/views/page-not-found/page-not-found.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageNotFoundComponent": () => (/* binding */ PageNotFoundComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _page_not_found_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-not-found.component.html?ngResource */ 1476);
/* harmony import */ var _page_not_found_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-not-found.component.css?ngResource */ 2249);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let PageNotFoundComponent = class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
PageNotFoundComponent.ctorParameters = () => [];
PageNotFoundComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-page-not-found',
        template: _page_not_found_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_page_not_found_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PageNotFoundComponent);



/***/ }),

/***/ 4991:
/*!****************************************************************!*\
  !*** ./src/app/views/principal-msg/principal-msg.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrincipalMsgComponent": () => (/* binding */ PrincipalMsgComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _principal_msg_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./principal-msg.component.html?ngResource */ 3561);
/* harmony import */ var _principal_msg_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./principal-msg.component.css?ngResource */ 7121);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let PrincipalMsgComponent = class PrincipalMsgComponent {
    constructor() { }
    ngOnInit() {
    }
};
PrincipalMsgComponent.ctorParameters = () => [];
PrincipalMsgComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-principal-msg',
        template: _principal_msg_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_principal_msg_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PrincipalMsgComponent);



/***/ }),

/***/ 8141:
/*!****************************************************!*\
  !*** ./src/app/views/results/results.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResultsComponent": () => (/* binding */ ResultsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _results_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./results.component.html?ngResource */ 3174);
/* harmony import */ var _results_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./results.component.css?ngResource */ 9695);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);





let ResultsComponent = class ResultsComponent {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    ngOnInit() {
        // console.log("Result====",data);
        this.httpClient.get("assets/student.json").subscribe(data => {
            console.log("welcome", data);
            // this.products = data;
        });
    }
};
ResultsComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
ResultsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-results',
        template: _results_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_results_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ResultsComponent);



/***/ }),

/***/ 7095:
/*!**************************************************!*\
  !*** ./src/app/views/slides/slides.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SlidesComponent": () => (/* binding */ SlidesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _slides_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slides.component.html?ngResource */ 7486);
/* harmony import */ var _slides_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slides.component.css?ngResource */ 696);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let SlidesComponent = class SlidesComponent {
    constructor() { }
    ngOnInit() {
    }
};
SlidesComponent.ctorParameters = () => [];
SlidesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-slides',
        template: _slides_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_slides_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SlidesComponent);



/***/ }),

/***/ 4766:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// import { NgxLoggerLevel } from 'ngx-logger';
const environment = {
    production: true,
    baseurl: 'http://localhost:3000/',
    // logLevel: NgxLoggerLevel.INFO, // you can put here according to your need {INFO / WARN / DEBUG / ERROR / FATAL / LOG / }
    // serverLogLevel: NgxLoggerLevel.OFF
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 8835:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 6057);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 23);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 4766);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 3088:
/*!**********************************************!*\
  !*** ./src/app/app.component.css?ngResource ***!
  \**********************************************/
/***/ ((module) => {

module.exports = ".navbar-collapse {\r\n    /* position: fixed; */\r\n    top: 54px;\r\n    left: 100%;\r\n    padding-left: 15px;\r\n    padding-right: 15px;\r\n    /* padding-bottom: 15px; */\r\n    width: 100%;\r\n    z-index: 700;\r\n    transition: all 0.4s ease;\r\n    display: block;\r\n    background-color: #213d77;\r\n}\r\n\r\n.navbar-collapse.collapsing {\r\n    height: auto !important;\r\n    margin-left: 50%;\r\n    left: 50%;\r\n    transition: all 0.2s ease;\r\n}\r\n\r\n.navbar-collapse.show {\r\n    left: 0;\r\n    position: absolute;\r\n}\r\n\r\n.navbar {\r\n    background: #213d77;\r\n    padding-left: 16;\r\n    padding-right: 16px;\r\n    border-radius: 0;\r\n}\r\n\r\n.navbar .nav li a {\r\n    /* color: #888; */\r\n    color: white;\r\n    font-size: 1.0rem;\r\n}\r\n\r\n.navbar .nav li :hover {\r\n    /* color: rgb(15, 12, 179); */\r\n    /* color: rgb(180, 5, 5); */\r\n    font-size: 1.0rem;\r\n}\r\n\r\n.navbar .dropdown-menu {\r\n    border-radius: 1px;\r\n    border-color: #e5e5e5;\r\n    box-shadow: 0 2px 8px rgba(0, 0, 0, .05);\r\n    background-color: #213d77;\r\n}\r\n\r\n.navbar .nav .dropdown-menu li a,\r\n.navbar .nav .dropdown-menu li a:hover,\r\n.navbar .nav .dropdown-menu li a:focus {\r\n    padding: 8px 20px;\r\n    font-size: medium;\r\n    background-color: none;\r\n    line-height: normal;\r\n}\r\n\r\n.navbar .navbar-form {\r\n    border: none;\r\n}\r\n\r\n.navbar .dropdown-menu.form-wrapper {\r\n    width: 280px;\r\n    padding: 20px;\r\n    left: auto;\r\n    right: 0;\r\n    font-size: 14px;\r\n}\r\n\r\n.navbar .dropdown-menu.form-wrapper a {\r\n    /* color: #33cabb; */\r\n    padding: 0 !important;\r\n}\r\n\r\n.navbar .dropdown-menu.form-wrapper a:hover {\r\n    text-decoration: underline;\r\n}\r\n\r\n.navbar .form-wrapper .hint-text {\r\n    text-align: center;\r\n    margin-bottom: 15px;\r\n    font-size: 13px;\r\n}\r\n\r\n.navbar .form-wrapper .social-btn .btn,\r\n.navbar .form-wrapper .social-btn .btn:hover {\r\n    margin: 0;\r\n    padding: 0 !important;\r\n    font-size: 13px;\r\n    border: none;\r\n    transition: all 0.4s;\r\n    text-align: center;\r\n    line-height: 34px;\r\n    width: 47%;\r\n    text-decoration: none;\r\n}\r\n\r\n.navbar .social-btn .btn-primary {\r\n    background: #507cc0;\r\n}\r\n\r\n.navbar .social-btn .btn-primary:hover {\r\n    background: #4676bd;\r\n}\r\n\r\n.navbar .social-btn .btn-info {\r\n    background: #64ccf1;\r\n}\r\n\r\n.navbar .social-btn .btn-info:hover {\r\n    background: #4ec7ef;\r\n}\r\n\r\n.navbar .social-btn .btn i {\r\n    margin-right: 5px;\r\n    font-size: 16px;\r\n    position: relative;\r\n    top: 2px;\r\n}\r\n\r\n.navbar .form-wrapper .form-footer {\r\n    text-align: center;\r\n    padding-top: 10px;\r\n    font-size: 13px;\r\n}\r\n\r\n.navbar .form-wrapper .form-footer a:hover {\r\n    text-decoration: underline;\r\n}\r\n\r\n.navbar .form-wrapper .checkbox-inline input {\r\n    margin-top: 3px;\r\n}\r\n\r\n.or-seperator {\r\n    margin-top: 32px;\r\n    text-align: center;\r\n    border-top: 1px solid #e0e0e0;\r\n}\r\n\r\n.or-seperator b {\r\n    color: #666;\r\n    padding: 0 8px;\r\n    width: 30px;\r\n    height: 30px;\r\n    font-size: 13px;\r\n    text-align: center;\r\n    line-height: 26px;\r\n    background: #fff;\r\n    display: inline-block;\r\n    border: 1px solid #e0e0e0;\r\n    border-radius: 50%;\r\n    position: relative;\r\n    top: -15px;\r\n    z-index: 1;\r\n}\r\n\r\n.navbar .checkbox-inline {\r\n    font-size: 13px;\r\n}\r\n\r\n.navbar .navbar-right .dropdown-toggle::after {\r\n    display: none;\r\n}\r\n\r\n.w3-modal.btn:hover {\r\n    background-color: none;\r\n}\r\n\r\n.w3-hover-teal:hover {\r\n    background-color: red;\r\n}\r\n\r\n.w3-modal-content {\r\n    margin: -35px 861px;\r\n    width: 400px;\r\n    background-color: none;\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n    .form-inline .input-group {\r\n        width: 300px;\r\n        margin-left: 30px;\r\n    }\r\n    .navbar-collapse {\r\n        /* position: relative; */\r\n        top: 54px;\r\n        left: 100%;\r\n        padding-left: 15px;\r\n        padding-right: 15px;\r\n        /* padding-bottom: 15px; */\r\n        width: 100%;\r\n        z-index: 700;\r\n        transition: all 0.4s ease;\r\n        display: block;\r\n        background-color: #213d77;\r\n    }\r\n\r\n    .navbar-collapse.collapsing {\r\n        height: auto !important;\r\n        margin-left: 50%;\r\n        left: 50%;\r\n        transition: all 0.2s ease;\r\n    }\r\n\r\n    .navbar-collapse.show {\r\n        left: 0;\r\n    }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    .navbar .dropdown-menu.form-wrapper {\r\n        width: 100%;\r\n        padding: 10px 15px;\r\n        background: transparent;\r\n        border: none;\r\n    }\r\n\r\n    .navbar .form-inline {\r\n        display: block;\r\n    }\r\n\r\n    .navbar .input-group {\r\n        width: 100%;\r\n    }\r\n\r\n    .navbar .nav .btn-primary,\r\n    .navbar .nav .btn-primary:active {\r\n        display: block;\r\n    }\r\n\r\n}\r\n\r\n@media screen and (max-width: 480px) {\r\n    .imgDiv {\r\n        height: 152px;\r\n        /* background-color: olive; */\r\n    }\r\n    .navbar-collapse {\r\n        /* position: fixed; */\r\n        top: 54px;\r\n        left: 100%;\r\n        padding-left: 15px;\r\n        padding-right: 15px;\r\n        /* padding-bottom: 15px; */\r\n        width: 100%;\r\n        z-index: 700;\r\n        transition: all 0.4s ease;\r\n        display: block;\r\n        background-color: #213d77;\r\n    } \r\n\r\n   .navbar-collapse.collapsing {\r\n        height: auto !important;\r\n        margin-left: 50%;\r\n        left: 50%;\r\n        transition: all 0.2s ease;\r\n    }\r\n\r\n    .navbar-collapse.show {\r\n        left: 0;\r\n        position: absolute;\r\n    }\r\n}\r\n\r\nimg {\r\n    max-width: 100%;\r\n    max-height: 100%;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    display: block;\r\n    /* remove extra space below image */\r\n}\r\n\r\n/* =============>header fix */\r\n\r\n/* .fixed-header {\r\n  position: fixed;\r\n  z-index:999;\r\n  height: auto;\r\n  width:100%;\r\n  margin-top:none;\r\n}\r\n\r\n#frugalmap {\r\n  height: 300px;\r\n  width: 100%;\r\n  top: 50px;\r\n  position: relative;\r\n}\r\n\r\n.mat-elevation-z5 {\r\n  position: relative;\r\n}\r\n\r\n.sticky {\r\n  position: fixed;\r\n  /* top: 50px; \r\n}  */\r\n\r\nform-control {\r\n    box-shadow: none;\r\n    font-weight: normal;\r\n    font-size: 13px;\r\n}\r\n\r\n.form-control:focus {\r\n    border-color: #33cabb;\r\n    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.navbar-header.col {\r\n    padding: 0 !important;\r\n    margin-left: 5%;\r\n}\r\n\r\nhtml,\r\nbody {\r\n    height: auto;\r\n    /* padding-bottom:5%; */\r\n}\r\n\r\n.logedButton {\r\n    background-color: #4CAF50;\r\n    border: none;\r\n    color: white;\r\n    padding: 20px;\r\n    height: 4px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    margin: 4px 2px;\r\n    border-radius: 2px;\r\n}\r\n\r\n/* .navbar {\r\n    background: #213d77;\r\n    color: white;\r\n    padding-left: 16px;\r\n    padding-right: 16px;\r\n    border-bottom: 1px solid #dfe3e8;\r\n    border-radius: 0;\r\n} */\r\n\r\n.nav-link img {\r\n    border-radius: 50%;\r\n    width: 36px;\r\n    height: 36px;\r\n    margin: -8px 0;\r\n    float: left;\r\n    margin-right: 10px;\r\n}\r\n\r\n/* .navbar .navbar-brand, .navbar .navbar-brand:hover, .navbar .navbar-brand:focus {\r\n    padding-left: 0;\r\n    font-size: 20px;\r\n    padding-right: 50px;\r\n} */\r\n\r\n.navbar .navbar-brand b {\r\n    font-weight: bold;\r\n    color: #33cabb;\r\n}\r\n\r\n.navbar .form-inline {\r\n    display: inline-block;\r\n}\r\n\r\n.navbar .nav li {\r\n    position: relative;\r\n}\r\n\r\n.navbar .nav li a {\r\n    /* color: #888; */\r\n    /* color: white; */\r\n    font-size: 1.0rem;\r\n}\r\n\r\n.navbar .nav li :hover {\r\n    /* color: #888; */\r\n    /* color: rgb(180, 5, 5); */\r\n    /* font-size: 1.1rem;*/\r\n    font-weight: 600;\r\n    /* font-size: 1.1rem; */\r\n    color: rgb(255, 115, 8);\r\n}\r\n\r\n.search-box {\r\n    position: relative;\r\n}\r\n\r\n.search-box input {\r\n    padding-right: 35px;\r\n    border-color: #dfe3e8;\r\n    border-radius: 4px !important;\r\n    box-shadow: none\r\n}\r\n\r\n.search-box .input-group-addon {\r\n    min-width: 35px;\r\n    border: none;\r\n    background: transparent;\r\n    position: absolute;\r\n    right: 0;\r\n    z-index: 9;\r\n    padding: 7px;\r\n    /* height: 100%; */\r\n}\r\n\r\n.search-box i {\r\n    color: #a0a5b1;\r\n    font-size: 19px;\r\n}\r\n\r\n.navbar .nav .btn-primary,\r\n.navbar .nav .btn-primary:active {\r\n    /* color: white; */\r\n    /* background: darkgreen; */\r\n    padding-top: 8px;\r\n    padding-bottom: 4px;\r\n    vertical-align: middle;\r\n    border: none;\r\n}\r\n\r\n.navbar .nav .btn-primary:hover,\r\n.navbar .nav .btn-primary:focus {\r\n    /* color: #fff; */\r\n    outline: none;\r\n}\r\n\r\n.navbar .navbar-right li:first-child a {\r\n    padding-right: 30px;\r\n}\r\n\r\n.navbar .nav-item i {\r\n    font-size: 18px;\r\n}\r\n\r\n.navbar .dropdown-item i {\r\n    font-size: 16px;\r\n    min-width: 22px;\r\n    /* background-color: none; */\r\n}\r\n\r\n/* .dropdown-item.active, .dropdown-item:active{\r\n    background-color: none;\r\n} */\r\n\r\n.navbar .dropdown-item:active {\r\n    /* background-color: #21d192 !important; */\r\n    /* color: red; */\r\n    color: none;\r\n}\r\n\r\n.navbar ul.nav li.active a,\r\n.navbar ul.nav li.open>a {\r\n    background: transparent !important;\r\n}\r\n\r\n.navbar .nav .get-started-btn {\r\n    min-width: 120px;\r\n    margin-top: 8px;\r\n    margin-bottom: 8px;\r\n}\r\n\r\n.navbar ul.nav li.open>a.get-started-btn {\r\n    /* color: #fff; */\r\n    background: #31bfb1 !important;\r\n}\r\n\r\n.navbar .dropdown-menu {\r\n    border-radius: 1px;\r\n    /* border-color: #e5e5e5; */\r\n    box-shadow: 0 2px 8px rgba(0, 0, 0, .05);\r\n    /* background-color: #213d77; */\r\n}\r\n\r\n.navbar .nav .dropdown-menu li {\r\n    color: #999;\r\n    font-weight: normal;\r\n}\r\n\r\n.navbar .nav .dropdown-menu li a,\r\n.navbar .nav .dropdown-menu li a:hover,\r\n.navbar .nav .dropdown-menu li a:focus {\r\n    padding: 8px 20px;\r\n    font-size: medium;\r\n    background-color: none;\r\n    line-height: normal;\r\n}\r\n\r\n.navbar .navbar-form {\r\n    border: none;\r\n}\r\n\r\n.navbar .dropdown-menu.form-wrapper {\r\n    width: 280px;\r\n    padding: 20px;\r\n    left: auto;\r\n    right: 0;\r\n    font-size: 14px;\r\n}\r\n\r\n.navbar .dropdown-menu.form-wrapper a {\r\n    /* color: #33cabb; */\r\n    padding: 0 !important;\r\n}\r\n\r\n.navbar .dropdown-menu.form-wrapper a:hover {\r\n    text-decoration: underline;\r\n}\r\n\r\n.navbar .form-wrapper .hint-text {\r\n    text-align: center;\r\n    margin-bottom: 15px;\r\n    font-size: 13px;\r\n}\r\n\r\n.navbar .form-wrapper .social-btn .btn,\r\n.navbar .form-wrapper .social-btn .btn:hover {\r\n    /* color: #fff; */\r\n    margin: 0;\r\n    padding: 0 !important;\r\n    font-size: 13px;\r\n    border: none;\r\n    transition: all 0.4s;\r\n    text-align: center;\r\n    line-height: 34px;\r\n    width: 47%;\r\n    text-decoration: none;\r\n}\r\n\r\n.navbar .social-btn .btn-primary {\r\n    background: #507cc0;\r\n}\r\n\r\n.navbar .social-btn .btn-primary:hover {\r\n    background: #4676bd;\r\n}\r\n\r\n.dropdown-item:focus,\r\n.dropdown-item:hover {\r\n    background-color: white !important;\r\n    /* color: #16181b !important; */\r\n}\r\n\r\n.navbar .social-btn .btn-info {\r\n    background: #64ccf1;\r\n}\r\n\r\n.navbar .social-btn .btn-info:hover {\r\n    background: #4ec7ef;\r\n}\r\n\r\n.navbar .social-btn .btn i {\r\n    margin-right: 5px;\r\n    font-size: 16px;\r\n    position: relative;\r\n    top: 2px;\r\n}\r\n\r\n.navbar .form-wrapper .form-footer {\r\n    text-align: center;\r\n    padding-top: 10px;\r\n    font-size: 13px;\r\n}\r\n\r\n.navbar .form-wrapper .form-footer a:hover {\r\n    text-decoration: underline;\r\n}\r\n\r\n.navbar .form-wrapper .checkbox-inline input {\r\n    margin-top: 3px;\r\n}\r\n\r\n.or-seperator {\r\n    margin-top: 32px;\r\n    text-align: center;\r\n    border-top: 1px solid #e0e0e0;\r\n}\r\n\r\n.or-seperator b {\r\n    color: #666;\r\n    padding: 0 8px;\r\n    width: 30px;\r\n    height: 30px;\r\n    font-size: 13px;\r\n    text-align: center;\r\n    line-height: 26px;\r\n    background: #fff;\r\n    display: inline-block;\r\n    border: 1px solid #e0e0e0;\r\n    border-radius: 50%;\r\n    position: relative;\r\n    top: -15px;\r\n    z-index: 1;\r\n}\r\n\r\n.navbar .checkbox-inline {\r\n    font-size: 13px;\r\n}\r\n\r\n.navbar .navbar-right .dropdown-toggle::after {\r\n    display: none;\r\n    color: red;\r\n    border: none;\r\n}\r\n\r\n.w3-modal.btn:hover {\r\n    background-color: none;\r\n}\r\n\r\n.dropdown-item:focus,\r\n.dropdown-item:hover {\r\n    color: #16181b;\r\n    text-decoration: none;\r\n    background-color: none;\r\n}\r\n\r\n.w3-hover-teal:hover {\r\n    background-color: red;\r\n}\r\n\r\n.w3-modal-content {\r\n    margin: -35px 861px;\r\n    width: 400px;\r\n    background-color: none;\r\n}\r\n\r\n/* Device = Desktops */\r\n\r\n@media (min-width: 1281px) {\r\n    .imgDiv {\r\n        height: 337px;\r\n        max-width: 100%;\r\n        max-height: 100%;\r\n    }\r\n    .navbar-collapse {\r\n        /* position: relative; */\r\n        top: 54px;\r\n        left: 100%;\r\n        padding-left: 15px;\r\n        padding-right: 15px;\r\n        /* padding-bottom: 15px; */\r\n        width: 100%;\r\n        z-index: 700;\r\n        transition: all 0.4s ease;\r\n        display: block;\r\n        background-color: #213d77;\r\n    }\r\n\r\n    .navbar-collapse.collapsing {\r\n        height: auto !important;\r\n        margin-left: 50%;\r\n        left: 50%;\r\n        transition: all 0.2s ease;\r\n    }\r\n\r\n    .navbar-collapse.show {\r\n        left: 0;\r\n        position: absolute;\r\n    }\r\n}\r\n\r\n/*  For Laptop / Desktop devices */\r\n\r\n@media (min-width: 1025px) and (max-width: 1280px) {\r\n    .form-inline .input-group {\r\n        width: 300px;\r\n        margin-left: 30px;\r\n    }\r\n\r\n    .imgDiv {\r\n        height: 282px;\r\n        max-width: 100%;\r\n        max-height: 100%;\r\n        /* background-color:red; */\r\n\r\n\r\n    }\r\n     .navbar-collapse {\r\n        /* position: fixed; */\r\n        top: 54px;\r\n        left: 100%;\r\n        padding-left: 15px;\r\n        padding-right: 15px;\r\n        /* padding-bottom: 15px; */\r\n        width: 100%;\r\n        z-index: 700;\r\n        transition: all 0.4s ease;\r\n        display: block;\r\n        background-color: #213d77;\r\n    }\r\n\r\n    .navbar-collapse.collapsing {\r\n        height: auto !important;\r\n        margin-left: 50%;\r\n        left: 50%;\r\n        transition: all 0.2s ease;\r\n    }\r\n\r\n    .navbar-collapse.show {\r\n        left: 0;\r\n        position: absolute;\r\n    }\r\n}\r\n\r\n/* Tablet /Ipad/(Portrait) */\r\n\r\n@media (min-width: 768px) and (max-width: 1024px) {\r\n    .navbar .dropdown-menu.form-wrapper {\r\n        width: 100%;\r\n        padding: 10px 15px;\r\n        background: transparent;\r\n        border: none;\r\n    }\r\n\r\n    .navbar .form-inline {\r\n        display: block;\r\n    }\r\n\r\n    .navbar .input-group {\r\n        width: 100%;\r\n    }\r\n\r\n    .navbar .nav .btn-primary,\r\n    .navbar .nav .btn-primary:active {\r\n        display: block;\r\n    }\r\n\r\n    .imgDiv {\r\n        height: 282px;\r\n        max-width: 100%;\r\n        max-height: 100%;\r\n        /* background-color:blue; */\r\n\r\n    }\r\n\r\n}\r\n\r\n/*   ##Device = Tablets, Ipads (landscape) */\r\n\r\n@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {\r\n    .imgDiv {\r\n        height: 208px;\r\n        max-width: 100%;\r\n        max-height: 100%;\r\n        /* background-color: pink; */\r\n    }\r\n}\r\n\r\n.mainDiv {\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.impLnks {\r\n    /* border:2px solid rgb(153, 51, 76); */\r\n    padding: 0%;\r\n    text-align: center;\r\n    margin-top: 1px;\r\n    ;\r\n}\r\n\r\nmarquee {\r\n    background-color: rgb(68, 250, 23);\r\n\r\n}\r\n\r\n/* \r\n  ##Device = Low Resolution Tablets, Mobiles (Landscape) */\r\n\r\n@media (min-width: 481px) and (max-width: 767px) {\r\n    .imgDiv {\r\n        height: 208px;\r\n        max-width: 100%;\r\n        max-height: 100%;\r\n        /* background-color: black; */\r\n    }\r\n\r\n}\r\n\r\n/* ##Device = Most of the Smartphones Mobiles (Portrait) */\r\n\r\n@media (min-width: 481px) and (max-width: 767px) {\r\n    .imgDiv {\r\n        height: 208px;\r\n        max-width: 100%;\r\n        max-height: 100%;\r\n        /* background-color: black; */\r\n    }\r\n}\r\n\r\n.navbar-light .navbar-toggler {\r\n    color: none !important;\r\n    border-color: none !important;\r\n}\r\n\r\n@media (max-width: 992px) {\r\n    .navbar-collapse {\r\n        position: fixed;\r\n        top: 54px;\r\n        left: 100%;\r\n        padding-left: 15px;\r\n        padding-right: 15px;\r\n        padding-bottom: 15px;\r\n        width: 100%;\r\n        z-index: 700;\r\n        transition: all 0.4s ease;\r\n        display: block;\r\n        background-color: #213d77;\r\n    }\r\n\r\n    .navbar-collapse.collapsing {\r\n        height: auto !important;\r\n        margin-left: 50%;\r\n        left: 50%;\r\n        transition: all 0.2s ease;\r\n    }\r\n\r\n    .navbar-collapse.show {\r\n        left: 0;\r\n        position: absolute;\r\n    }\r\n    .collapse {\r\n        &:not(.show) {\r\n          display: none;\r\n        }\r\n      }\r\n}\r\n\r\n.waviy span {\r\n  display:  table-cell;\r\n  color: #fff;\r\n  text-transform: uppercase;\r\n  animation: waviy 5s infinite;\r\n  animation-delay: calc(.5s * var(--i));\r\n  \r\n}\r\n\r\n@keyframes waviy {\r\n  0%,40%,100% {\r\n    transform: translateY(0)\r\n  }\r\n  20% {\r\n    transform: translateY(-20px)\r\n  }\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,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QUFxQzs7QUFFdkM7O0FBRUE7RUFDRTtJQUNFO0VBQ0Y7RUFDQTtJQUNFO0VBQ0Y7QUFDRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXItY29sbGFwc2Uge1xyXG4gICAgLyogcG9zaXRpb246IGZpeGVkOyAqL1xyXG4gICAgdG9wOiA1NHB4O1xyXG4gICAgbGVmdDogMTAwJTtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICAvKiBwYWRkaW5nLWJvdHRvbTogMTVweDsgKi9cclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgei1pbmRleDogNzAwO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxM2Q3NztcclxufVxyXG5cclxuLm5hdmJhci1jb2xsYXBzZS5jb2xsYXBzaW5nIHtcclxuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbn1cclxuXHJcbi5uYXZiYXItY29sbGFwc2Uuc2hvdyB7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG5cclxuXHJcbi5uYXZiYXIge1xyXG4gICAgYmFja2dyb3VuZDogIzIxM2Q3NztcclxuICAgIHBhZGRpbmctbGVmdDogMTY7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbi5uYXZiYXIgLm5hdiBsaSBhIHtcclxuICAgIC8qIGNvbG9yOiAjODg4OyAqL1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxLjByZW07XHJcbn1cclxuXHJcbi5uYXZiYXIgLm5hdiBsaSA6aG92ZXIge1xyXG4gICAgLyogY29sb3I6IHJnYigxNSwgMTIsIDE3OSk7ICovXHJcbiAgICAvKiBjb2xvcjogcmdiKDE4MCwgNSwgNSk7ICovXHJcbiAgICBmb250LXNpemU6IDEuMHJlbTtcclxufVxyXG5cclxuXHJcbi5uYXZiYXIgLmRyb3Bkb3duLW1lbnUge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZTVlNWU1O1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgLjA1KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTNkNzc7XHJcbn1cclxuXHJcblxyXG4ubmF2YmFyIC5uYXYgLmRyb3Bkb3duLW1lbnUgbGkgYSxcclxuLm5hdmJhciAubmF2IC5kcm9wZG93bi1tZW51IGxpIGE6aG92ZXIsXHJcbi5uYXZiYXIgLm5hdiAuZHJvcGRvd24tbWVudSBsaSBhOmZvY3VzIHtcclxuICAgIHBhZGRpbmc6IDhweCAyMHB4O1xyXG4gICAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuLm5hdmJhciAubmF2YmFyLWZvcm0ge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4ubmF2YmFyIC5kcm9wZG93bi1tZW51LmZvcm0td3JhcHBlciB7XHJcbiAgICB3aWR0aDogMjgwcHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgbGVmdDogYXV0bztcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4ubmF2YmFyIC5kcm9wZG93bi1tZW51LmZvcm0td3JhcHBlciBhIHtcclxuICAgIC8qIGNvbG9yOiAjMzNjYWJiOyAqL1xyXG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubmF2YmFyIC5kcm9wZG93bi1tZW51LmZvcm0td3JhcHBlciBhOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4ubmF2YmFyIC5mb3JtLXdyYXBwZXIgLmhpbnQtdGV4dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcblxyXG4ubmF2YmFyIC5mb3JtLXdyYXBwZXIgLnNvY2lhbC1idG4gLmJ0bixcclxuLm5hdmJhciAuZm9ybS13cmFwcGVyIC5zb2NpYWwtYnRuIC5idG46aG92ZXIge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogMzRweDtcclxuICAgIHdpZHRoOiA0NyU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5uYXZiYXIgLnNvY2lhbC1idG4gLmJ0bi1wcmltYXJ5IHtcclxuICAgIGJhY2tncm91bmQ6ICM1MDdjYzA7XHJcbn1cclxuXHJcbi5uYXZiYXIgLnNvY2lhbC1idG4gLmJ0bi1wcmltYXJ5OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICM0Njc2YmQ7XHJcbn1cclxuXHJcbi5uYXZiYXIgLnNvY2lhbC1idG4gLmJ0bi1pbmZvIHtcclxuICAgIGJhY2tncm91bmQ6ICM2NGNjZjE7XHJcbn1cclxuXHJcbi5uYXZiYXIgLnNvY2lhbC1idG4gLmJ0bi1pbmZvOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICM0ZWM3ZWY7XHJcbn1cclxuXHJcbi5uYXZiYXIgLnNvY2lhbC1idG4gLmJ0biBpIHtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAycHg7XHJcbn1cclxuXHJcbi5uYXZiYXIgLmZvcm0td3JhcHBlciAuZm9ybS1mb290ZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuXHJcbi5uYXZiYXIgLmZvcm0td3JhcHBlciAuZm9ybS1mb290ZXIgYTpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLm5hdmJhciAuZm9ybS13cmFwcGVyIC5jaGVja2JveC1pbmxpbmUgaW5wdXQge1xyXG4gICAgbWFyZ2luLXRvcDogM3B4O1xyXG59XHJcblxyXG4ub3Itc2VwZXJhdG9yIHtcclxuICAgIG1hcmdpbi10b3A6IDMycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2UwZTBlMDtcclxufVxyXG5cclxuLm9yLXNlcGVyYXRvciBiIHtcclxuICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgcGFkZGluZzogMCA4cHg7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC0xNXB4O1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG5cclxuLm5hdmJhciAuY2hlY2tib3gtaW5saW5lIHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG5cclxuLm5hdmJhciAubmF2YmFyLXJpZ2h0IC5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi53My1tb2RhbC5idG46aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcclxufVxyXG5cclxuXHJcbi53My1ob3Zlci10ZWFsOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxufVxyXG5cclxuLnczLW1vZGFsLWNvbnRlbnQge1xyXG4gICAgbWFyZ2luOiAtMzVweCA4NjFweDtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAgIC5mb3JtLWlubGluZSAuaW5wdXQtZ3JvdXAge1xyXG4gICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICAgIH1cclxuICAgIC5uYXZiYXItY29sbGFwc2Uge1xyXG4gICAgICAgIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cclxuICAgICAgICB0b3A6IDU0cHg7XHJcbiAgICAgICAgbGVmdDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgICAgICAvKiBwYWRkaW5nLWJvdHRvbTogMTVweDsgKi9cclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB6LWluZGV4OiA3MDA7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEzZDc3O1xyXG4gICAgfVxyXG5cclxuICAgIC5uYXZiYXItY29sbGFwc2UuY29sbGFwc2luZyB7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDUwJTtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICAgIH1cclxuXHJcbiAgICAubmF2YmFyLWNvbGxhcHNlLnNob3cge1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLm5hdmJhciAuZHJvcGRvd24tbWVudS5mb3JtLXdyYXBwZXIge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLm5hdmJhciAuZm9ybS1pbmxpbmUge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG5cclxuICAgIC5uYXZiYXIgLmlucHV0LWdyb3VwIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAubmF2YmFyIC5uYXYgLmJ0bi1wcmltYXJ5LFxyXG4gICAgLm5hdmJhciAubmF2IC5idG4tcHJpbWFyeTphY3RpdmUge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIC5pbWdEaXYge1xyXG4gICAgICAgIGhlaWdodDogMTUycHg7XHJcbiAgICAgICAgLyogYmFja2dyb3VuZC1jb2xvcjogb2xpdmU7ICovXHJcbiAgICB9XHJcbiAgICAubmF2YmFyLWNvbGxhcHNlIHtcclxuICAgICAgICAvKiBwb3NpdGlvbjogZml4ZWQ7ICovXHJcbiAgICAgICAgdG9wOiA1NHB4O1xyXG4gICAgICAgIGxlZnQ6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgLyogcGFkZGluZy1ib3R0b206IDE1cHg7ICovXHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgei1pbmRleDogNzAwO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIxM2Q3NztcclxuICAgIH0gXHJcblxyXG4gICAubmF2YmFyLWNvbGxhcHNlLmNvbGxhcHNpbmcge1xyXG4gICAgICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1MCU7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLm5hdmJhci1jb2xsYXBzZS5zaG93IHtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIH1cclxufVxyXG5cclxuaW1nIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgLyogcmVtb3ZlIGV4dHJhIHNwYWNlIGJlbG93IGltYWdlICovXHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT0+aGVhZGVyIGZpeCAqL1xyXG4vKiAuZml4ZWQtaGVhZGVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDo5OTk7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgbWFyZ2luLXRvcDpub25lO1xyXG59XHJcblxyXG4jZnJ1Z2FsbWFwIHtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRvcDogNTBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5tYXQtZWxldmF0aW9uLXo1IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5zdGlja3kge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICAvKiB0b3A6IDUwcHg7IFxyXG59ICAqL1xyXG5cclxuZm9ybS1jb250cm9sIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICAgIGJvcmRlci1jb2xvcjogIzMzY2FiYjtcclxuICAgIGJveC1zaGFkb3c6IDAgMCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG4ubmF2YmFyLWhlYWRlci5jb2wge1xyXG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG59XHJcblxyXG5odG1sLFxyXG5ib2R5IHtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIC8qIHBhZGRpbmctYm90dG9tOjUlOyAqL1xyXG59XHJcblxyXG4ubG9nZWRCdXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbjogNHB4IDJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxufVxyXG5cclxuLyogLm5hdmJhciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjEzZDc3O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGZlM2U4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxufSAqL1xyXG5cclxuLm5hdi1saW5rIGltZyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogMzZweDtcclxuICAgIGhlaWdodDogMzZweDtcclxuICAgIG1hcmdpbjogLThweCAwO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi8qIC5uYXZiYXIgLm5hdmJhci1icmFuZCwgLm5hdmJhciAubmF2YmFyLWJyYW5kOmhvdmVyLCAubmF2YmFyIC5uYXZiYXItYnJhbmQ6Zm9jdXMge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcclxufSAqL1xyXG5cclxuLm5hdmJhciAubmF2YmFyLWJyYW5kIGIge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogIzMzY2FiYjtcclxufVxyXG5cclxuLm5hdmJhciAuZm9ybS1pbmxpbmUge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4ubmF2YmFyIC5uYXYgbGkge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ubmF2YmFyIC5uYXYgbGkgYSB7XHJcbiAgICAvKiBjb2xvcjogIzg4ODsgKi9cclxuICAgIC8qIGNvbG9yOiB3aGl0ZTsgKi9cclxuICAgIGZvbnQtc2l6ZTogMS4wcmVtO1xyXG59XHJcblxyXG4ubmF2YmFyIC5uYXYgbGkgOmhvdmVyIHtcclxuICAgIC8qIGNvbG9yOiAjODg4OyAqL1xyXG4gICAgLyogY29sb3I6IHJnYigxODAsIDUsIDUpOyAqL1xyXG4gICAgLyogZm9udC1zaXplOiAxLjFyZW07Ki9cclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAvKiBmb250LXNpemU6IDEuMXJlbTsgKi9cclxuICAgIGNvbG9yOiByZ2IoMjU1LCAxMTUsIDgpO1xyXG59XHJcblxyXG4uc2VhcmNoLWJveCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5zZWFyY2gtYm94IGlucHV0IHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDM1cHg7XHJcbiAgICBib3JkZXItY29sb3I6ICNkZmUzZTg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHggIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmVcclxufVxyXG5cclxuLnNlYXJjaC1ib3ggLmlucHV0LWdyb3VwLWFkZG9uIHtcclxuICAgIG1pbi13aWR0aDogMzVweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB6LWluZGV4OiA5O1xyXG4gICAgcGFkZGluZzogN3B4O1xyXG4gICAgLyogaGVpZ2h0OiAxMDAlOyAqL1xyXG59XHJcblxyXG4uc2VhcmNoLWJveCBpIHtcclxuICAgIGNvbG9yOiAjYTBhNWIxO1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG59XHJcblxyXG4ubmF2YmFyIC5uYXYgLmJ0bi1wcmltYXJ5LFxyXG4ubmF2YmFyIC5uYXYgLmJ0bi1wcmltYXJ5OmFjdGl2ZSB7XHJcbiAgICAvKiBjb2xvcjogd2hpdGU7ICovXHJcbiAgICAvKiBiYWNrZ3JvdW5kOiBkYXJrZ3JlZW47ICovXHJcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDRweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5uYXZiYXIgLm5hdiAuYnRuLXByaW1hcnk6aG92ZXIsXHJcbi5uYXZiYXIgLm5hdiAuYnRuLXByaW1hcnk6Zm9jdXMge1xyXG4gICAgLyogY29sb3I6ICNmZmY7ICovXHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4ubmF2YmFyIC5uYXZiYXItcmlnaHQgbGk6Zmlyc3QtY2hpbGQgYSB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4ubmF2YmFyIC5uYXYtaXRlbSBpIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLm5hdmJhciAuZHJvcGRvd24taXRlbSBpIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1pbi13aWR0aDogMjJweDtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IG5vbmU7ICovXHJcbn1cclxuXHJcbi8qIC5kcm9wZG93bi1pdGVtLmFjdGl2ZSwgLmRyb3Bkb3duLWl0ZW06YWN0aXZle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcclxufSAqL1xyXG4ubmF2YmFyIC5kcm9wZG93bi1pdGVtOmFjdGl2ZSB7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjMjFkMTkyICFpbXBvcnRhbnQ7ICovXHJcbiAgICAvKiBjb2xvcjogcmVkOyAqL1xyXG4gICAgY29sb3I6IG5vbmU7XHJcbn1cclxuXHJcbi5uYXZiYXIgdWwubmF2IGxpLmFjdGl2ZSBhLFxyXG4ubmF2YmFyIHVsLm5hdiBsaS5vcGVuPmEge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5hdmJhciAubmF2IC5nZXQtc3RhcnRlZC1idG4ge1xyXG4gICAgbWluLXdpZHRoOiAxMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxufVxyXG5cclxuLm5hdmJhciB1bC5uYXYgbGkub3Blbj5hLmdldC1zdGFydGVkLWJ0biB7XHJcbiAgICAvKiBjb2xvcjogI2ZmZjsgKi9cclxuICAgIGJhY2tncm91bmQ6ICMzMWJmYjEgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5hdmJhciAuZHJvcGRvd24tbWVudSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcHg7XHJcbiAgICAvKiBib3JkZXItY29sb3I6ICNlNWU1ZTU7ICovXHJcbiAgICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAuMDUpO1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogIzIxM2Q3NzsgKi9cclxufVxyXG5cclxuLm5hdmJhciAubmF2IC5kcm9wZG93bi1tZW51IGxpIHtcclxuICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuLm5hdmJhciAubmF2IC5kcm9wZG93bi1tZW51IGxpIGEsXHJcbi5uYXZiYXIgLm5hdiAuZHJvcGRvd24tbWVudSBsaSBhOmhvdmVyLFxyXG4ubmF2YmFyIC5uYXYgLmRyb3Bkb3duLW1lbnUgbGkgYTpmb2N1cyB7XHJcbiAgICBwYWRkaW5nOiA4cHggMjBweDtcclxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbi5uYXZiYXIgLm5hdmJhci1mb3JtIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLm5hdmJhciAuZHJvcGRvd24tbWVudS5mb3JtLXdyYXBwZXIge1xyXG4gICAgd2lkdGg6IDI4MHB4O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGxlZnQ6IGF1dG87XHJcbiAgICByaWdodDogMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLm5hdmJhciAuZHJvcGRvd24tbWVudS5mb3JtLXdyYXBwZXIgYSB7XHJcbiAgICAvKiBjb2xvcjogIzMzY2FiYjsgKi9cclxuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5hdmJhciAuZHJvcGRvd24tbWVudS5mb3JtLXdyYXBwZXIgYTpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLm5hdmJhciAuZm9ybS13cmFwcGVyIC5oaW50LXRleHQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG5cclxuLm5hdmJhciAuZm9ybS13cmFwcGVyIC5zb2NpYWwtYnRuIC5idG4sXHJcbi5uYXZiYXIgLmZvcm0td3JhcHBlciAuc29jaWFsLWJ0biAuYnRuOmhvdmVyIHtcclxuICAgIC8qIGNvbG9yOiAjZmZmOyAqL1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogMzRweDtcclxuICAgIHdpZHRoOiA0NyU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5uYXZiYXIgLnNvY2lhbC1idG4gLmJ0bi1wcmltYXJ5IHtcclxuICAgIGJhY2tncm91bmQ6ICM1MDdjYzA7XHJcbn1cclxuXHJcbi5uYXZiYXIgLnNvY2lhbC1idG4gLmJ0bi1wcmltYXJ5OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICM0Njc2YmQ7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1pdGVtOmZvY3VzLFxyXG4uZHJvcGRvd24taXRlbTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgLyogY29sb3I6ICMxNjE4MWIgIWltcG9ydGFudDsgKi9cclxufVxyXG5cclxuLm5hdmJhciAuc29jaWFsLWJ0biAuYnRuLWluZm8ge1xyXG4gICAgYmFja2dyb3VuZDogIzY0Y2NmMTtcclxufVxyXG5cclxuLm5hdmJhciAuc29jaWFsLWJ0biAuYnRuLWluZm86aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzRlYzdlZjtcclxufVxyXG5cclxuLm5hdmJhciAuc29jaWFsLWJ0biAuYnRuIGkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDJweDtcclxufVxyXG5cclxuLm5hdmJhciAuZm9ybS13cmFwcGVyIC5mb3JtLWZvb3RlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG5cclxuLm5hdmJhciAuZm9ybS13cmFwcGVyIC5mb3JtLWZvb3RlciBhOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4ubmF2YmFyIC5mb3JtLXdyYXBwZXIgLmNoZWNrYm94LWlubGluZSBpbnB1dCB7XHJcbiAgICBtYXJnaW4tdG9wOiAzcHg7XHJcbn1cclxuXHJcbi5vci1zZXBlcmF0b3Ige1xyXG4gICAgbWFyZ2luLXRvcDogMzJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTBlMGUwO1xyXG59XHJcblxyXG4ub3Itc2VwZXJhdG9yIGIge1xyXG4gICAgY29sb3I6ICM2NjY7XHJcbiAgICBwYWRkaW5nOiAwIDhweDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogLTE1cHg7XHJcbiAgICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4ubmF2YmFyIC5jaGVja2JveC1pbmxpbmUge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcblxyXG4ubmF2YmFyIC5uYXZiYXItcmlnaHQgLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi53My1tb2RhbC5idG46aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcclxufVxyXG5cclxuLmRyb3Bkb3duLWl0ZW06Zm9jdXMsXHJcbi5kcm9wZG93bi1pdGVtOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMTYxODFiO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcclxufVxyXG5cclxuXHJcbi53My1ob3Zlci10ZWFsOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxufVxyXG5cclxuLnczLW1vZGFsLWNvbnRlbnQge1xyXG4gICAgbWFyZ2luOiAtMzVweCA4NjFweDtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XHJcbn1cclxuXHJcbi8qIERldmljZSA9IERlc2t0b3BzICovXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMjgxcHgpIHtcclxuICAgIC5pbWdEaXYge1xyXG4gICAgICAgIGhlaWdodDogMzM3cHg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAubmF2YmFyLWNvbGxhcHNlIHtcclxuICAgICAgICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXHJcbiAgICAgICAgdG9wOiA1NHB4O1xyXG4gICAgICAgIGxlZnQ6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgLyogcGFkZGluZy1ib3R0b206IDE1cHg7ICovXHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgei1pbmRleDogNzAwO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIxM2Q3NztcclxuICAgIH1cclxuXHJcbiAgICAubmF2YmFyLWNvbGxhcHNlLmNvbGxhcHNpbmcge1xyXG4gICAgICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1MCU7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLm5hdmJhci1jb2xsYXBzZS5zaG93IHtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIH1cclxufVxyXG5cclxuLyogIEZvciBMYXB0b3AgLyBEZXNrdG9wIGRldmljZXMgKi9cclxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjVweCkgYW5kIChtYXgtd2lkdGg6IDEyODBweCkge1xyXG4gICAgLmZvcm0taW5saW5lIC5pbnB1dC1ncm91cCB7XHJcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5pbWdEaXYge1xyXG4gICAgICAgIGhlaWdodDogMjgycHg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgLyogYmFja2dyb3VuZC1jb2xvcjpyZWQ7ICovXHJcblxyXG5cclxuICAgIH1cclxuICAgICAubmF2YmFyLWNvbGxhcHNlIHtcclxuICAgICAgICAvKiBwb3NpdGlvbjogZml4ZWQ7ICovXHJcbiAgICAgICAgdG9wOiA1NHB4O1xyXG4gICAgICAgIGxlZnQ6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgLyogcGFkZGluZy1ib3R0b206IDE1cHg7ICovXHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgei1pbmRleDogNzAwO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIxM2Q3NztcclxuICAgIH1cclxuXHJcbiAgICAubmF2YmFyLWNvbGxhcHNlLmNvbGxhcHNpbmcge1xyXG4gICAgICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1MCU7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLm5hdmJhci1jb2xsYXBzZS5zaG93IHtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIH1cclxufVxyXG5cclxuLyogVGFibGV0IC9JcGFkLyhQb3J0cmFpdCkgKi9cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAubmF2YmFyIC5kcm9wZG93bi1tZW51LmZvcm0td3JhcHBlciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAubmF2YmFyIC5mb3JtLWlubGluZSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcblxyXG4gICAgLm5hdmJhciAuaW5wdXQtZ3JvdXAge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5uYXZiYXIgLm5hdiAuYnRuLXByaW1hcnksXHJcbiAgICAubmF2YmFyIC5uYXYgLmJ0bi1wcmltYXJ5OmFjdGl2ZSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcblxyXG4gICAgLmltZ0RpdiB7XHJcbiAgICAgICAgaGVpZ2h0OiAyODJweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgICAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOmJsdWU7ICovXHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLyogICAjI0RldmljZSA9IFRhYmxldHMsIElwYWRzIChsYW5kc2NhcGUpICovXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XHJcbiAgICAuaW1nRGl2IHtcclxuICAgICAgICBoZWlnaHQ6IDIwOHB4O1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHBpbms7ICovXHJcbiAgICB9XHJcbn1cclxuXHJcbi5tYWluRGl2IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5pbXBMbmtzIHtcclxuICAgIC8qIGJvcmRlcjoycHggc29saWQgcmdiKDE1MywgNTEsIDc2KTsgKi9cclxuICAgIHBhZGRpbmc6IDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMXB4O1xyXG4gICAgO1xyXG59XHJcblxyXG5tYXJxdWVlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2OCwgMjUwLCAyMyk7XHJcblxyXG59XHJcblxyXG4vKiBcclxuICAjI0RldmljZSA9IExvdyBSZXNvbHV0aW9uIFRhYmxldHMsIE1vYmlsZXMgKExhbmRzY2FwZSkgKi9cclxuQG1lZGlhIChtaW4td2lkdGg6IDQ4MXB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIC5pbWdEaXYge1xyXG4gICAgICAgIGhlaWdodDogMjA4cHg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgLyogYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7ICovXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4vKiAjI0RldmljZSA9IE1vc3Qgb2YgdGhlIFNtYXJ0cGhvbmVzIE1vYmlsZXMgKFBvcnRyYWl0KSAqL1xyXG5AbWVkaWEgKG1pbi13aWR0aDogNDgxcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgLmltZ0RpdiB7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDhweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgICAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgKi9cclxuICAgIH1cclxufVxyXG5cclxuXHJcbi5uYXZiYXItbGlnaHQgLm5hdmJhci10b2dnbGVyIHtcclxuICAgIGNvbG9yOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItY29sb3I6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgIC5uYXZiYXItY29sbGFwc2Uge1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB0b3A6IDU0cHg7XHJcbiAgICAgICAgbGVmdDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB6LWluZGV4OiA3MDA7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEzZDc3O1xyXG4gICAgfVxyXG5cclxuICAgIC5uYXZiYXItY29sbGFwc2UuY29sbGFwc2luZyB7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDUwJTtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICAgIH1cclxuXHJcbiAgICAubmF2YmFyLWNvbGxhcHNlLnNob3cge1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgfVxyXG4gICAgLmNvbGxhcHNlIHtcclxuICAgICAgICAmOm5vdCguc2hvdykge1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BbGZhK1NsYWIrT25lJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuLndhdml5IHNwYW4ge1xyXG4gIGRpc3BsYXk6ICB0YWJsZS1jZWxsO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgYW5pbWF0aW9uOiB3YXZpeSA1cyBpbmZpbml0ZTtcclxuICBhbmltYXRpb24tZGVsYXk6IGNhbGMoLjVzICogdmFyKC0taSkpO1xyXG4gIFxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHdhdml5IHtcclxuICAwJSw0MCUsMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMClcclxuICB9XHJcbiAgMjAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweClcclxuICB9XHJcbn1cclxuXHJcbiJdfQ== */";

/***/ }),

/***/ 5322:
/*!****************************************************************************!*\
  !*** ./src/app/views/about-college/about-college.component.css?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = ".container {\r\n    margin-top: 10px;\r\n}\r\n.contentHeader {\r\n    background-color: #213d77;\r\n    color: white;\r\n    margin-top: 10px;\r\n    padding-top: 10px;\r\n    border-radius: 5px 5px 0px 0px;\r\n    justify-content: center;\r\n    text-align: center;\r\n\r\n}\r\n.contentHeader h2 {\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LWNvbGxlZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLDhCQUE4QjtJQUM5Qix1QkFBdUI7SUFDdkIsa0JBQWtCOztBQUV0QjtBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6ImFib3V0LWNvbGxlZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG4uY29udGVudEhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEzZDc3O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwcHggMHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG59XHJcblxyXG4uY29udGVudEhlYWRlciBoMiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */";

/***/ }),

/***/ 758:
/*!************************************************************************!*\
  !*** ./src/app/views/about-staff/about-staff.component.css?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = ".mandiv {\r\n    padding: 8px;\r\n}\r\n\r\n.details {\r\n    background-color: #fff;\r\n    border: 2px solid grey;\r\n    border-radius: 10%;\r\n    /* height: 400px;\r\n    width: 300p;\r\n    margin: 10px; */\r\n    padding: 10px;\r\n}\r\n\r\n.buttonmargin {\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.faculty-list {\r\n    margin-bottom: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LXN0YWZmLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEI7O21CQUVlO0lBQ2YsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkIiLCJmaWxlIjoiYWJvdXQtc3RhZmYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYW5kaXYge1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG59XHJcblxyXG4uZGV0YWlscyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcclxuICAgIC8qIGhlaWdodDogNDAwcHg7XHJcbiAgICB3aWR0aDogMzAwcDtcclxuICAgIG1hcmdpbjogMTBweDsgKi9cclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5idXR0b25tYXJnaW4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uZmFjdWx0eS1saXN0IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn0iXX0= */";

/***/ }),

/***/ 1087:
/*!********************************************************************************!*\
  !*** ./src/app/views/admin-panel/stdreport/stdreport.component.css?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "\n\n    .container{\n        height: auto;\n        width: auto;\n        margin-top: 5px;\n        border: 2px solid rgb(31, 168, 31);\n        /* border-radius: 5px;*/\n      border-radius: 4px; \n    } \n    #fileds{\n        \n        padding: 1px;\n        padding-left: 5px;\n        /* padding-right: 22px; */\n        margin-top: 10px 0 0 0;\n        /* margin-right:0px; */\n        border-radius: 4px; \n    } \n    .instruction{\n        margin-left: 40px;\n    } \n    .btnRow{\n    float: right;\n    padding-left: 5px;\n    margin-top: 100px;\n    height: 100px;\n    width:auto;\n    } \n    .btnColl{\n    box-shadow: none;\n    border: none;\n    margin-top: 32px;\n    width: 100%;\n    margin-left:2%;\n    content: center;\n    height: -moz-max-content;\n    height: max-content;\n} \n    .btn{\n    padding: 5px;\n    margin-right: none;\n    width: 100%;\n    zoom: 0;\n} \n    #radiobutton{\n    padding-left: 3px;\n    margin-right: 4px;\n} \n    #select_date{\n    border: none;\n    box-shadow: none;\n    border-bottom: 1px solid #000;\n    border-radius: 0px;\n} \n    .dataRow{\n    margin-top: 10px;\n    background-color: #bdc1c5;\n    width: 100%;\n    border-radius: 5px;\n    padding-left: 5px;\n} \n    .paginext{\n    float: right;\n    border:2px solid blue;\n    margin-top: 0px;\n    background-color:none;\n} \n    .newAddbutton{\nfloat: right;\n} \n    .ngx-pagination button:hover {\n    background:none;\n} \n    .nav-link{\n    float: left;\n    margin-right: 23px;\n    list-style-type: none;\n    color : white;\n    \n    \n} \n    .nav-item{\n    list-style-type: none;\n    float: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0ZHJlcG9ydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0lBRUk7UUFDSSxZQUFZO1FBQ1osV0FBVztRQUNYLGVBQWU7UUFDZixrQ0FBa0M7UUFDbEMsdUJBQXVCO01BQ3pCLGtCQUFrQjtJQUNwQjtJQUNBOztRQUVJLFlBQVk7UUFDWixpQkFBaUI7UUFDakIseUJBQXlCO1FBQ3pCLHNCQUFzQjtRQUN0QixzQkFBc0I7UUFDdEIsa0JBQWtCO0lBQ3RCO0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7SUFFQTtJQUNBLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixVQUFVO0lBQ1Y7SUFDSjtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxjQUFjO0lBQ2QsZUFBZTtJQUNmLHdCQUFtQjtJQUFuQixtQkFBbUI7QUFDdkI7SUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLE9BQU87QUFDWDtJQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjtJQUNBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQiw2QkFBNkI7SUFDN0Isa0JBQWtCO0FBQ3RCO0lBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCO0lBQ0E7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixxQkFBcUI7QUFDekI7SUFFQTtBQUNBLFlBQVk7QUFDWjtJQUNDO0lBQ0csZUFBZTtBQUNuQjtJQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsYUFBYTs7O0FBR2pCO0lBQ0E7SUFDSSxxQkFBcUI7SUFDckIsV0FBVztBQUNmIiwiZmlsZSI6InN0ZHJlcG9ydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbiAgICAuY29udGFpbmVye1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigzMSwgMTY4LCAzMSk7XG4gICAgICAgIC8qIGJvcmRlci1yYWRpdXM6IDVweDsqL1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4OyBcbiAgICB9IFxuICAgICNmaWxlZHN7XG4gICAgICAgIFxuICAgICAgICBwYWRkaW5nOiAxcHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgICAgICAvKiBwYWRkaW5nLXJpZ2h0OiAyMnB4OyAqL1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4IDAgMCAwO1xuICAgICAgICAvKiBtYXJnaW4tcmlnaHQ6MHB4OyAqL1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7IFxuICAgIH1cbiAgIFxuICAgIC5pbnN0cnVjdGlvbntcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gICAgfVxuICAgIFxuICAgIC5idG5Sb3d7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgd2lkdGg6YXV0bztcbiAgICB9XG4uYnRuQ29sbHtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1sZWZ0OjIlO1xuICAgIGNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xufVxuXG4uYnRue1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IG5vbmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgem9vbTogMDtcbn1cbiNyYWRpb2J1dHRvbntcbiAgICBwYWRkaW5nLWxlZnQ6IDNweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbn1cbiNzZWxlY3RfZGF0ZXtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG59XG4uZGF0YVJvd3tcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNiZGMxYzU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xufVxuLnBhZ2luZXh0e1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBib3JkZXI6MnB4IHNvbGlkIGJsdWU7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6bm9uZTtcbn1cblxuLm5ld0FkZGJ1dHRvbntcbmZsb2F0OiByaWdodDtcbn1cbiAubmd4LXBhZ2luYXRpb24gYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOm5vbmU7XG59XG5cbi5uYXYtbGlua3tcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIzcHg7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIGNvbG9yIDogd2hpdGU7XG4gICAgXG4gICAgXG59XG4ubmF2LWl0ZW17XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIGZsb2F0OiBsZWZ0O1xufSJdfQ== */";

/***/ }),

/***/ 151:
/*!**********************************************************************!*\
  !*** ./src/app/views/contact-us/contact-us.component.css?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = ".container {\r\n    margin-top: 10px;\r\n}\r\n\r\n.questionFormContaner {\r\n    background-color: #ffd79f;\r\n    color: white;\r\n    /* margin-top: 10px; */\r\n    text-align: center;\r\n    border-radius: 0px 1px 5px 5px;\r\n    ;\r\n    margin: inherit;\r\n}\r\n\r\n.questionFormHeader {\r\n    background-color: #213d77;\r\n    color: white;\r\n    padding-top: 10px;\r\n    border-radius: 5px 5px 0px 0px;\r\n    margin: auto;\r\n    justify-content: center;\r\n    text-align: center;\r\n\r\n}\r\n\r\n.questionFormHeader h2 {\r\n    text-align: center;\r\n}\r\n\r\n@media screen and (min-width: 320px) and (max-width: 1920px) {\r\n    /* Your CSS rules for all supported screen sizes here */\r\n\r\n    .onWeb{\r\n        display: block;\r\n    }\r\n    .onMobile{\r\n        display: none;\r\n    }\r\n  }\r\n\r\n@media screen and (max-width: 767px) {\r\n    /* Your CSS rules for phones here */\r\n    .onWeb{\r\n        display: none;\r\n    }\r\n    .onMobile{\r\n        display: block;\r\n    }\r\n  }\r\n\r\n@media screen and (min-width: 768px) and (max-width: 1024px) {\r\n    /* Your CSS rules for tablets here */\r\n    .onWeb{\r\n        display: none;\r\n    }\r\n    .onMobile{\r\n        display: block;\r\n    }\r\n  }\r\n\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QtdXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQiw4QkFBOEI7O0lBRTlCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQiw4QkFBOEI7SUFDOUIsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksdURBQXVEOztJQUV2RDtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGFBQWE7SUFDakI7RUFDRjs7QUFFQTtJQUNFLG1DQUFtQztJQUNuQztRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLGNBQWM7SUFDbEI7RUFDRjs7QUFFQTtJQUNFLG9DQUFvQztJQUNwQztRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLGNBQWM7SUFDbEI7RUFDRiIsImZpbGUiOiJjb250YWN0LXVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5xdWVzdGlvbkZvcm1Db250YW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkNzlmO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgLyogbWFyZ2luLXRvcDogMTBweDsgKi9cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAxcHggNXB4IDVweDtcclxuICAgIDtcclxuICAgIG1hcmdpbjogaW5oZXJpdDtcclxufVxyXG5cclxuLnF1ZXN0aW9uRm9ybUhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEzZDc3O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDBweCAwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbn1cclxuXHJcbi5xdWVzdGlvbkZvcm1IZWFkZXIgaDIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDE5MjBweCkge1xyXG4gICAgLyogWW91ciBDU1MgcnVsZXMgZm9yIGFsbCBzdXBwb3J0ZWQgc2NyZWVuIHNpemVzIGhlcmUgKi9cclxuXHJcbiAgICAub25XZWJ7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgICAub25Nb2JpbGV7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAvKiBZb3VyIENTUyBydWxlcyBmb3IgcGhvbmVzIGhlcmUgKi9cclxuICAgIC5vbldlYntcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLm9uTW9iaWxle1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAgIC8qIFlvdXIgQ1NTIHJ1bGVzIGZvciB0YWJsZXRzIGhlcmUgKi9cclxuICAgIC5vbldlYntcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLm9uTW9iaWxle1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgIl19 */";

/***/ }),

/***/ 8725:
/*!**************************************************************************!*\
  !*** ./src/app/views/dynamic-page/dynamic-page.component.css?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = ".container{\r\n    margin: auto;\r\n}\r\n.section-card{\r\n    height: auto;\r\n    width: auto;\r\n    border: 2px solid blue;\r\n    margin: 10px;\r\n    padding: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR5bmFtaWMtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGFBQWE7QUFDakIiLCJmaWxlIjoiZHluYW1pYy1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbi5zZWN0aW9uLWNhcmR7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsdWU7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59Il19 */";

/***/ }),

/***/ 5664:
/*!************************************************************!*\
  !*** ./src/app/views/exams/exams.component.css?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleGFtcy5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 3037:
/*!****************************************************************!*\
  !*** ./src/app/views/faculty/faculty.component.css?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = ".banner{\n    width:100%;\n    height: 50px;\n}\n\n    .container{\n        background-color:rgb(255, 255, 255);\n        height: auto;\n        margin-top: 25px;\n        padding-bottom: 20px;\n        border: 2px solid green;\n        border-radius: 5px;\n        border-style: round;\n    }\n\n    #fileds{\n        \n        padding:px;\n        padding-left: 24px;\n        /* padding-right: 22px; */\n        margin-top: 10px;\n        margin-right:0px;\n        border-radius: 4px; \n    }\n\n    body{\n        background-color: lightgrey;\n    }\n\n    .instruction{\n        margin-left: 40px;\n    }\n\n    .btnRow{\n    float: right;\n    margin-top: 10px;\n    height: 100px;\n    }\n\n    .btnColl{\n    box-shadow: none;\n    border: none;\n    /* margin-top: 6.6%; */\n    \n}\n\n    .btn{\nmargin-left: 4%;\n}\n\n    #radiobutton{\n    padding-left: 3px;\n    margin-right: 4px;\n}\n\n    #select_date{\n    border: none;\n    box-shadow: none;\n    border-bottom: 1px solid #000;\n    border-radius: 0px;\n}\n\n    .dataRow{\n    margin-top: 10px;\n    background-color: #E5E7E9;\n    width: 100%;\n    border-radius: 5px;\n}\n\n    .paginext{\n    float: right;\n    border:2px solid blue;\n    margin-top: 0px;\n    background-color: GRAY;\n}\n\n    .nav-link{\n    float: left;\n    margin-right: 23px;\n    list-style-type: none;\n    color : white;\n    \n    \n}\n\n    .nav-item{\n    list-style-type: none;\n    float: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhY3VsdHkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixZQUFZO0FBQ2hCOztJQUVJO1FBQ0ksbUNBQW1DO1FBQ25DLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsb0JBQW9CO1FBQ3BCLHVCQUF1QjtRQUN2QixrQkFBa0I7UUFDbEIsbUJBQW1CO0lBQ3ZCOztJQUNBOztRQUVJLFVBQVU7UUFDVixrQkFBa0I7UUFDbEIseUJBQXlCO1FBQ3pCLGdCQUFnQjtRQUNoQixnQkFBZ0I7UUFDaEIsa0JBQWtCO0lBQ3RCOztJQUNBO1FBQ0ksMkJBQTJCO0lBQy9COztJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCOztJQUVBO0lBQ0EsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2I7O0lBQ0o7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLHNCQUFzQjs7QUFFMUI7O0lBQ0E7QUFDQSxlQUFlO0FBQ2Y7O0lBQ0E7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztJQUNBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQiw2QkFBNkI7SUFDN0Isa0JBQWtCO0FBQ3RCOztJQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztJQUNBO0lBQ0ksWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2Ysc0JBQXNCO0FBQzFCOztJQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsYUFBYTs7O0FBR2pCOztJQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLFdBQVc7QUFDZiIsImZpbGUiOiJmYWN1bHR5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFubmVye1xuICAgIHdpZHRoOjEwMCU7XG4gICAgaGVpZ2h0OiA1MHB4O1xufVxuXG4gICAgLmNvbnRhaW5lcntcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjU1LCAyNTUsIDI1NSk7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZWVuO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGJvcmRlci1zdHlsZTogcm91bmQ7XG4gICAgfSBcbiAgICAjZmlsZWRze1xuICAgICAgICBcbiAgICAgICAgcGFkZGluZzpweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyNHB4O1xuICAgICAgICAvKiBwYWRkaW5nLXJpZ2h0OiAyMnB4OyAqL1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7IFxuICAgIH1cbiAgICBib2R5e1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XG4gICAgfVxuICAgIC5pbnN0cnVjdGlvbntcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gICAgfVxuICAgIFxuICAgIC5idG5Sb3d7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICB9XG4uYnRuQ29sbHtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICAvKiBtYXJnaW4tdG9wOiA2LjYlOyAqL1xuICAgIFxufVxuLmJ0bntcbm1hcmdpbi1sZWZ0OiA0JTtcbn1cbiNyYWRpb2J1dHRvbntcbiAgICBwYWRkaW5nLWxlZnQ6IDNweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbn1cbiNzZWxlY3RfZGF0ZXtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG59XG4uZGF0YVJvd3tcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFNUU3RTk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLnBhZ2luZXh0e1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBib3JkZXI6MnB4IHNvbGlkIGJsdWU7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IEdSQVk7XG59XG5cbi5uYXYtbGlua3tcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIzcHg7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIGNvbG9yIDogd2hpdGU7XG4gICAgXG4gICAgXG59XG4ubmF2LWl0ZW17XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIGZsb2F0OiBsZWZ0O1xufSJdfQ== */";

/***/ }),

/***/ 3472:
/*!******************************************************************!*\
  !*** ./src/app/views/feedback/feedback.component.css?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmZWVkYmFjay5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 2712:
/*!**************************************************************!*\
  !*** ./src/app/views/footer/footer.component.css?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = ".social-media-icon{\r\n    height: 30px;\r\n    width: 51px;\r\n}\r\n.tw-ic{\r\n    cursor: pointer;\r\n}\r\n.tw-ic :hover{\r\n    height: 44px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zb2NpYWwtbWVkaWEtaWNvbntcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHdpZHRoOiA1MXB4O1xyXG59XHJcbi50dy1pY3tcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4udHctaWMgOmhvdmVye1xyXG4gICAgaGVpZ2h0OiA0NHB4O1xyXG59XHJcblxyXG4iXX0= */";

/***/ }),

/***/ 6483:
/*!******************************************************************!*\
  !*** ./src/app/views/homepage/homepage.component.css?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Montserrat&display=swap\");\n\n@media (min-width: 1200px) {\n    .form-inline .input-group {\n        width: 300px;\n        margin-left: 30px;\n    }\n\n}\n\n@media (max-width: 768px) {\n    .navbar .dropdown-menu.form-wrapper {\n        width: 100%;\n        padding: 10px 15px;\n        background: transparent;\n        border: none;\n    }\n\n    .navbar .form-inline {\n        display: block;\n    }\n\n    .navbar .input-group {\n        width: 100%;\n    }\n\n    .navbar .nav .btn-primary,\n    .navbar .nav .btn-primary:active {\n        display: block;\n    }\n\n}\n\n@media screen and (max-width: 480px) {\n    .imgDiv {\n        height: 152px;\n        background-color: olive;\n    }\n}\n\nimg {\n    max-width: 100%;\n    max-height: 100%;\n    background-repeat: no-repeat;\n    background-size: cover;\n    display: block;\n    /* remove extra space below image */\n}\n\n.logedButton {\n    background-color: #4CAF50;\n    border: none;\n    color: white;\n    padding: 20px;\n    height: 4px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n    margin: 4px 2px;\n    border-radius: 2px;\n}\n\n/* Device = Desktops */\n\n@media (min-width: 1281px) {\n    .imgDiv {\n        height: 337px;\n        max-width: 100%;\n        max-height: 100%;\n    }\n\n}\n\n/*  For Laptop / Desktop devices */\n\n@media (min-width: 1025px) and (max-width: 1280px) {\n    .form-inline .input-group {\n        width: 300px;\n        margin-left: 30px;\n    }\n\n    .imgDiv {\n        height: 282px;\n        max-width: 100%;\n        max-height: 100%;\n        /* background-color:red; */\n\n\n    }\n}\n\n/*   ##Device = Tablets, Ipads (landscape) */\n\n@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {\n    .imgDiv {\n        height: 208px;\n        max-width: 100%;\n        max-height: 100%;\n        /* background-color: pink; */\n    }\n}\n\n.mainDiv {\n    margin-bottom: 10px;\n}\n\n.impLnks {\n    /* border:2px solid rgb(153, 51, 76); */\n    padding: 0%;\n    text-align: center;\n    margin-top: 1px;\n    ;\n}\n\nmarquee {\n    background-color: rgb(68, 250, 23);\n\n}\n\n/* \n  ##Device = Low Resolution Tablets, Mobiles (Landscape) */\n\n@media (min-width: 481px) and (max-width: 767px) {\n    .imgDiv {\n        height: 208px;\n        max-width: 100%;\n        max-height: 100%;\n        /* background-color: black; */\n    }\n\n}\n\n/* ##Device = Most of the Smartphones Mobiles (Portrait) */\n\n@media (min-width: 481px) and (max-width: 767px) {\n    .imgDiv {\n        height: 208px;\n        max-width: 100%;\n        max-height: 100%;\n        /* background-color: black; */\n    }\n}\n\n.educationDiv h1{\n     position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n\nh1 {\n    font-family: \"Montserrat Medium\";\n    max-width: 40ch;\n    text-align: center;\n    transform: scale(0.94);\n    animation: scale 3s forwards cubic-bezier(0.5, 1, 0.89, 1);\n  }\n\n@keyframes scale {\n    100% {\n      transform: scale(1);\n    }\n  }\n\nspan {\n    display: inline-block;\n    opacity: 0;\n    filter: blur(4px);\n  }\n\nspan:nth-child(1) {\n    animation: fade-in 0.8s 0.1s forwards cubic-bezier(0.11, 0, 0.5, 0);\n  }\n\nspan:nth-child(2) {\n    animation: fade-in 0.8s 0.2s forwards cubic-bezier(0.11, 0, 0.5, 0);\n  }\n\nspan:nth-child(3) {\n    animation: fade-in 0.8s 0.3s forwards cubic-bezier(0.11, 0, 0.5, 0);\n  }\n\nspan:nth-child(4) {\n    animation: fade-in 0.8s 0.4s forwards cubic-bezier(0.11, 0, 0.5, 0);\n  }\n\nspan:nth-child(5) {\n    animation: fade-in 0.8s 0.5s forwards cubic-bezier(0.11, 0, 0.5, 0);\n  }\n\nspan:nth-child(6) {\n    animation: fade-in 0.8s 0.6s forwards cubic-bezier(0.11, 0, 0.5, 0);\n  }\n\nspan:nth-child(7) {\n    animation: fade-in 0.8s 0.7s forwards cubic-bezier(0.11, 0, 0.5, 0);\n  }\n\nspan:nth-child(8) {\n    animation: fade-in 0.8s 0.8s forwards cubic-bezier(0.11, 0, 0.5, 0);\n  }\n\nspan:nth-child(9) {\n    animation: fade-in 0.8s 0.9s forwards cubic-bezier(0.11, 0, 0.5, 0);\n  }\n\nspan:nth-child(10) {\n    animation: fade-in 0.8s 1s forwards cubic-bezier(0.11, 0, 0.5, 0);\n  }\n\nspan:nth-child(11) {\n    animation: fade-in 0.8s 1.1s forwards cubic-bezier(0.11, 0, 0.5, 0);\n  }\n\nspan:nth-child(12) {\n    animation: fade-in 0.8s 1.2s forwards cubic-bezier(0.11, 0, 0.5, 0);\n  }\n\nspan:nth-child(13) {\n    animation: fade-in 0.8s 1.3s forwards cubic-bezier(0.11, 0, 0.5, 0);\n  }\n\nspan:nth-child(14) {\n    animation: fade-in 0.8s 1.4s forwards cubic-bezier(0.11, 0, 0.5, 0);\n  }\n\nspan:nth-child(15) {\n    animation: fade-in 0.8s 1.5s forwards cubic-bezier(0.11, 0, 0.5, 0);\n  }\n\nspan:nth-child(16) {\n    animation: fade-in 0.8s 1.6s forwards cubic-bezier(0.11, 0, 0.5, 0);\n  }\n\nspan:nth-child(17) {\n    animation: fade-in 0.8s 1.7s forwards cubic-bezier(0.11, 0, 0.5, 0);\n  }\n\nspan:nth-child(18) {\n    animation: fade-in 0.8s 1.8s forwards cubic-bezier(0.11, 0, 0.5, 0);\n  }\n\n@keyframes fade-in {\n    100% {\n      opacity: 1;\n      filter: blur(0);\n    }\n  }\n\n.questionFormHeader {\n    background-color: #213d77;\n    color: white;\n    padding-top: 10px;\n    border-radius: 5px 5px 0px 0px;\n    margin: auto;\n    justify-content: center;\n    text-align: center;\n\n}\n\n.questionFormHeader h2 {\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWVwYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQThFOztBQUU5RTtJQUNJO1FBQ0ksWUFBWTtRQUNaLGlCQUFpQjtJQUNyQjs7QUFFSjs7QUFFQTtJQUNJO1FBQ0ksV0FBVztRQUNYLGtCQUFrQjtRQUNsQix1QkFBdUI7UUFDdkIsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxXQUFXO0lBQ2Y7O0lBRUE7O1FBRUksY0FBYztJQUNsQjs7QUFFSjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtRQUNiLHVCQUF1QjtJQUMzQjtBQUNKOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQiw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2IsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBLHNCQUFzQjs7QUFDdEI7SUFDSTtRQUNJLGFBQWE7UUFDYixlQUFlO1FBQ2YsZ0JBQWdCO0lBQ3BCOztBQUVKOztBQUVBLGtDQUFrQzs7QUFDbEM7SUFDSTtRQUNJLFlBQVk7UUFDWixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxhQUFhO1FBQ2IsZUFBZTtRQUNmLGdCQUFnQjtRQUNoQiwwQkFBMEI7OztJQUc5QjtBQUNKOztBQUdBLDRDQUE0Qzs7QUFDNUM7SUFDSTtRQUNJLGFBQWE7UUFDYixlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLDRCQUE0QjtJQUNoQztBQUNKOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksdUNBQXVDO0lBQ3ZDLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZUFBZTs7QUFFbkI7O0FBRUE7SUFDSSxrQ0FBa0M7O0FBRXRDOztBQUVBOzBEQUMwRDs7QUFDMUQ7SUFDSTtRQUNJLGFBQWE7UUFDYixlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLDZCQUE2QjtJQUNqQzs7QUFFSjs7QUFFQSwwREFBMEQ7O0FBQzFEO0lBQ0k7UUFDSSxhQUFhO1FBQ2IsZUFBZTtRQUNmLGdCQUFnQjtRQUNoQiw2QkFBNkI7SUFDakM7QUFDSjs7QUFFQTtLQUNLLGtCQUFrQjtJQUNuQixRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QiwwREFBMEQ7RUFDNUQ7O0FBQ0E7SUFDRTtNQUNFLG1CQUFtQjtJQUNyQjtFQUNGOztBQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixpQkFBaUI7RUFDbkI7O0FBRUE7SUFDRSxtRUFBbUU7RUFDckU7O0FBRUE7SUFDRSxtRUFBbUU7RUFDckU7O0FBRUE7SUFDRSxtRUFBbUU7RUFDckU7O0FBRUE7SUFDRSxtRUFBbUU7RUFDckU7O0FBRUE7SUFDRSxtRUFBbUU7RUFDckU7O0FBRUE7SUFDRSxtRUFBbUU7RUFDckU7O0FBRUE7SUFDRSxtRUFBbUU7RUFDckU7O0FBRUE7SUFDRSxtRUFBbUU7RUFDckU7O0FBRUE7SUFDRSxtRUFBbUU7RUFDckU7O0FBRUE7SUFDRSxpRUFBaUU7RUFDbkU7O0FBRUE7SUFDRSxtRUFBbUU7RUFDckU7O0FBRUE7SUFDRSxtRUFBbUU7RUFDckU7O0FBRUE7SUFDRSxtRUFBbUU7RUFDckU7O0FBRUE7SUFDRSxtRUFBbUU7RUFDckU7O0FBRUE7SUFDRSxtRUFBbUU7RUFDckU7O0FBRUE7SUFDRSxtRUFBbUU7RUFDckU7O0FBRUE7SUFDRSxtRUFBbUU7RUFDckU7O0FBRUE7SUFDRSxtRUFBbUU7RUFDckU7O0FBRUE7SUFDRTtNQUNFLFVBQVU7TUFDVixlQUFlO0lBQ2pCO0VBQ0Y7O0FBRUE7SUFDRSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQiw4QkFBOEI7SUFDOUIsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6ImhvbWVwYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0JmRpc3BsYXk9c3dhcFwiKTtcblxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAgIC5mb3JtLWlubGluZSAuaW5wdXQtZ3JvdXAge1xuICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgIH1cblxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAubmF2YmFyIC5kcm9wZG93bi1tZW51LmZvcm0td3JhcHBlciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgfVxuXG4gICAgLm5hdmJhciAuZm9ybS1pbmxpbmUge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICAubmF2YmFyIC5pbnB1dC1ncm91cCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC5uYXZiYXIgLm5hdiAuYnRuLXByaW1hcnksXG4gICAgLm5hdmJhciAubmF2IC5idG4tcHJpbWFyeTphY3RpdmUge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAuaW1nRGl2IHtcbiAgICAgICAgaGVpZ2h0OiAxNTJweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogb2xpdmU7XG4gICAgfVxufVxuXG5pbWcge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICAvKiByZW1vdmUgZXh0cmEgc3BhY2UgYmVsb3cgaW1hZ2UgKi9cbn1cblxuLmxvZ2VkQnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBoZWlnaHQ6IDRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luOiA0cHggMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cblxuLyogRGV2aWNlID0gRGVza3RvcHMgKi9cbkBtZWRpYSAobWluLXdpZHRoOiAxMjgxcHgpIHtcbiAgICAuaW1nRGl2IHtcbiAgICAgICAgaGVpZ2h0OiAzMzdweDtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgIH1cblxufVxuXG4vKiAgRm9yIExhcHRvcCAvIERlc2t0b3AgZGV2aWNlcyAqL1xuQG1lZGlhIChtaW4td2lkdGg6IDEwMjVweCkgYW5kIChtYXgtd2lkdGg6IDEyODBweCkge1xuICAgIC5mb3JtLWlubGluZSAuaW5wdXQtZ3JvdXAge1xuICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgIH1cblxuICAgIC5pbWdEaXYge1xuICAgICAgICBoZWlnaHQ6IDI4MnB4O1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgICAgIC8qIGJhY2tncm91bmQtY29sb3I6cmVkOyAqL1xuXG5cbiAgICB9XG59XG5cblxuLyogICAjI0RldmljZSA9IFRhYmxldHMsIElwYWRzIChsYW5kc2NhcGUpICovXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgIC5pbWdEaXYge1xuICAgICAgICBoZWlnaHQ6IDIwOHB4O1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHBpbms7ICovXG4gICAgfVxufVxuXG4ubWFpbkRpdiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmltcExua3Mge1xuICAgIC8qIGJvcmRlcjoycHggc29saWQgcmdiKDE1MywgNTEsIDc2KTsgKi9cbiAgICBwYWRkaW5nOiAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMXB4O1xuICAgIDtcbn1cblxubWFycXVlZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY4LCAyNTAsIDIzKTtcblxufVxuXG4vKiBcbiAgIyNEZXZpY2UgPSBMb3cgUmVzb2x1dGlvbiBUYWJsZXRzLCBNb2JpbGVzIChMYW5kc2NhcGUpICovXG5AbWVkaWEgKG1pbi13aWR0aDogNDgxcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgIC5pbWdEaXYge1xuICAgICAgICBoZWlnaHQ6IDIwOHB4O1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGJsYWNrOyAqL1xuICAgIH1cblxufVxuXG4vKiAjI0RldmljZSA9IE1vc3Qgb2YgdGhlIFNtYXJ0cGhvbmVzIE1vYmlsZXMgKFBvcnRyYWl0KSAqL1xuQG1lZGlhIChtaW4td2lkdGg6IDQ4MXB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAuaW1nRGl2IHtcbiAgICAgICAgaGVpZ2h0OiAyMDhweDtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgICAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgKi9cbiAgICB9XG59XG5cbi5lZHVjYXRpb25EaXYgaDF7XG4gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbmgxIHtcbiAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0IE1lZGl1bVwiO1xuICAgIG1heC13aWR0aDogNDBjaDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk0KTtcbiAgICBhbmltYXRpb246IHNjYWxlIDNzIGZvcndhcmRzIGN1YmljLWJlemllcigwLjUsIDEsIDAuODksIDEpO1xuICB9XG4gIEBrZXlmcmFtZXMgc2NhbGUge1xuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB9XG4gIH1cbiAgXG4gIHNwYW4ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBvcGFjaXR5OiAwO1xuICAgIGZpbHRlcjogYmx1cig0cHgpO1xuICB9XG4gIFxuICBzcGFuOm50aC1jaGlsZCgxKSB7XG4gICAgYW5pbWF0aW9uOiBmYWRlLWluIDAuOHMgMC4xcyBmb3J3YXJkcyBjdWJpYy1iZXppZXIoMC4xMSwgMCwgMC41LCAwKTtcbiAgfVxuICBcbiAgc3BhbjpudGgtY2hpbGQoMikge1xuICAgIGFuaW1hdGlvbjogZmFkZS1pbiAwLjhzIDAuMnMgZm9yd2FyZHMgY3ViaWMtYmV6aWVyKDAuMTEsIDAsIDAuNSwgMCk7XG4gIH1cbiAgXG4gIHNwYW46bnRoLWNoaWxkKDMpIHtcbiAgICBhbmltYXRpb246IGZhZGUtaW4gMC44cyAwLjNzIGZvcndhcmRzIGN1YmljLWJlemllcigwLjExLCAwLCAwLjUsIDApO1xuICB9XG4gIFxuICBzcGFuOm50aC1jaGlsZCg0KSB7XG4gICAgYW5pbWF0aW9uOiBmYWRlLWluIDAuOHMgMC40cyBmb3J3YXJkcyBjdWJpYy1iZXppZXIoMC4xMSwgMCwgMC41LCAwKTtcbiAgfVxuICBcbiAgc3BhbjpudGgtY2hpbGQoNSkge1xuICAgIGFuaW1hdGlvbjogZmFkZS1pbiAwLjhzIDAuNXMgZm9yd2FyZHMgY3ViaWMtYmV6aWVyKDAuMTEsIDAsIDAuNSwgMCk7XG4gIH1cbiAgXG4gIHNwYW46bnRoLWNoaWxkKDYpIHtcbiAgICBhbmltYXRpb246IGZhZGUtaW4gMC44cyAwLjZzIGZvcndhcmRzIGN1YmljLWJlemllcigwLjExLCAwLCAwLjUsIDApO1xuICB9XG4gIFxuICBzcGFuOm50aC1jaGlsZCg3KSB7XG4gICAgYW5pbWF0aW9uOiBmYWRlLWluIDAuOHMgMC43cyBmb3J3YXJkcyBjdWJpYy1iZXppZXIoMC4xMSwgMCwgMC41LCAwKTtcbiAgfVxuICBcbiAgc3BhbjpudGgtY2hpbGQoOCkge1xuICAgIGFuaW1hdGlvbjogZmFkZS1pbiAwLjhzIDAuOHMgZm9yd2FyZHMgY3ViaWMtYmV6aWVyKDAuMTEsIDAsIDAuNSwgMCk7XG4gIH1cbiAgXG4gIHNwYW46bnRoLWNoaWxkKDkpIHtcbiAgICBhbmltYXRpb246IGZhZGUtaW4gMC44cyAwLjlzIGZvcndhcmRzIGN1YmljLWJlemllcigwLjExLCAwLCAwLjUsIDApO1xuICB9XG4gIFxuICBzcGFuOm50aC1jaGlsZCgxMCkge1xuICAgIGFuaW1hdGlvbjogZmFkZS1pbiAwLjhzIDFzIGZvcndhcmRzIGN1YmljLWJlemllcigwLjExLCAwLCAwLjUsIDApO1xuICB9XG4gIFxuICBzcGFuOm50aC1jaGlsZCgxMSkge1xuICAgIGFuaW1hdGlvbjogZmFkZS1pbiAwLjhzIDEuMXMgZm9yd2FyZHMgY3ViaWMtYmV6aWVyKDAuMTEsIDAsIDAuNSwgMCk7XG4gIH1cbiAgXG4gIHNwYW46bnRoLWNoaWxkKDEyKSB7XG4gICAgYW5pbWF0aW9uOiBmYWRlLWluIDAuOHMgMS4ycyBmb3J3YXJkcyBjdWJpYy1iZXppZXIoMC4xMSwgMCwgMC41LCAwKTtcbiAgfVxuICBcbiAgc3BhbjpudGgtY2hpbGQoMTMpIHtcbiAgICBhbmltYXRpb246IGZhZGUtaW4gMC44cyAxLjNzIGZvcndhcmRzIGN1YmljLWJlemllcigwLjExLCAwLCAwLjUsIDApO1xuICB9XG4gIFxuICBzcGFuOm50aC1jaGlsZCgxNCkge1xuICAgIGFuaW1hdGlvbjogZmFkZS1pbiAwLjhzIDEuNHMgZm9yd2FyZHMgY3ViaWMtYmV6aWVyKDAuMTEsIDAsIDAuNSwgMCk7XG4gIH1cbiAgXG4gIHNwYW46bnRoLWNoaWxkKDE1KSB7XG4gICAgYW5pbWF0aW9uOiBmYWRlLWluIDAuOHMgMS41cyBmb3J3YXJkcyBjdWJpYy1iZXppZXIoMC4xMSwgMCwgMC41LCAwKTtcbiAgfVxuICBcbiAgc3BhbjpudGgtY2hpbGQoMTYpIHtcbiAgICBhbmltYXRpb246IGZhZGUtaW4gMC44cyAxLjZzIGZvcndhcmRzIGN1YmljLWJlemllcigwLjExLCAwLCAwLjUsIDApO1xuICB9XG4gIFxuICBzcGFuOm50aC1jaGlsZCgxNykge1xuICAgIGFuaW1hdGlvbjogZmFkZS1pbiAwLjhzIDEuN3MgZm9yd2FyZHMgY3ViaWMtYmV6aWVyKDAuMTEsIDAsIDAuNSwgMCk7XG4gIH1cbiAgXG4gIHNwYW46bnRoLWNoaWxkKDE4KSB7XG4gICAgYW5pbWF0aW9uOiBmYWRlLWluIDAuOHMgMS44cyBmb3J3YXJkcyBjdWJpYy1iZXppZXIoMC4xMSwgMCwgMC41LCAwKTtcbiAgfVxuICBcbiAgQGtleWZyYW1lcyBmYWRlLWluIHtcbiAgICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICBmaWx0ZXI6IGJsdXIoMCk7XG4gICAgfVxuICB9XG5cbiAgLnF1ZXN0aW9uRm9ybUhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxM2Q3NztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwcHggMHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbn1cblxuLnF1ZXN0aW9uRm9ybUhlYWRlciBoMiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */";

/***/ }),

/***/ 5110:
/*!***********************************************************************!*\
  !*** ./src/app/views/img-gallery/img-galery.component.css?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = "* {\r\n    box-sizing: border-box;\r\n}\r\n\r\n.image-list {\r\n    margin: auto;\r\n}\r\n\r\n.modal-content {\r\n    height: auto;\r\n}\r\n\r\n.modal-footer {\r\n    justify-content: center;\r\n}\r\n\r\n.modal-header {\r\n    height: 10%;\r\n    background-color: #213d77;\r\n    color: white;\r\n}\r\n\r\n.close {\r\n    float: right !important;\r\n    font-size: 1.9rem !important;\r\n    font-weight: bold !important;\r\n    line-height: 1 !important;\r\n    color: white !important;\r\n    /* text-shadow: 0 1px 0 #fff; */\r\n}\r\n\r\n.clearfix::after {\r\n    content: \"\";\r\n    clear: both;\r\n    display: table;\r\n}\r\n\r\n.column {\r\n    float: left;\r\n    width: 33.33%;\r\n    padding: 5px;\r\n}\r\n\r\n.column img {\r\n    height: 95%;\r\n    width: 85%;\r\n}\r\n\r\n/* Clearfix (clear floats) */\r\n\r\n.row::after {\r\n    content: \"\";\r\n    clear: both;\r\n    display: table;\r\n}\r\n\r\n.image-data {\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n    padding: 10px;\r\n    border-radius: 14px;\r\n}\r\n\r\n.bd-example-modal-lg {\r\n    -o-object-fit: contain;\r\n       object-fit: contain;\r\n\r\n}\r\n\r\n.questionFormHeader {\r\n    background-color: #213d77;\r\n    padding-top: 10px;\r\n    border-radius: 5px 5px 0px 0px;\r\n    margin: auto;\r\n    justify-content: center;\r\n    text-align: center;\r\n\r\n}\r\n\r\n.questionFormHeader h2 {\r\n    text-align: center;\r\n}\r\n\r\n.image-galary-container {\r\n    padding-top: 5px;\r\n}\r\n\r\n@media screen and (max-width: 480px) {\r\n    .modal-content {\r\n        height: auto;\r\n        position: absolute;\r\n        top: 80%;\r\n        left: 50%;\r\n        transform: translate(-50%, 50%);\r\n    }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    .modal-content {\r\n        height: auto;\r\n        position: absolute;\r\n        top: 80%;\r\n        left: 50%;\r\n        transform: translate(-50%, 50%);\r\n    }\r\n}\r\n\r\n@media (max-width: 992px) {\r\n    .modal-content {\r\n        height: auto;\r\n        position: absolute;\r\n        top: 80%;\r\n        left: 50%;\r\n        transform: translate(-50%, 25%);\r\n    }\r\n}\r\n\r\n@media (min-width: 1281px) {\r\n    .modal-content {\r\n        height: auto;\r\n        position: absolute;\r\n        top: 80%;\r\n        left: 50%;\r\n        transform: translate(-50%, 50%);\r\n    }\r\n}\r\n\r\n@media (min-width: 1025px) and (max-width: 1280px) {\r\n    .modal-content {\r\n        height: auto;\r\n        position: absolute;\r\n        top: 80%;\r\n        left: 50%;\r\n        transform: translate(-50%, 4%);\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltZy1nYWxlcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIseUJBQXlCO0lBQ3pCLHVCQUF1QjtJQUN2QiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsVUFBVTtBQUNkOztBQUVBLDRCQUE0Qjs7QUFDNUI7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx3QkFBbUI7SUFBbkIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxzQkFBbUI7T0FBbkIsbUJBQW1COztBQUV2Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsOEJBQThCO0lBQzlCLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsa0JBQWtCOztBQUV0Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFJQTtJQUNJO1FBQ0ksWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixRQUFRO1FBQ1IsU0FBUztRQUNULCtCQUErQjtJQUNuQztBQUNKOztBQUVBO0lBQ0k7UUFDSSxZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLFFBQVE7UUFDUixTQUFTO1FBQ1QsK0JBQStCO0lBQ25DO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsUUFBUTtRQUNSLFNBQVM7UUFDVCwrQkFBK0I7SUFDbkM7QUFDSjs7QUFJQTtJQUNJO1FBQ0ksWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixRQUFRO1FBQ1IsU0FBUztRQUNULCtCQUErQjtJQUNuQztBQUNKOztBQUVBO0lBQ0k7UUFDSSxZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLFFBQVE7UUFDUixTQUFTO1FBQ1QsOEJBQThCO0lBQ2xDO0FBQ0oiLCJmaWxlIjoiaW1nLWdhbGVyeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uaW1hZ2UtbGlzdCB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5tb2RhbC1jb250ZW50IHtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLm1vZGFsLWZvb3RlciB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLm1vZGFsLWhlYWRlciB7XHJcbiAgICBoZWlnaHQ6IDEwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTNkNzc7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5jbG9zZSB7XHJcbiAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMS45cmVtICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgLyogdGV4dC1zaGFkb3c6IDAgMXB4IDAgI2ZmZjsgKi9cclxufVxyXG5cclxuLmNsZWFyZml4OjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxufVxyXG5cclxuLmNvbHVtbiB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAzMy4zMyU7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5jb2x1bW4gaW1nIHtcclxuICAgIGhlaWdodDogOTUlO1xyXG4gICAgd2lkdGg6IDg1JTtcclxufVxyXG5cclxuLyogQ2xlYXJmaXggKGNsZWFyIGZsb2F0cykgKi9cclxuLnJvdzo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbn1cclxuXHJcbi5pbWFnZS1kYXRhIHtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTRweDtcclxufVxyXG5cclxuLmJkLWV4YW1wbGUtbW9kYWwtbGcge1xyXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuXHJcbn1cclxuXHJcbi5xdWVzdGlvbkZvcm1IZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxM2Q3NztcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwcHggMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG59XHJcblxyXG4ucXVlc3Rpb25Gb3JtSGVhZGVyIGgyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmltYWdlLWdhbGFyeS1jb250YWluZXIge1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxufVxyXG5cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgLm1vZGFsLWNvbnRlbnQge1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA4MCU7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDUwJSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLm1vZGFsLWNvbnRlbnQge1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA4MCU7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDUwJSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgLm1vZGFsLWNvbnRlbnQge1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA4MCU7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDI1JSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyODFweCkge1xyXG4gICAgLm1vZGFsLWNvbnRlbnQge1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA4MCU7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDUwJSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMDI1cHgpIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIHtcclxuICAgIC5tb2RhbC1jb250ZW50IHtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogODAlO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCA0JSk7XHJcbiAgICB9XHJcbn0iXX0= */";

/***/ }),

/***/ 2180:
/*!********************************************************************************!*\
  !*** ./src/app/views/mission-vission/mission-vission.component.css?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = ".mandiv{\n    padding: 8px;\n    width: 600px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pc3Npb24tdmlzc2lvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEIiLCJmaWxlIjoibWlzc2lvbi12aXNzaW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFuZGl2e1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICB3aWR0aDogNjAwcHg7XG59Il19 */";

/***/ }),

/***/ 2249:
/*!******************************************************************************!*\
  !*** ./src/app/views/page-not-found/page-not-found.component.css?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 7121:
/*!****************************************************************************!*\
  !*** ./src/app/views/principal-msg/principal-msg.component.css?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "p{\n    margin-top: 18px;\n}\n.mandiv{\n    padding: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaW5jaXBhbC1tc2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJwcmluY2lwYWwtbXNnLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwe1xuICAgIG1hcmdpbi10b3A6IDE4cHg7XG59XG4ubWFuZGl2e1xuICAgIHBhZGRpbmc6IDhweDtcbn0iXX0= */";

/***/ }),

/***/ 9695:
/*!****************************************************************!*\
  !*** ./src/app/views/results/results.component.css?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXN1bHRzLmNvbXBvbmVudC5jc3MifQ== */";

/***/ }),

/***/ 696:
/*!**************************************************************!*\
  !*** ./src/app/views/slides/slides.component.css?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "form-control {\n    box-shadow: none;\n    font-weight: normal;\n    font-size: 13px;\n}\n.form-control:focus {\n    border-color: #33cabb;\n    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);\n}\n.navbar-header.col {\n    padding: 0 !important;\n}\nhtml, body {\n    height: auto;\n    /* padding-bottom:5%; */\n}\n.logedButton{\n    background-color: #4CAF50;\n    border: none;\n    color: white;\n    padding: 20px;\n    height: 4px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n    margin: 4px 2px;\n    border-radius: 2px;\n}\n.navbar {\n    background: #213d77;\n    color: white;\n    padding-left: 16px;\n    padding-right: 16px;\n    border-bottom: 1px solid #dfe3e8;\n    border-radius: 0;\n}\n.nav-link img {\n    border-radius: 50%;\n    width: 36px;\n    height: 36px;\n    margin: -8px 0;\n    float: left;\n    margin-right: 10px;\n}\n.navbar .navbar-brand, .navbar .navbar-brand:hover, .navbar .navbar-brand:focus {\n    padding-left: 0;\n    font-size: 20px;\n    padding-right: 50px;\n}\n.navbar .navbar-brand b {\n    font-weight: bold;\n    color: #33cabb;\n}\n.navbar .form-inline {\n    display: inline-block;\n}\n.navbar .nav li {\n    position: relative;\n}\n.navbar .nav li a {\n    /* color: #888; */\n    color: white;\n    font-size: 1.0rem;\n}\n.navbar .nav li :hover {\n    /* color: #888; */\n    /* color: rgb(180, 5, 5); */\n    font-size: 1.1rem;\n}\n.search-box {\n    position: relative;\n}\n.search-box input {\n    padding-right: 35px;\n    border-color: #dfe3e8;\n    border-radius: 4px !important;\n    box-shadow: none\n}\n.search-box .input-group-addon {\n    min-width: 35px;\n    border: none;\n    background: transparent;\n    position: absolute;\n    right: 0;\n    z-index: 9;\n    padding: 7px;\n    /* height: 100%; */\n}\n.search-box i {\n    color: #a0a5b1;\n    font-size: 19px;\n}\n.navbar .nav .btn-primary, .navbar .nav .btn-primary:active {\n    color: white;\n    /* background: darkgreen; */\n    padding-top: 8px;\n    padding-bottom: 4px;\n    vertical-align: middle;\n    border: none;\n    }\n.navbar .nav .btn-primary:hover, .navbar .nav .btn-primary:focus {\n    color: #fff;\n    outline: none;\n}\n.navbar .navbar-right li:first-child a {\n    padding-right: 30px;\n}\n.navbar .nav-item i {\n    font-size: 18px;\n}\n.navbar .dropdown-item i {\n    font-size: 16px;\n    min-width: 22px;\n    /* background-color: none; */\n}\n/* .dropdown-item.active, .dropdown-item:active{\n    background-color: none;\n} */\n.navbar .dropdown-item:active{\n    background-color: #21d192 !important;\n    /* color: red; */\n    color:none;\n}\n.navbar ul.nav li.active a, .navbar ul.nav li.open>a {\n    background: transparent !important;\n}\n.navbar .nav .get-started-btn {\n    min-width: 120px;\n    margin-top: 8px;\n    margin-bottom: 8px;\n}\n.navbar ul.nav li.open>a.get-started-btn {\n    /* color: #fff; */\n    background: #31bfb1 !important;\n}\n.navbar .dropdown-menu {\n    border-radius: 1px;\n    border-color: #e5e5e5;\n    box-shadow: 0 2px 8px rgba(0, 0, 0, .05);\n    background-color: #213d77;\n}\n.navbar .nav .dropdown-menu li {\n    color: #999;\n    font-weight: normal;\n}\n.navbar .nav .dropdown-menu li a, .navbar .nav .dropdown-menu li a:hover, .navbar .nav .dropdown-menu li a:focus {\n    padding: 8px 20px;\n    font-size: medium;\n    background-color: none;\n    line-height: normal;\n}\n.navbar .navbar-form {\n    border: none;\n}\n.navbar .dropdown-menu.form-wrapper {\n    width: 280px;\n    padding: 20px;\n    left: auto;\n    right: 0;\n    font-size: 14px;\n}\n.navbar .dropdown-menu.form-wrapper a {\n    /* color: #33cabb; */\n    padding: 0 !important;\n}\n.navbar .dropdown-menu.form-wrapper a:hover {\n    text-decoration: underline;\n}\n.navbar .form-wrapper .hint-text {\n    text-align: center;\n    margin-bottom: 15px;\n    font-size: 13px;\n}\n.navbar .form-wrapper .social-btn .btn, .navbar .form-wrapper .social-btn .btn:hover {\n    color: #fff;\n    margin: 0;\n    padding: 0 !important;\n    font-size: 13px;\n    border: none;\n    transition: all 0.4s;\n    text-align: center;\n    line-height: 34px;\n    width: 47%;\n    text-decoration: none;\n}\n.navbar .social-btn .btn-primary {\n    background: #507cc0;\n}\n.navbar .social-btn .btn-primary:hover {\n    background: #4676bd;\n}\n.navbar .social-btn .btn-info {\n    background: #64ccf1;\n}\n.navbar .social-btn .btn-info:hover {\n    background: #4ec7ef;\n}\n.navbar .social-btn .btn i {\n    margin-right: 5px;\n    font-size: 16px;\n    position: relative;\n    top: 2px;\n}\n.navbar .form-wrapper .form-footer {\n    text-align: center;\n    padding-top: 10px;\n    font-size: 13px;\n}\n.navbar .form-wrapper .form-footer a:hover {\n    text-decoration: underline;\n}\n.navbar .form-wrapper .checkbox-inline input {\n    margin-top: 3px;\n}\n.or-seperator {\n    margin-top: 32px;\n    text-align: center;\n    border-top: 1px solid #e0e0e0;\n}\n.or-seperator b {\n    color: #666;\n    padding: 0 8px;\n    width: 30px;\n    height: 30px;\n    font-size: 13px;\n    text-align: center;\n    line-height: 26px;\n    background: #fff;\n    display: inline-block;\n    border: 1px solid #e0e0e0;\n    border-radius: 50%;\n    position: relative;\n    top: -15px;\n    z-index: 1;\n}\n.navbar .checkbox-inline {\n    font-size: 13px;\n}\n.navbar .navbar-right .dropdown-toggle::after {\n    display: none;\n}\n.w3-modal.btn:hover {\n    background-color: none;\n}\n.w3-hover-teal:hover {\n    background-color: red;\n}\n.w3-modal-content {\n    margin: -35px 861px;\n    width: 400px;\n    background-color: none;\n}\n@media (min-width: 1080px) {\n    .form-inline .input-group {\n        width: 300px;\n        margin-left: 30px;\n    }\n    .imgDiv{\n        height:300px;\n        max-width: 100%;\n        max-height: 100%;\n        background-color: yellow;\n              \n       \n    }\n}\n@media (max-width: 768px) {\n    .navbar .dropdown-menu.form-wrapper {\n        width: 100%;\n        padding: 10px 15px;\n        background: transparent;\n        border: none;\n    }\n    .navbar .form-inline {\n        display: block;\n    }\n    .navbar .input-group {\n        width: 100%;\n    }\n    .navbar .nav .btn-primary, .navbar .nav .btn-primary:active {\n        display: block;\n    }\n    .imgDiv{\n        height:250px;\n        max-width: 100%;\n        max-height: 100%;\n        background-color: red;\n       \n    }\n}\n@media screen and (max-width: 480px) {\n    .imgDiv{\n        height:130px;\n        max-width: 100%;\n        max-height: 100%;\n        background-color: white;\n    }\n  }\n.mainDiv{\n    margin-bottom: 10px;\n  }\n.impLnks{\n    border:2px solid rgb(153, 51, 76);\n    padding: 0%;\n    margin-top: 15px;\n}\nmarquee{\n    background-color: yellow;\n    \n}\n/* =============>header fix */\n/* .fixed-header {\n  position: fixed;\n  z-index:999;\n  height: auto;\n  width:100%;\n  margin-top:none;\n}\n\n#frugalmap {\n  height: 300px;\n  width: 100%;\n  top: 50px;\n  position: relative;\n}\n\n.mat-elevation-z5 {\n  position: relative;\n}\n\n.sticky {\n  position: fixed;\n  /* top: 50px; \n} \n*/\n\n/*# sourceMappingURL=data:application/json;base64,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QzNCO0VBQ0Y7QUFDQTtJQUNFLG1CQUFtQjtFQUNyQjtBQUNGO0lBQ0ksaUNBQWlDO0lBQ2pDLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLHdCQUF3Qjs7QUFFNUI7QUFFQSw2QkFBNkI7QUFDN0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBdUJDIiwiZmlsZSI6InNsaWRlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybS1jb250cm9sIHtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxM3B4O1xufVxuLmZvcm0tY29udHJvbDpmb2N1cyB7XG4gICAgYm9yZGVyLWNvbG9yOiAjMzNjYWJiO1xuICAgIGJveC1zaGFkb3c6IDAgMCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4ubmF2YmFyLWhlYWRlci5jb2wge1xuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cbmh0bWwsIGJvZHkge1xuICAgIGhlaWdodDogYXV0bztcbiAgICAvKiBwYWRkaW5nLWJvdHRvbTo1JTsgKi9cbn1cbi5sb2dlZEJ1dHRvbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBoZWlnaHQ6IDRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luOiA0cHggMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cbi5uYXZiYXIge1xuICAgIGJhY2tncm91bmQ6ICMyMTNkNzc7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGZlM2U4O1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbi5uYXYtbGluayBpbWcge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB3aWR0aDogMzZweDtcbiAgICBoZWlnaHQ6IDM2cHg7XG4gICAgbWFyZ2luOiAtOHB4IDA7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4ubmF2YmFyIC5uYXZiYXItYnJhbmQsIC5uYXZiYXIgLm5hdmJhci1icmFuZDpob3ZlciwgLm5hdmJhciAubmF2YmFyLWJyYW5kOmZvY3VzIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG59XG5cbi5uYXZiYXIgLm5hdmJhci1icmFuZCBiIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogIzMzY2FiYjtcbn1cblxuLm5hdmJhciAuZm9ybS1pbmxpbmUge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLm5hdmJhciAubmF2IGxpIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5uYXZiYXIgLm5hdiBsaSBhIHtcbiAgICAvKiBjb2xvcjogIzg4ODsgKi9cbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxLjByZW07XG59XG5cbi5uYXZiYXIgLm5hdiBsaSA6aG92ZXIge1xuICAgIC8qIGNvbG9yOiAjODg4OyAqL1xuICAgIC8qIGNvbG9yOiByZ2IoMTgwLCA1LCA1KTsgKi9cbiAgICBmb250LXNpemU6IDEuMXJlbTtcbn1cblxuLnNlYXJjaC1ib3gge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnNlYXJjaC1ib3ggaW5wdXQge1xuICAgIHBhZGRpbmctcmlnaHQ6IDM1cHg7XG4gICAgYm9yZGVyLWNvbG9yOiAjZGZlM2U4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweCAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IG5vbmVcbn1cblxuLnNlYXJjaC1ib3ggLmlucHV0LWdyb3VwLWFkZG9uIHtcbiAgICBtaW4td2lkdGg6IDM1cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB6LWluZGV4OiA5O1xuICAgIHBhZGRpbmc6IDdweDtcbiAgICAvKiBoZWlnaHQ6IDEwMCU7ICovXG59XG5cbi5zZWFyY2gtYm94IGkge1xuICAgIGNvbG9yOiAjYTBhNWIxO1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbn1cblxuLm5hdmJhciAubmF2IC5idG4tcHJpbWFyeSwgLm5hdmJhciAubmF2IC5idG4tcHJpbWFyeTphY3RpdmUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAvKiBiYWNrZ3JvdW5kOiBkYXJrZ3JlZW47ICovXG4gICAgcGFkZGluZy10b3A6IDhweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIH1cblxuLm5hdmJhciAubmF2IC5idG4tcHJpbWFyeTpob3ZlciwgLm5hdmJhciAubmF2IC5idG4tcHJpbWFyeTpmb2N1cyB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuLm5hdmJhciAubmF2YmFyLXJpZ2h0IGxpOmZpcnN0LWNoaWxkIGEge1xuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG59XG5cbi5uYXZiYXIgLm5hdi1pdGVtIGkge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLm5hdmJhciAuZHJvcGRvd24taXRlbSBpIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWluLXdpZHRoOiAyMnB4O1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IG5vbmU7ICovXG59XG4vKiAuZHJvcGRvd24taXRlbS5hY3RpdmUsIC5kcm9wZG93bi1pdGVtOmFjdGl2ZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xufSAqL1xuLm5hdmJhciAuZHJvcGRvd24taXRlbTphY3RpdmV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxZDE5MiAhaW1wb3J0YW50O1xuICAgIC8qIGNvbG9yOiByZWQ7ICovXG4gICAgY29sb3I6bm9uZTtcbn1cbi5uYXZiYXIgdWwubmF2IGxpLmFjdGl2ZSBhLCAubmF2YmFyIHVsLm5hdiBsaS5vcGVuPmEge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbi5uYXZiYXIgLm5hdiAuZ2V0LXN0YXJ0ZWQtYnRuIHtcbiAgICBtaW4td2lkdGg6IDEyMHB4O1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbi5uYXZiYXIgdWwubmF2IGxpLm9wZW4+YS5nZXQtc3RhcnRlZC1idG4ge1xuICAgIC8qIGNvbG9yOiAjZmZmOyAqL1xuICAgIGJhY2tncm91bmQ6ICMzMWJmYjEgIWltcG9ydGFudDtcbn1cblxuLm5hdmJhciAuZHJvcGRvd24tbWVudSB7XG4gICAgYm9yZGVyLXJhZGl1czogMXB4O1xuICAgIGJvcmRlci1jb2xvcjogI2U1ZTVlNTtcbiAgICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAuMDUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTNkNzc7XG59XG5cbi5uYXZiYXIgLm5hdiAuZHJvcGRvd24tbWVudSBsaSB7XG4gICAgY29sb3I6ICM5OTk7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLm5hdmJhciAubmF2IC5kcm9wZG93bi1tZW51IGxpIGEsIC5uYXZiYXIgLm5hdiAuZHJvcGRvd24tbWVudSBsaSBhOmhvdmVyLCAubmF2YmFyIC5uYXYgLmRyb3Bkb3duLW1lbnUgbGkgYTpmb2N1cyB7XG4gICAgcGFkZGluZzogOHB4IDIwcHg7XG4gICAgZm9udC1zaXplOiBtZWRpdW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xufVxuXG4ubmF2YmFyIC5uYXZiYXItZm9ybSB7XG4gICAgYm9yZGVyOiBub25lO1xufVxuXG4ubmF2YmFyIC5kcm9wZG93bi1tZW51LmZvcm0td3JhcHBlciB7XG4gICAgd2lkdGg6IDI4MHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgbGVmdDogYXV0bztcbiAgICByaWdodDogMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5uYXZiYXIgLmRyb3Bkb3duLW1lbnUuZm9ybS13cmFwcGVyIGEge1xuICAgIC8qIGNvbG9yOiAjMzNjYWJiOyAqL1xuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxuLm5hdmJhciAuZHJvcGRvd24tbWVudS5mb3JtLXdyYXBwZXIgYTpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5uYXZiYXIgLmZvcm0td3JhcHBlciAuaGludC10ZXh0IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5uYXZiYXIgLmZvcm0td3JhcHBlciAuc29jaWFsLWJ0biAuYnRuLCAubmF2YmFyIC5mb3JtLXdyYXBwZXIgLnNvY2lhbC1idG4gLmJ0bjpob3ZlciB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogMzRweDtcbiAgICB3aWR0aDogNDclO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLm5hdmJhciAuc29jaWFsLWJ0biAuYnRuLXByaW1hcnkge1xuICAgIGJhY2tncm91bmQ6ICM1MDdjYzA7XG59XG5cbi5uYXZiYXIgLnNvY2lhbC1idG4gLmJ0bi1wcmltYXJ5OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjNDY3NmJkO1xufVxuXG4ubmF2YmFyIC5zb2NpYWwtYnRuIC5idG4taW5mbyB7XG4gICAgYmFja2dyb3VuZDogIzY0Y2NmMTtcbn1cblxuLm5hdmJhciAuc29jaWFsLWJ0biAuYnRuLWluZm86aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICM0ZWM3ZWY7XG59XG5cbi5uYXZiYXIgLnNvY2lhbC1idG4gLmJ0biBpIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMnB4O1xufVxuXG4ubmF2YmFyIC5mb3JtLXdyYXBwZXIgLmZvcm0tZm9vdGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4ubmF2YmFyIC5mb3JtLXdyYXBwZXIgLmZvcm0tZm9vdGVyIGE6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4ubmF2YmFyIC5mb3JtLXdyYXBwZXIgLmNoZWNrYm94LWlubGluZSBpbnB1dCB7XG4gICAgbWFyZ2luLXRvcDogM3B4O1xufVxuXG4ub3Itc2VwZXJhdG9yIHtcbiAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2UwZTBlMDtcbn1cblxuLm9yLXNlcGVyYXRvciBiIHtcbiAgICBjb2xvcjogIzY2NjtcbiAgICBwYWRkaW5nOiAwIDhweDtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogMjZweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtMTVweDtcbiAgICB6LWluZGV4OiAxO1xufVxuXG4ubmF2YmFyIC5jaGVja2JveC1pbmxpbmUge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLm5hdmJhciAubmF2YmFyLXJpZ2h0IC5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4udzMtbW9kYWwuYnRuOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xufVxuXG5cbi53My1ob3Zlci10ZWFsOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi53My1tb2RhbC1jb250ZW50IHtcbiAgICBtYXJnaW46IC0zNXB4IDg2MXB4O1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xufVxuXG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMDgwcHgpIHtcbiAgICAuZm9ybS1pbmxpbmUgLmlucHV0LWdyb3VwIHtcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgICB9XG4gICAgLmltZ0RpdntcbiAgICAgICAgaGVpZ2h0OjMwMHB4O1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbiAgICAgICAgICAgICAgXG4gICAgICAgXG4gICAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAubmF2YmFyIC5kcm9wZG93bi1tZW51LmZvcm0td3JhcHBlciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgfVxuICAgIC5uYXZiYXIgLmZvcm0taW5saW5lIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIC5uYXZiYXIgLmlucHV0LWdyb3VwIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIC5uYXZiYXIgLm5hdiAuYnRuLXByaW1hcnksIC5uYXZiYXIgLm5hdiAuYnRuLXByaW1hcnk6YWN0aXZlIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIC5pbWdEaXZ7XG4gICAgICAgIGhlaWdodDoyNTBweDtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgICAgXG4gICAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAuaW1nRGl2e1xuICAgICAgICBoZWlnaHQ6MTMwcHg7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgfVxuICB9XG4gIC5tYWluRGl2e1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbi5pbXBMbmtze1xuICAgIGJvcmRlcjoycHggc29saWQgcmdiKDE1MywgNTEsIDc2KTtcbiAgICBwYWRkaW5nOiAwJTtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xufVxubWFycXVlZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG4gICAgXG59XG5cbi8qID09PT09PT09PT09PT0+aGVhZGVyIGZpeCAqL1xuLyogLmZpeGVkLWhlYWRlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDo5OTk7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6MTAwJTtcbiAgbWFyZ2luLXRvcDpub25lO1xufVxuXG4jZnJ1Z2FsbWFwIHtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogNTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubWF0LWVsZXZhdGlvbi16NSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnN0aWNreSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgLyogdG9wOiA1MHB4OyBcbn0gXG4qL1xuIl19 */";

/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "<!DOCTYPE html>\n<html>\n\n<head>\n    <script type=\"text/javascript\">\n        // Prevent dropdown menu from closing when click inside the form\n        $(document).on(\"click\", \".navbar-right .dropdown-menu\", function (e) {\n            e.stopPropagation();\n        });\n    </script>\n</head>\n\n<body>\n    <div class=\"fixed-header\">\n        <nav class=\"navbar navbar-default navbar-expand-lg\">\n            <div class=\"navbar-header d-flex col\">\n                <a class=\"waviy navbar-brand\">\n                    <span style=\"--i:1\">M</span>\n                    <span style=\"--i:2\">V</span>\n                    <span style=\"--i:3\">V</span>\n                    <span style=\"--i:4\">P</span>\n                    <span style=\"--i:5\">I</span>\n\n                    <span style=\"--i:6\"></span>\n                    <span style=\"--i:7\">C</span>\n                    <span style=\"--i:8\">O</span>\n                    <span style=\"--i:9\">L</span>\n                    <span style=\"--i:10\">L</span>\n                    <span style=\"--i:11\">E</span>\n                    <span style=\"--i:12\">G</span>\n                    <span style=\"--i:13\">E</span>\n                </a>\n\n\n                <!-- <a class=\"navbar-brand\" routerLink=\"/home\">MVVPI<b>COLLEGE</b></a> -->\n                <button type=\"button\" data-target=\"#navbarCollapse\" data-toggle=\"collapse\"\n                    class=\"navbar-toggle navbar-toggler custom-toggler ml-auto\">\n                    <!-- <span class=\"navbar-toggler-icon\"></span> -->\n                    <span class=\"hambegr-container\"><img src=\"/assets/icons/icons8-menu.svg\" alt=\"hamberg-icon\"\n                            class=\"nav-hamberg-icon\"></span>\n                </button>\n            </div>\n\n            <div id=\"navbarCollapse\" class=\"collapse navbar-collapse justify-content-start\">\n                <ul class=\"nav navbar-nav\">\n                    <li class=\"nav-item\"><a routerLinkActive=\"active\" routerLink=\"/home\" class=\"nav-link\">HOME</a>\n                    </li>\n                    <li class=\"nav-item dropdown\">\n                        <a data-toggle=\"dropdown\" class=\"nav-link dropdown-toggle\" href=\"#\">ABOUT<b\n                                class=\"caret\"></b></a>\n                        <ul class=\"dropdown-menu\">\n                            <li><a routerLink=\"/about-college\" class=\"dropdown-item\">About College</a></li>\n                            <li><a class=\"dropdown-item\" routerLink=\"/about-staff\">About Staff </a></li>\n                        </ul>\n                    </li>\n                    <li class=\"nav-item\"><a routerLinkActive=\"active\" routerLink=\"/academics\"\n                            class=\"nav-link\">ACADEMICS</a>\n                    </li>\n                    <li class=\"nav-item\"><a routerLinkActive=\"active\" routerLink=\"/gallery\"\n                            class=\"nav-link\">ACTIVITIES</a>\n                    </li>\n                    <li class=\"nav-item\"><a routerLinkActive=\"active\" routerLink=\"/contact-us\" class=\"nav-link\">CONTACT\n                            US</a>\n                    </li>\n\n                    <li class=\"nav-item dropdown\" *ngIf=\"adminMenus === true\">\n                        <a data-toggle=\"dropdown\" class=\"nav-link dropdown-toggle\" href=\"\">MANAGE<b\n                                class=\"caret\"></b></a>\n                        <ul class=\"dropdown-menu\">\n                            <li><a routerLink=\"/admin/admission\" routerLinkActive=\"active\" class=\"dropdown-item\">New\n                                    Admission</a>\n                            </li>\n                            <li><a class=\"dropdown-item\" routerLink=\"/faculty\" routerLinkActive=\"active\">Faculty</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"nav-item dropdown\" *ngIf=\"adminMenus === true\">\n                        <a data-toggle=\"dropdown\" class=\"nav-link dropdown-toggle\" href=\"#\">REPORTS<b\n                                class=\"caret\"></b></a>\n                        <ul class=\"dropdown-menu\">\n                            <li><a routerLink=\"/admin/report\" class=\"dropdown-item\">Student Report</a></li>\n                            <li><a class=\"dropdown-item\" routerLink=\"/admin/fcltreport\">Faculty Report</a></li>\n                        </ul>\n                    </li>\n                    <li class=\"nav-item dropdown\" *ngIf=\"adminMenus === true\">\n                        <a data-toggle=\"dropdown\" class=\"nav-link dropdown-toggle\" href=\"\">ADMISSION & EXAMS<b\n                                class=\"caret\"></b></a>\n                        <ul class=\"dropdown-menu\">\n                            <li><a routerLink=\"/admin/admission\" routerLinkActive=\"active\"\n                                    class=\"dropdown-item\">Admission</a>\n                            </li>\n                            <li><a class=\"dropdown-item\">Exams</a></li>\n                        </ul>\n                    </li>\n\n                </ul>\n                <!-- <form class=\"navbar-form form-inline\">\n                    <div class=\"input-group search-box\">\n                        <input type=\"text\" id=\"search\" class=\"form-control\" placeholder=\"Search here...\"> </div>\n                </form> -->\n\n                <ul class=\"nav navbar-nav navbar-right ml-auto\" *ngIf=\"HideLoginBtn\">\n                    <li class=\"nav-item\">\n                        <button type=\"button\" class=\"btn btn-primary\" routerLink=\"/admin/login\"\n                            data-target=\"#exampleModalLong\">\n                            LOGIN\n                        </button>\n                    </li>\n                </ul>\n\n                <ul class=\"nav navbar-nav navbar-right ml-auto\">\n                </ul>\n                <ul class=\"nav navbar-nav navbar-right ml-auto\" *ngIf=\"loginProfile\">\n                    <span style=\"color: white; color: white; margin-top: 15px; font-size: 12px;\">\n                        {{currentDateTime | date: \"HH:mm:ss\"}}\n                    </span>\n                    <li class=\"nav-item\"> <button type=\"button\" class=\"logedButton\" data-toggle=\"modal\"\n                            data-target=\"#UserDetails\">\n                            <!-- <img style=\"border-radius: 3rem;height: 40px;width: auto;\" src=\"{{ user?.photoUrl }}\"> -->\n                        </button>\n                    </li>\n\n                </ul>\n                <ul class=\"nav navbar-nav navbar-right ml-auto\">\n                </ul>\n            </div>\n        </nav>\n    </div>\n    <div>\n    </div>\n\n\n\n    <!-- Login Details Model------------------------------------------ -->\n\n    <!-- Modal -->\n    <div class=\"modal fade\" id=\"UserDetails\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\"\n        aria-hidden=\"true\">\n        <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    Last Login : {{currentDateTime | date: \"HH:mm:ss\"}}\n                    <img style=\"border-radius: 3rem;height: 40px;width: auto;\" src={{logedinUserDetails?.photoUrl}}>\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n\n                </div>\n                <div class=\"modal-body\">\n                    <!-- <img style=\"border-radius: 3rem;height: 40px;width: auto;\" src=\"{{ user?.photoUrl }}\">\n          <h4 class=\"modal-title\" id=\"exampleModalLongTitle\">{{user?.email}}</h4> -->\n                    <div class=\"row\">\n                        <div class=\"col-sm-6 form-group\">\n                            <strong class=\"modal-title\" style=\"float: right;\" id=\"exampleModalLongTitle\">User\n                                Name</strong>\n                        </div>\n                        <div class=\"col-sm-6 form-group\">\n                            <h4 class=\"modal-title\" id=\"exampleModalLongTitle\">{{logedinUserDetails?.userEmail}}</h4>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" (click)=\"logout()\" data-dismiss=\"modal\" class=\"btn btn-primary\">Log\n                        out</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</body>\n\n</html>\n\n<router-outlet></router-outlet>\n\n<div class=\"footer-container\">\n    <div class=\"footer-content\">\n        <app-footer></app-footer>\n    </div>\n</div>\n";

/***/ }),

/***/ 6471:
/*!*****************************************************************************!*\
  !*** ./src/app/views/about-college/about-college.component.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"container\">\r\n    <div class=\"row line contentHeader\">\r\n        <h1 class=\"lineUpWhite\">About College! College History</h1>\r\n    </div>\r\n    <div class=\"row container\">\r\n        <div class=\"col-sm-6\">\r\n            <p> Maharshi Valmiki Vidya Peeth Inter College is Co-Education School, BhainsaTiker Sant Kabir Nagar. The\r\n                year of the establishment of the Maharshi Valmiki Vidya Peeth Inter College is 2009, was the realization\r\n                of a dream by selfless and dedicated educationist and social worker, Mr. Amar Ray\r\n\r\n                There was no College in the thickly populated south-north-east part of Hainsar Bazar Sant Kabir Nagar\r\n                stretching from Dhanghat to Sikariganj. Students of this area, especially girls and junior class\r\n                students, faced difficulties in getting admission to school because of long-distance, which were mostly\r\n                situated in the south-north-east part of the Haisar Area.\r\n\r\n                The college aims at equipping students with a moral and intellectual outlook and inculcating in them the\r\n                highest principles of unity and national integration.\r\n\r\n                The college attaches great importance to the dissemination of learning and an all-round development of\r\n                the personality of its students. All efforts are made to create a congenial atmosphere especially for\r\n                female students and every possible facility for proper education is provided to them .\r\n\r\n                The college is situated at left side of Duhiya Chauraha Ram Janki Marg. Public transport Auto and Taxi\r\n                facilities are also available to and from all parts village connected to the Ram Janki Marg .\r\n\r\n                The College is affiliated to the State Board Utter Pradesh Allahabad university for teaching courses\r\n                leading to Matric and InterMediate Examinations. The College is also recognized for the registration of\r\n                students for ITI in all subjects.\r\n\r\n                The College has a well-qualified, experienced, and committed teaching faculty.</p>\r\n        </div>\r\n        <div class=\"col-sm-6\">\r\n            details\r\n        </div>\r\n    </div>\r\n</div>";

/***/ }),

/***/ 3466:
/*!*************************************************************************!*\
  !*** ./src/app/views/about-staff/about-staff.component.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-6\">\r\n            <h3></h3>\r\n            <h3></h3>\r\n            <h3></h3>\r\n            <h3></h3>\r\n            <div class=\"faculty-list\">\r\n                <button data-toggle=\"collapse\" class=\"buttonmargin btn btn-info\" data-target=\"#inter\">InterMediate Faculty</button>\r\n                <div id=\"inter\" data-target=\"#F1\" class=\"collapse\">\r\n                    <button class=\"btn btn-outline-info\" data-toggle=\"collapse\" data-target=\"#I1\">Faculty1</button>\r\n                    <button class=\"btn btn-outline-info\" data-toggle=\"collapse\" data-target=\"#I2\">Faculty2</button>\r\n                    <button  class=\"btn btn-outline-info\" data-toggle=\"collapse\" data-target=\"#I3\">Faculty3</button>\r\n                    <button class=\"btn btn-outline-info\" data-toggle=\"collapse\" data-target=\"#I4\">Faculty4</button>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"faculty-list\">\r\n                <button data-toggle=\"collapse\" class=\"buttonmargin btn btn-success\" data-target=\"#matric\">Matric Faculty</button>\r\n                <div id=\"matric\" data-target=\"#F2\" class=\"collapse\">\r\n                    <button class=\"btn btn-outline-success\" data-toggle=\"collapse\" data-target=\"#m1\">Faculty1</button>\r\n                    <button class=\"btn btn-outline-success\" data-toggle=\"collapse\" data-target=\"#m2\">Faculty2</button>\r\n                    <button  class=\"btn btn-outline-success\" data-toggle=\"collapse\" data-target=\"#m3\">Faculty3</button>\r\n                    <button class=\"btn btn-outline-success\" data-toggle=\"collapse\" data-target=\"#m4\">Faculty4</button>\r\n                \r\n                </div>\r\n            </div>\r\n            <div class=\"faculty-list\">\r\n                <button data-toggle=\"collapse\" class=\"buttonmargin btn btn-secondary\" data-target=\"#senior\">Senior & Junior Class Faculty</button>\r\n                <div id=\"senior\" data-target=\"#F1\" class=\"collapse\">\r\n                    <button class=\"btn btn-outline-secondary\" data-toggle=\"collapse\" data-target=\"#F3\">Faculty1</button>\r\n                    <button class=\"btn btn-outline-secondary\" data-toggle=\"collapse\" data-target=\"#F3\">Faculty2</button>\r\n                    <button  class=\"btn btn-outline-secondary\" data-toggle=\"collapse\" data-target=\"#F3\">Faculty3</button>\r\n                    <button class=\"btn btn-outline-secondary\" data-toggle=\"collapse\" data-target=\"#F3\">Faculty4</button>\r\n                \r\n                </div>\r\n            </div>\r\n            <div class=\"faculty-list\">\r\n                <button data-toggle=\"collapse\" class=\"buttonmargin btn btn-primary\" data-target=\"#iti\">ITI Faculty</button>\r\n                <div id=\"iti\" data-target=\"#F1\" class=\"collapse\">\r\n                    <button class=\"btn btn-outline-info\" data-toggle=\"collapse\" data-target=\"#F1\">Faculty1</button>\r\n                    <button class=\"btn btn-outline-info\" data-toggle=\"collapse\" data-target=\"#F1\">Faculty2</button>\r\n                    <button  class=\"btn btn-outline-info\" data-toggle=\"collapse\" data-target=\"#F1\">Faculty3</button>\r\n                    <button class=\"btn btn-outline-info\" data-toggle=\"collapse\" data-target=\"#F1\">Faculty4</button>\r\n                \r\n                </div>\r\n            </div>\r\n          \r\n        </div>\r\n        <div class=\"details col-sm-6\">\r\n            <div id=\"I1\" class=\"collapse\">\r\n                Hello This is Intermediate F1\r\n            </div>\r\n            <div id=\"I2\" class=\"collapse\">\r\n                Hello This is Intermediate F2\r\n            </div>\r\n            <div id=\"I3\" class=\"collapse\">\r\n                Hello This is Intermediate F3\r\n            </div>\r\n            <div id=\"I4\" class=\"collapse\">\r\n                Hello This is Intermediate F4\r\n            </div>\r\n            <div id=\"m1\" class=\"collapse\">\r\n                Hello This is matric\r\n            </div>\r\n            <div id=\"m2\" class=\"collapse\">\r\n                Hello This is demo\r\n            </div>\r\n            <div id=\"m3\" class=\"collapse\">\r\n                Hello This is Intermediate\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n</div>";

/***/ }),

/***/ 1518:
/*!*********************************************************************************!*\
  !*** ./src/app/views/admin-panel/stdreport/stdreport.component.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"container\">\n    <h4>Student Report</h4>\n    <hr>\n    <div class=\"row\">\n        <div id=\"fileds\" class=\"col-sm-3\">\n            <label for=\"EMT_Id\" class=\"col-sm-8 col-form-label\">Fiter By Id</label>\n            <div class=\"col-sm-12\">\n                <input formControlName=\"std_id\" type=\"text\" (keyup)='search($event.target.value)' class=\"form-control\"\n                    placeholder=\"Enter Student Id\" name=\"std_id\">\n            </div>\n            <!-- {{std_id |json}} -->\n        </div>\n        <div id=\"fileds\" class=\"col-sm-3\">\n            <label for=\"EMT_Id\" class=\"col-sm-8 col-form-label\">Filter By Name</label>\n            <div class=\"col-sm-12\">\n                <input formControlName=\"std_name\" type=\"text\" class=\"form-control\" placeholder=\"Enter Student Name\"\n                    name=\"std_email\">\n            </div>\n        </div>\n        <div id=\"fileds\" class=\"col-sm-6 form-group\">\n            <label for=\"From_date\" class=\"col-sm-12 col-form-label\">Start Date</label>\n            <div class=\"col-sm-12\">\n                <input  id=\"txtDate\" formControlName=\"startDate\" type=\"date\"  class=\"form-control\" name=\"std_dob\"\n                    placeholder=\" Start Date\">\n                <!-- <span class=\"text-danger\" *ngIf=\"(dob.touched || admissionForm.submitted) && dob.errors?.required\">\n                    Date of birth is required\n                </span> -->\n            </div>\n            {{startDate}}\n        </div>\n        <div id=\"fileds\" class=\"col-sm-6 form-group\">\n            <label for=\"From_date\" class=\"col-sm-12 col-form-label\">*End Date</label>\n            <div class=\"col-sm-12\">\n                <input formControlName=\"endDate\" type=\"date\" id=\"select_date\" class=\"form-control\" name=\"std_dob\"\n                    placeholder=\" End Date\" >\n                <!-- <span class=\"text-danger\" *ngIf=\"(dob.touched || admissionForm.submitted) && dob.errors?.required\">\n                    Date of birth is required\n                </span> -->\n            </div>\n            {{endDate}}\n        </div>\n        \n        <div class=\"btnColl col-sm-2 form-control\">\n            <button class=\"btn btn-primary\" (click)=\"filter($event)\">Filter</button>\n        </div>\n        <div class=\"btnColl col-sm-2 form-control\">\n            <button class=\"btn btn-primary\">Export</button>\n        </div>\n    </div>\n    <hr>\n    <div class=\"row\">\n        <div id=\"fileds\" class=\"col-sm-10\">\n            <p style=\"float:left\"> Total Result: {{numerOfResult}}</p>\n        </div>\n        <div id=\"newAddbutton\" class=\"col-sm-2\">\n            <button (click)=\"movetoAdmission()\" class=\"btn btn-primary\">New Admission</button>\n        </div>\n    </div>\n\n    <!-- data row -->\n    <div class=\"dataRow table-responsive\">\n        <table class=\"table\" *ngIf=\"Data\">\n            <thead>\n                <tr>\n                    <th>Student ID</th>\n                    <th>Actions</th>\n                    <th>Student Name</th>\n                    <th>Father's Name</th>\n                    <th>Mother's Name</th>\n                    <th>DOB</th>\n                    <th>Address</th>\n                    <th>Mobile</th>\n                    <th>Department</th>\n                    <th>Email</th>\n                   \n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let val of Data\">\n\n                    <td>{{val._id}}</td>\n                    <td><i class=\"fa fa-edit\" style=\"font-size:25px;color:rgb(35, 23, 196);cursor: pointer;\"> </i>\n                        <i class=\"fa fa-trash-o\" (click)=\"delete(val)\"\n                            style=\"font-size:25px;color:rgb(252, 55, 55);cursor: pointer; margin-left: 3px;\">\n                        </i>\n                    </td>\n                    <td>{{val.std_name}}</td>\n                    <td>{{val.std_father}}</td>\n                    <td>{{val.std_mother}}</td>\n                    <td>{{val.std_dob}}</td>\n                    <td>{{val.std_address}}</td>\n                    <td>{{val.std_mobile}}</td>\n                    <td>{{val.std_department}}</td>\n                    <td>{{val.std_email}}</td>\n                    \n                </tr>\n            </tbody>\n\n        </table>\n        <!-- Pagination -->\n    </div>\n    <div class=\"paginate text-right\">\n        <!-- <pagination-controls (pageChange)=\"p = $event\"></pagination-controls> -->\n    </div>\n</div>";

/***/ }),

/***/ 2562:
/*!***********************************************************************!*\
  !*** ./src/app/views/contact-us/contact-us.component.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"container\">\n    <form [formGroup]=\"questionForm\">\n        <div class=\"row line questionFormHeader\">\n            <h1 class=\"lineUpWhite\">Contact Us</h1>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-sm-4\">\n                <img class=\"d-block w-100 h-100\" src=\"/assets/images/contact-us.jpg\" alt=\"contact-us\">\n            </div>\n            <div class=\"col-sm-8\">\n                <img class=\"d-block w-100 h-100\" src=\"/assets/images/map.jpg\" alt=\"contact-us\">\n            </div>\n        </div>\n        <br>\n        <hr>\n        <br>\n        <div class=\"row line questionFormHeader\">\n            <h2 class=\"lineUpWhite\"> Questions? Send us a message!</h2>\n        </div>\n        <div class=\"row questionFormContaner\">\n            <div class=\"col-sm-6 form-group\">\n                <div class=\"col-sm-12\">\n                    <label for=\"name\" class=\"col-sm- col-form-label\"></label>\n                    <input type=\"text\" formControlName=\"name\" class=\"form-control\" name=\"name\" placeholder=\"Name\"\n                        required>\n                </div>\n                <div class=\"col-sm-12\">\n                    <label for=\"email\" class=\"col-sm- col-form-label\"></label>\n                    <input type=\"email\" formControlName=\"email\" class=\"form-control\" name=\"email\" placeholder=\"Email\"\n                        required>\n                </div>\n                <div class=\"col-sm-12\">\n                    <label for=\"subject\" class=\"col-sm- col-form-label\"></label>\n                    <input type=\"text\" formControlName=\"subject\" class=\"form-control\" name=\"subject\"\n                        placeholder=\"Subject\" required>\n                </div>\n                <div class=\"col-sm-12\">\n                    <label for=\"mobile_numer\" class=\"col-sm- col-form-label\"></label>\n                    <input type=\"text\" class=\"form-control\" formControlName=\"mobile\" name=\"mobile_numer\"\n                        placeholder=\"Mobile Numer\" required>\n                </div>\n                <div class=\"col-sm-2 signup form-group onWeb\">\n                    <label for=\"mobile_numer\" class=\"col-sm-12 col-form-label\"></label>\n                    <button class=\"btn btn-primary\" (click)=\"onSubmit()\">Submit</button>\n                </div>\n\n            </div>\n\n            <div class=\"col-sm-6 form-group\">\n                <div class=\"col-sm-12\">\n                    <label for=\"Message\" class=\"col-sm- col-form-label\"></label>\n                    <textarea class=\"form-control\" formControlName=\"message\" name=\"Message\" id=\"\" cols=\"20\" rows=\"10\"\n                        placeholder=\"Message\"></textarea>\n                </div>\n                <div class=\"col-sm-2 signup form-group onMobile\">\n                    <label for=\"mobile_numer\" class=\"col-sm-12 col-form-label\"></label>\n                    <button class=\"btn btn-primary\" (click)=\"onSubmit()\">Submit</button>\n                </div>\n            </div>\n        </div>\n    </form>\n\n    <br>\n</div>";

/***/ }),

/***/ 3102:
/*!***************************************************************************!*\
  !*** ./src/app/views/dynamic-page/dynamic-page.component.html?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"row container\">\n    <form method=\"post\" [formGroup]=\"dynamicForm\" class=\"section-card\">\n        <div formArrayName=\"fullname\" *ngFor=\"let item of dynamicForm.get('fullname').controls; let i = index\"\n        [formGroupName]=\"i\">\n            <div class=\"col-sm-12 form-group\">\n                <label for=\"std_name\" class=\"col-sm-8 col-form-label\">Student Name</label>\n                <div class=\"col-sm-12\">\n                    <input type=\"text\" class=\"form-control\"  name=\"std_name\"\n                        placeholder=\"Enter the full name\" required>\n                </div>\n            </div>\n            <div class=\"col-sm-12 form-group\">\n                <label for=\"std_name\" class=\"col-sm-8 col-form-label\">Student Name</label>\n                <div class=\"col-sm-12\">\n                    <input type=\"text\" class=\"form-control\"  name=\"std_name\"\n                        placeholder=\"Enter the full name\" required>\n                    \n                </div>\n            </div>\n            <div class=\"col-sm-12\">\n                <button class=\"btn btn-primary\" (click)=\"addMore()\">Add More</button>\n            </div>\n        </div>\n        \n    </form>\n\n\n</div>";

/***/ }),

/***/ 6030:
/*!*************************************************************!*\
  !*** ./src/app/views/exams/exams.component.html?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "<p>Work in progess...</p>";

/***/ }),

/***/ 4248:
/*!*****************************************************************!*\
  !*** ./src/app/views/faculty/faculty.component.html?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"container\">\n    <h4>Add Faculty</h4>\n    <!-- <hr style=\"border-top: 1.5px solid #eee;\"> -->\n\n    <hr style=\"border-top: 1.5px solid #eee; width:98%;\">\n\n    <!-- first row -->\n    <form  method=\"post\" [formGroup]!=\"facultyForm\">\n        <!-- {{admissionForm.value | json}} -->\n        <div *ngIf=\"successMsg\" class=\"alert alert-success\">\n            <!-- <strong>{{msg}}</strong> Data Successfuly saved..! -->\n        </div>\n        <div *ngIf=\"errorMsg\" class=\"alert alert-danger\">\n            <!-- <strong>Failed.! </strong> {{msg}} -->\n          </div>\n        <div class=\"row\">\n            <div id=\"fileds\" class=\"col-sm-6 form-group\">\n                <label for=\"std_name\" class=\"col-sm-8 col-form-label\">*Faculty Name</label>\n                <div class=\"col-sm-12\">\n                    <input formControlName=\"faName\" type=\"text\" class=\"form-control\"  name=\"std_name\"\n                        placeholder=\"Enter the full name\"  required>\n                    <!-- <span class=\"text-danger\"\n                        *ngIf=\"(name.touched || admissionForm.submitted) && name.errors?.required\">\n                        Name is required\n                    </span> -->\n                </div>\n            </div>\n            <div id=\"fileds\" class=\"col-sm-6 form-group\">\n                <label for=\"Fathers Name\" class=\"col-sm-8 col-form-label\">*Father's Name</label>\n                <div class=\"col-sm-12\">\n                    <input formControlName=\"faFather\" type=\"text\" class=\"form-control\"  name=\"std_father\"\n                        placeholder=\"Enter the Father Name\"  required>\n                    <!-- <span class=\"text-danger\"\n                        *ngIf=\"(father.touched || admissionForm.submitted) && father.errors?.required\">\n                        Father's name is required\n                    </span> -->\n                </div>\n            </div>\n\n        </div>\n        <!-- second row -->\n        <div class=\"row\">\n            <div id=\"fileds\" class=\"col-sm-6 form-group\">\n                <label for=\"Fathers Name\" class=\"col-sm-8 col-form-label\">*Mother's Name</label>\n                <div class=\"col-sm-12\">\n                    <input formControlName=\"faMother\" type=\"text\" class=\"form-control\"  name=\"std_mother\"\n                        placeholder=\"Enter the Mother Name\"  required>\n                    <!-- <span class=\"text-danger\"\n                        *ngIf=\"(mother.touched || admissionForm.submitted) && mother.errors?.required\">\n                        Mother's name is required\n                    </span> -->\n                </div>\n            </div>\n            <div id=\"fileds\" class=\"col-sm-6 form-group\">\n                <label for=\"From_date\" class=\"col-sm-12 col-form-label\">*Date of Birth</label>\n                <div class=\"col-sm-12\">\n                    <input formControlName=\"faDob\" type=\"date\" id=\"select_date\" class=\"form-control\" name=\"std_dob\"\n                        placeholder=\" Date of Birth\"  required>\n                    <!-- <span class=\"text-danger\" *ngIf=\"(dob.touched || admissionForm.submitted) && dob.errors?.required\">\n                        Date of birth is required\n                    </span> -->\n                </div>\n                <!-- {{std_dob}} -->\n            </div>\n\n        </div>\n        <!-- 3rd row -->\n\n        <div class=\"row\">\n            <div id=\"fileds\" class=\"col-sm-6 form-group\">\n                <label for=\"Department\" class=\"col-sm-12 col-form-label\">*Select Department</label>\n                <div class=\"col-sm-12\">\n                    <select formControlName=\"faDepartment\" class=\"form-control\" name=\"std_department\"\n                        required>\n                        <option>Select</option>\n                        <option>BSc</option>\n                        <option>Commerce</option>\n                        <option>Arts</option>\n                    </select>\n                    <!-- <span class=\"text-danger\"\n                        *ngIf=\"(department.touched || admissionForm.submitted) && department.errors?.required\">\n                        Department is required\n                    </span> -->\n                </div>\n                <!-- {{std_department}} -->\n            </div>\n            <div id=\"fileds\" class=\"col-sm-6 form-group\">\n                <label for=\"EMT_Id\" class=\"col-sm-12 col-form-label\">*Mobile Number</label>\n                <div class=\"col-sm-12\">\n                    <input formControlName=\"faMobile\" type=\"text\" class=\"form-control\" id=\"EMT_Id\"\n                        placeholder=\"Enter the Mobile Number\" name=\"std_mobile\" required>\n                    <!-- <span class=\"text-danger\"\n                        *ngIf=\"(mobile.touched || admissionForm.submitted) && mobile.errors?.required\">\n                        Mobile number is required\n                    </span> -->\n                </div>\n                <!-- {{std_mobile}} -->\n            </div>\n            <div id=\"fileds\" class=\"col-sm-6 form-group\">\n                <label for=\"EMT_Id\" class=\"col-sm-12 col-form-label\">*Address</label>\n                <div class=\"col-sm-12\">\n                    <input formControlName=\"faAddress\" type=\"text\" class=\"form-control\" placeholder=\"Enter the Address\"\n                        name=\"std_address\"  required>\n                    <!-- <span class=\"text-danger\"\n                        *ngIf=\"(address.touched || admissionForm.submitted) && address.errors?.required\">\n                        Address is required\n                    </span> -->\n                </div>\n            </div>\n            <!-- 4th row -->\n            <div id=\"fileds\" class=\"col-sm-6 form-group\">\n                <label for=\"EMT_Id\" class=\"col-sm-8 col-form-label\">Email</label>\n                <div class=\"col-sm-12\">\n                    <input formControlName=\"faEmail\" type=\"text\" class=\"form-control\" placeholder=\"Enter the Email\"\n                        name=\"std_email\">\n                </div>\n            </div>\n            <div class=\"btnColl col-sm-6 form-group\">\n                <div class=\"col-sm-12\">\n                    <button class=\"btn btn-primary\" [disabled]=\"!facultyForm.valid\"\n                        (click)=\"onSubmit()\">Submit</button>\n                </div>\n            </div>\n        </div>\n    </form>\n</div>";

/***/ }),

/***/ 514:
/*!*******************************************************************!*\
  !*** ./src/app/views/feedback/feedback.component.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "<p>Work in progess...</p>";

/***/ }),

/***/ 695:
/*!***************************************************************!*\
  !*** ./src/app/views/footer/footer.component.html?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "<!-- Footer -->\r\n<footer class=\"page-footer font-small\" style=\"background-color: #030f18; color: white;\">\r\n\r\n  <div style=\"background-color: #213d77; color:white;\">\r\n    <div class=\"container\" style=\" color:white;\">\r\n      \r\n      <!-- Grid row-->\r\n      <div class=\"row py-4 d-flex align-items-center\">\r\n\r\n        <!-- Grid column -->\r\n        <div class=\"col-md-8 col-lg-4  text-md-left mb-4 mb-md-0\">\r\n          <h3>Get connected with us on social networks!</h3>\r\n\r\n        </div>\r\n        <!-- Grid column -->\r\n\r\n        <!-- Grid column -->\r\n        <div class=\"col-md-4 col-lg-8 text-center text-md-right\">\r\n\r\n          <!-- Facebook -->\r\n          <a class=\"tw-ic\">\r\n            <span><img class=\"social-media-icon\" src=\"/assets/icons/icons8-facebook.svg\" alt=\"\"></span>\r\n          </a>\r\n          <!-- Twitter -->\r\n          <a class=\"tw-ic social-media-icon\">\r\n            <span ><img class=\"social-media-icon\" src=\"/assets/icons/icons8-twitter.svg\"  alt=\"\"></span>\r\n          </a>\r\n          <!-- Google +-->\r\n          <a class=\"tw-ic\">\r\n            <span><img class=\"social-media-icon\" src=\"/assets/icons/icons8-google.svg\" alt=\"\"></span>\r\n          </a>\r\n          <!--Linkedin -->\r\n          <a class=\"tw-ic\">\r\n            <span><img class=\"social-media-icon\" src=\"/assets/icons/icons8-linkedin.svg\" alt=\"\"></span>\r\n          </a>\r\n          <!--Instagram-->\r\n          <a class=\"tw-ic\">\r\n            <span><img class=\"social-media-icon\" src=\"/assets/icons/icons8-instagram.svg\" alt=\"\"></span>\r\n          </a>\r\n           <!--whatsapp-->\r\n           <a class=\"tw-ic\" (click)=\"openLink('whatsApp')\">\r\n            <span><img class=\"social-media-icon\" src=\"/assets/icons/icons8-whatsapp.svg\" alt=\"\"></span>\r\n          </a>\r\n\r\n\r\n        </div>\r\n        <!-- Grid column -->\r\n\r\n      </div>\r\n      <!-- Grid row-->\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <!-- Footer Links -->\r\n  <div class=\"container text-center text-md-left mt-5\">\r\n\r\n    <!-- Grid row -->\r\n    <div class=\"row mt-3 dark-grey-text\">\r\n\r\n      <!-- Grid column -->\r\n      <div class=\"col-md-3 col-lg-4 col-xl-3 mb-4\">\r\n\r\n        <!-- Content -->\r\n        <h5 class=\"text-uppercase font-weight-bold\">Maharshi Valmiki V. P. Inter College</h5>\r\n        <hr class=\"teal accent-3 mb-4 mt-0 d-inline-block mx-auto\" style=\"width: 14.2rem;\">\r\n        <p>Maharshi Valmiki Vidya Peeth Inter College is Co-Education School, Bhaisatiker Sant Kabir Nagar. The year\r\n          of the establishment of the Maharshi Valmiki Vidya Peeth Inter College is 2009, was the realization of a dream\r\n          by selfless and dedicated educationist and social worker, Mr. Amar Ray.\r\n        </p>\r\n\r\n      </div>\r\n      <!-- Grid column -->\r\n\r\n      <!-- Grid column -->\r\n      <div class=\"col-md-2 col-lg-2 col-xl-2 mx-auto mb-4\">\r\n\r\n        <!-- Links -->\r\n        <h5 class=\"text-uppercase font-weight-bold\">Departments</h5>\r\n        <hr class=\"teal accent-3 mb-4 mt-0 d-inline-block mx-auto\" style=\"width: 7rem;\">\r\n        <p>\r\n          <a class=\"dark-grey-text\">Secondary school (Arts | Science) </a>\r\n        </p>\r\n        <p>\r\n          <a class=\"dark-grey-text\">Matric (English Medium)</a>\r\n        </p>\r\n        <p>\r\n          <a class=\"dark-grey-text\">ITI(Electrical | Machenical)</a>\r\n        </p>\r\n\r\n      </div>\r\n      <!-- Grid column -->\r\n\r\n      <!-- Grid column -->\r\n      <div class=\"col-md-3 col-lg-2 col-xl-2 mx-auto mb-4\">\r\n\r\n        <!-- Links -->\r\n        <h5 class=\"text-uppercase font-weight-bold\">Useful links</h5>\r\n        <hr class=\"teal accent-3 mb-4 mt-0 d-inline-block mx-auto\" style=\"width: 6.6rem;;\">\r\n        <p>\r\n          <a class=\"dark-grey-text\">Manage Students</a>\r\n        </p>\r\n        <p>\r\n          <a class=\"dark-grey-text\">Manage Faculties</a>\r\n        </p>\r\n        <p>\r\n          <a class=\"dark-grey-text\">Admission</a>\r\n        </p>\r\n        <p>\r\n          <a class=\"dark-grey-text\">Help</a>\r\n        </p>\r\n\r\n      </div>\r\n      <!-- Grid column -->\r\n\r\n      <!-- Grid column -->\r\n      <div class=\"col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4\">\r\n\r\n        <!-- Links -->\r\n        <h5 class=\"text-uppercase font-weight-bold\">Contact</h5>\r\n        <hr class=\"teal accent-3 mb-4 mt-0 d-inline-block mx-auto\" style=\"width: 4.5rem;\">\r\n        <p>\r\n          <!-- <mdb-icon class=\"mr-3\"></mdb-icon>  -->\r\n          Bhaisatikar Ramjanki Marg Haisar Bazar S.K Nagar UP-272165\r\n        </p>\r\n        <p>\r\n          <!-- <mdb-icon class=\"mr-3\"></mdb-icon>  -->\r\n          mvvpicollege@gmail.com\r\n        </p>\r\n        <p>\r\n          <!-- <mdb-icon class=\"mr-3\"></mdb-icon> -->\r\n           + 022 12345786\r\n        </p>\r\n        <p>\r\n          <!-- <mdb-icon class=\"mr-3\"></mdb-icon> -->\r\n           +91 9415193378 | 9838539478\r\n        </p>\r\n\r\n      </div>\r\n      <!-- Grid column -->\r\n\r\n    </div>\r\n    <!-- Grid row -->\r\n\r\n  </div>\r\n  <!-- Footer Links -->\r\n\r\n  <!-- Copyright -->\r\n  <div class=\"footer-copyright text-center text-white-50 py-3\">© 2009 Copyright:\r\n    <a class=\"dark-grey-text\" href=\"https://mvvpicollege-sknagar.web.app/mvvpic/\">mvvpic.in</a> \r\n  </div>\r\n  <div class=\"footer-copyright text-center text-white-50 py-3\">© Developed & Managed By:\r\n    <a class=\"dark-grey-text\" href=\"https://www.linkedin.com/in/taufique-rasheed-mirza-0aa421157/?originalSubdomain=in\">Taufique Mirza</a> \r\n  </div>\r\n  <!-- Copyright -->\r\n\r\n</footer>\r\n<!-- Footer -->";

/***/ }),

/***/ 3692:
/*!*******************************************************************!*\
  !*** ./src/app/views/homepage/homepage.component.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"mainDiv\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-8\">\n        <div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\">\n          <div class=\"carousel-inner\">\n            <div class=\" imgDiv carousel-item active\">\n              <img class=\"d-block w-100\" src=\"/assets/images/image1.jpg\" alt=\"First slide\">\n            </div>\n            <div class=\"imgDiv carousel-item\">\n              <img class=\"d-block w-100\" src=\"/assets/images/back-chool-template-wooden-board.avif\" alt=\"Second slide\">\n            </div>\n            <div class=\"imgDiv carousel-item\">\n              <img class=\"d-block w-100\" src=\"/assets/images/school-kids-studying.jpg\" alt=\"Third slide\">\n            </div>\n            <div class=\"imgDiv carousel-item\">\n              <img class=\"d-block w-100\" src=\"/assets/images/image21.jpg\" alt=\"Fourth slide\">\n            </div>\n            <div class=\"imgDiv carousel-item\">\n              <img class=\"d-block w-100\" src=\"/assets/images/image37.jpg\" alt=\"Fifth slide\">\n            </div>\n            <div class=\"imgDiv carousel-item\">\n              <img class=\"d-block w-100\" src=\"/assets/images/image8.jpg\" alt=\"Sixth slide\">\n            </div>\n          </div>\n          <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\n            <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n            <span class=\"sr-only\">Previous</span>\n          </a>\n          <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\n            <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n            <span class=\"sr-only\">Next</span>\n          </a>\n        </div>\n      </div>\n      <div class=\"impLnks col-sm-4\">\n        <h3 style=\"background-color: #213d77; color: white;\">\n          Important Notic & Links\n        </h3>\n        <marquee width=\"100%\" direction=\"left\" height=\"30px\">\n          New Admission start date from June 2023\n        </marquee>\n        <marquee width=\"100%\" direction=\"left\" height=\"30px\">\n          2 Opening form Science and Math and Matric for Junior College.\n        </marquee>\n        <marquee width=\"100%\" direction=\"left\" height=\"30px\">\n          New Announcment will be here...\n        </marquee>\n      </div>\n    </div>\n    <hr>\n    <div class=\"row line questionFormHeader\">\n      <h1 class=\"lineUpWhite\">Education Through Play</h1>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        <div class=\"educationDiv\">\n          <img class=\"d-block w-100 h-60\" src=\"/assets/images/children-reading-books.avif\" alt=\"h\">\n        </div>\n\n      </div>\n      <div class=\"col-sm-6\">\n        <h1>\n          <span>Our mission is to provide a safe</span>\n          <span>nurturing</span>\n          <span>and friendly environment where your child can grow and</span>\n          <span>learn with the help and guidance of positive role models and</span>\n          <span>with developmentally appropriate activities.</span>\n        </h1>\n      </div>\n    </div>\n    <hr>\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <br>\n        <app-contact-us></app-contact-us>\n        <br>\n      </div>\n    </div>\n  </div>\n</div>";

/***/ }),

/***/ 2535:
/*!************************************************************************!*\
  !*** ./src/app/views/img-gallery/img-galery.component.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"image-galary-container\">\r\n  <div class=\"row line questionFormHeader\">\r\n    <h2 class=\"lineUpWhite\"> Welcome to Image Galary, Let's have a look of MVVPIC glimpse!</h2>\r\n  </div>\r\n  <div class=\"row image-list\">\r\n    <div class=\"column\" *ngFor=\"let src of images; let i=index\">\r\n      <img src={{src.img}} alt=\"Snow\" (click)=\"openImage($event,src)\" style=\"width:100%; cursor: pointer;\"\r\n        data-toggle=\"modal\" data-target=\".bd-example-modal-lg\" />\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"modal fade bd-example-modal-lg\" tabindex=\"\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\r\n    aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h3>{{imgDescription}}</h3>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <img src={{imgSrc}} class=\"image-data\" />\r\n        <div class=\"modal-footer\">\r\n          <p>This is footer</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>";

/***/ }),

/***/ 1689:
/*!*********************************************************************************!*\
  !*** ./src/app/views/mission-vission/mission-vission.component.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"mandiv\">\n    <h1 style=\"background-color: #213d77; color: white;\">Mission & Vision</h1>\n    <hr style=\"border-top: 1.5px solid #eee; width:100%;\">\n    <p>\n    <h2 style=\"background-color: #213d77; color: white;\"> College Mission</h2>\n    <p>To encourage and insprire teachers and students to attain excellence in education.</p>\n\n    <hr>\n    <h2 style=\"background-color: #213d77; color: white;\">College Vision</h2>\n    <p>To bring higher education to the door steps of the economically under privilages students, especially belonging\n        to\n        the Middle class family, emphasizing on their all round development.\n    </p>\n</div>";

/***/ }),

/***/ 1476:
/*!*******************************************************************************!*\
  !*** ./src/app/views/page-not-found/page-not-found.component.html?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = "\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"error-template\">\n                <h1>\n                    Oops!</h1>\n                <h2>\n                    404 Not Found</h2>\n                <div class=\"error-details\">\n                    Sorry, an error has occured, Requested page not found!\n                </div>\n                <div class=\"error-actions\">\n                    <a href=\"http://www.jquery2dotnet.com\" class=\"btn btn-primary btn-lg\"><span class=\"glyphicon glyphicon-home\"></span>\n                        Take Me Home </a><a href=\"http://www.jquery2dotnet.com\" class=\"btn btn-default btn-lg\"><span class=\"glyphicon glyphicon-envelope\"></span> Contact Support </a>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";

/***/ }),

/***/ 3561:
/*!*****************************************************************************!*\
  !*** ./src/app/views/principal-msg/principal-msg.component.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "\n<div class=\"container\">\n   \n    <div class=\"row\">\n        \n        <div class=\"col-sm-6 form-group\" >\n            <img src=\"/assets/images/url-logo.jpeg\" alt=\"Pricipal Pic\" style=\"width:300; height:600; margin-top: 18px;\">\n        </div>\n        <div class=\"col-sm-6 form-group\">\n             <h3 style=\"background-color: #213d77; color: white;\">\n        Principles Message\n    </h3>\n            <p>Since last 12 years Maharshi Valkmiki Vidya Peeth Inter College has remained a pioneer institution in the\n                Rural locality of South-north-east\n                In rural areas taking education to the doorstep of the economically challenged in general and the girls\n                of the community in\n                specific. The college has played a pivotal role in bringing the cultural change within the community\n                through\n                imparting value based education. Emphasis has been given to provide equal opportunities for every\n                student to explore\n                their latent talent not only in academics but also in extra-curricular and sports activities. The\n                College provides\n                congenial environment for both the students and faculty and consistently encouraged them to widen their\n                capabilities\n                enabling them to become responsible citizens of India</p>\n        </div>\n    </div>\n</div>";

/***/ }),

/***/ 3174:
/*!*****************************************************************!*\
  !*** ./src/app/views/results/results.component.html?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "<p>Work in progess...</p>";

/***/ }),

/***/ 7486:
/*!***************************************************************!*\
  !*** ./src/app/views/slides/slides.component.html?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"mainDiv\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-8\">\n        <div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\">\n          <div class=\"carousel-inner\">\n            <div class=\" imgDiv carousel-item active\">\n              <img class=\"d-block w-100\" src=\"/assets/images/image1.jpg\" alt=\"First slide\">\n            </div>\n            <div class=\"imgDiv carousel-item\">\n              <img class=\"d-block w-100\" src=\"/assets/images/image24.jpg\" alt=\"Second slide\">\n            </div>\n            <div class=\"imgDiv carousel-item\">\n              <img class=\"d-block w-100\" src=\"/assets/images/image35.jpg\" alt=\"Third slide\">\n            </div>\n            <div class=\"imgDiv carousel-item\">\n              <img class=\"d-block w-100\" src=\"/assets/images/image21.jpg\" alt=\"Fourth slide\">\n            </div>\n            <div class=\"imgDiv carousel-item\">\n              <img class=\"d-block w-100\" src=\"/assets/images/image37.jpg\" alt=\"Fifth slide\">\n            </div>\n            <div class=\"imgDiv carousel-item\">\n              <img class=\"d-block w-100\" src=\"/assets/images/image8.jpg\" alt=\"Sixth slide\">\n            </div>\n          </div>\n          <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\n            <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n            <span class=\"sr-only\">Previous</span>\n          </a>\n          <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\n            <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n            <span class=\"sr-only\">Next</span>\n          </a>\n        </div>\n      </div>\n      <div class=\"impLnks col-sm-4\">\n        <h3 style=\"background-color: #213d77; color: white;\">\n          Important Notic & Links\n        </h3>\n          <marquee width=\"100%\" direction=\"left\" height=\"30px\">\n              New Admission start date from June 2021\n          </marquee>\n          <marquee width=\"100%\" direction=\"left\" height=\"30px\">\n            News 2\n        </marquee>\n        <marquee width=\"100%\" direction=\"left\" height=\"30px\">\n          News 3\n      </marquee>\n      </div>\n    </div>\n  </div>\n\n</div>";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(8835)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map