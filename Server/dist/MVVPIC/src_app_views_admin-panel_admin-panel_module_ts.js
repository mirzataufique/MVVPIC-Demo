"use strict";
(self["webpackChunkMVVPIC"] = self["webpackChunkMVVPIC"] || []).push([["src_app_views_admin-panel_admin-panel_module_ts"],{

/***/ 2420:
/*!********************************************!*\
  !*** ./src/app/Services/logger.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoggerService": () => (/* binding */ LoggerService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 4766);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 6942);



// import { NGXLogger } from 'ngx-logger';


const baseurl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseurl;
const token = localStorage.getItem('token');
const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({ 'Content-Type': 'application/json',
        "Authorization": "Bearer " + token })
};
let LoggerService = class LoggerService {
    constructor(http) {
        this.http = http;
    }
    postLogToServer(errorMsg) {
        // console.log("insde logger service---> ",errorMsg);
        return this.http.get(baseurl + "log/" + errorMsg, httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(res => res));
    }
};
LoggerService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
LoggerService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], LoggerService);



/***/ }),

/***/ 9805:
/*!*****************************************************************!*\
  !*** ./src/app/views/admin-panel/admin-panel-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminPanelRoutingModule": () => (/* binding */ AdminPanelRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _Services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Services/auth.service */ 2319);
/* harmony import */ var _fltreport_fltreport_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fltreport/fltreport.component */ 2552);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ 3051);
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ 4413);
/* harmony import */ var _stdreport_stdreport_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stdreport/stdreport.component */ 4444);
/* harmony import */ var _new_admission_new_admission_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-admission/new-admission.component */ 3959);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 504);










const routes = [
    {
        path: 'fcltreport',
        canActivate: [_Services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService],
        data: ['ADMIN'],
        component: _fltreport_fltreport_component__WEBPACK_IMPORTED_MODULE_1__.FltreportComponent
    }, {
        path: 'login',
        canActivate: [_Services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService],
        data: ['ADMIN'],
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent
    }, {
        path: 'report',
        canActivate: [_Services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService],
        data: ['ADMIN'],
        component: _stdreport_stdreport_component__WEBPACK_IMPORTED_MODULE_4__.StdreportComponent
    },
    {
        path: 'register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__.RegisterComponent
    },
    {
        path: 'admission',
        canActivate: [_Services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService],
        data: ['ADMIN'],
        component: _new_admission_new_admission_component__WEBPACK_IMPORTED_MODULE_5__.NewAdmissionComponent
    },
    {
        path: 'dashboard',
        canActivate: [_Services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService],
        data: ['ADMIN'],
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__.DashboardComponent
    },
];
let AdminPanelRoutingModule = class AdminPanelRoutingModule {
};
AdminPanelRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
    })
], AdminPanelRoutingModule);



/***/ }),

/***/ 8405:
/*!*********************************************************!*\
  !*** ./src/app/views/admin-panel/admin-panel.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminPanelModule": () => (/* binding */ AdminPanelModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _admin_panel_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-panel-routing.module */ 9805);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ 3051);
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register/register.component */ 4413);
/* harmony import */ var _fltreport_fltreport_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fltreport/fltreport.component */ 2552);
/* harmony import */ var _stdreport_stdreport_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stdreport/stdreport.component */ 4444);
/* harmony import */ var _new_admission_new_admission_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-admission/new-admission.component */ 3959);












console.log("Admin============>");
let AdminPanelModule = class AdminPanelModule {
};
AdminPanelModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent, _register_register_component__WEBPACK_IMPORTED_MODULE_2__.RegisterComponent, _fltreport_fltreport_component__WEBPACK_IMPORTED_MODULE_3__.FltreportComponent, _stdreport_stdreport_component__WEBPACK_IMPORTED_MODULE_4__.StdreportComponent, _new_admission_new_admission_component__WEBPACK_IMPORTED_MODULE_5__.NewAdmissionComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule,
            _admin_panel_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminPanelRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule,
        ]
    })
], AdminPanelModule);



/***/ }),

/***/ 504:
/*!********************************************************************!*\
  !*** ./src/app/views/admin-panel/dashboard/dashboard.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _dashboard_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.component.html?ngResource */ 2698);
/* harmony import */ var _dashboard_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.component.css?ngResource */ 5498);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _Services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Services/auth.service */ 2319);
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularx-social-login */ 6727);
/* harmony import */ var _Services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Services/user.service */ 2167);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);








let DashboardComponent = class DashboardComponent {
    constructor(authService, socialService, userService, routes, activatedRoute) {
        this.authService = authService;
        this.socialService = socialService;
        this.userService = userService;
        this.routes = routes;
        this.activatedRoute = activatedRoute;
    }
    ngOnInit() {
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _Services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: angularx_social_login__WEBPACK_IMPORTED_MODULE_4__.SocialAuthService },
    { type: _Services_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute }
];
DashboardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-dashboard',
        template: _dashboard_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_dashboard_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DashboardComponent);



/***/ }),

/***/ 2552:
/*!********************************************************************!*\
  !*** ./src/app/views/admin-panel/fltreport/fltreport.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FltreportComponent": () => (/* binding */ FltreportComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _fltreport_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fltreport.component.html?ngResource */ 8182);
/* harmony import */ var _fltreport_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fltreport.component.css?ngResource */ 6302);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _Services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Services/user.service */ 2167);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);






let FltreportComponent = class FltreportComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
        this.tData = false;
    }
    ngOnInit() {
        this.userService.getUser().subscribe((result) => {
            this.userData = result;
            console.log('result', this.userData);
            this.numerOfResult = this.userData.length;
        });
    }
    delete(value) {
        console.log("inside Delete-->", value);
        let index = this.userData.indexOf(value);
        this.userData.splice(index, 1);
        this.tData = true;
        this.userService.deteleById(value).subscribe((result) => {
            console.log(result);
            this.userData.push(result);
        });
    }
    movetoAddFaculty() {
        this.router.navigate(['/faculty']);
    }
};
FltreportComponent.ctorParameters = () => [
    { type: _Services_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
FltreportComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-fltreport',
        template: _fltreport_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_fltreport_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FltreportComponent);



/***/ }),

/***/ 3051:
/*!************************************************************!*\
  !*** ./src/app/views/admin-panel/login/login.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _login_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component.html?ngResource */ 6317);
/* harmony import */ var _login_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component.css?ngResource */ 8245);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_Services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/auth.service */ 2319);
/* harmony import */ var _Services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Services/user.service */ 2167);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _Services_logger_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Services/logger.service */ 2420);
/* harmony import */ var src_app_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/loader/loader.service */ 6124);







// import { SocialAuthService, SocialUser } from "angularx-social-login";
// import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";

// import { NGXLogger } from 'ngx-logger';


let LoginComponent = class LoginComponent {
    constructor(
    // private authService: AuthService, 
    routes, activatedRoute, 
    // private socialService: SocialAuthService, 
    userService, 
    // private logger: NGXLogger,
    customLogger, loaderService) {
        this.routes = routes;
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.customLogger = customLogger;
        this.loaderService = loaderService;
        this.loginStatus = '0';
    }
    // ==================== Use for Rout authentication
    // currentUser = "";
    logIn() {
        // this.logService.log
        // this.loggedIn = true;
        console.log("Login button", this.loginForm.value);
        console.log(this.loginForm.value);
        localStorage.removeItem('token');
        if (this.loginForm.valid) {
            this.userService.login(this.loginForm.value)
                .subscribe((result) => {
                console.log(result);
                this.userService.logedinUserDetails.next(result.user);
                localStorage.setItem('token', JSON.stringify(result.token));
                sessionStorage.setItem('loginStatus', this.loginStatus = '1');
                sessionStorage.setItem('loginUserType', result.user[0].userType);
                sessionStorage.setItem('logeninUserDetails', result.user);
                this.loginUserType = sessionStorage.getItem('loginUserType');
                console.log("===>", this.loginUserType);
                this.routes.navigate(['/home']);
            }, (error) => {
                console.log(error);
                this.customLogger.postLogToServer(error);
                this.responseMsg = error.statusText;
                console.log('response', this.responseMsg);
                this.routes.navigateByUrl('/admin/login');
            }, () => {
                console.log('Authentication completed');
            });
        }
    }
    ;
    ngOnInit() {
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormGroup({
            userType: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            userEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.email),
            userPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required)
        });
        // this.loaderService.isLoading
        // this.socialService.authState.subscribe((user) => {
        //   this.user = user;
        //   this.loggedIn = (user != null);
        // });
    }
    // Social login =========================================>
    // signInWithGoogle(): void {
    //   console.log("sign with google.....")
    //   if (GoogleLoginProvider.PROVIDER_ID != null || '') {
    //     this.socialService.signIn(GoogleLoginProvider.PROVIDER_ID).then(x => {
    //     console.log("succesfully", x);
    //       this.routes.navigate(['/home']);
    //     })
    //   } else {
    //     this.routes.navigate(['/login']);
    //   }
    // }
    isValid(controlName) {
        return this.loginForm.get(controlName).invalid && this.loginForm.get(controlName).touched;
    }
    moveToRegiter() {
        this.routes.navigate(['../register'], { relativeTo: this.activatedRoute });
    }
    moveToHomePage() {
        this.routes.navigate(['../home'], { relativeTo: this.activatedRoute });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _Services_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: _Services_logger_service__WEBPACK_IMPORTED_MODULE_4__.LoggerService },
    { type: src_app_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__.LoaderService }
];
LoginComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-login',
        template: _login_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        providers: [src_app_Services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService],
        styles: [_login_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginComponent);



/***/ }),

/***/ 3959:
/*!****************************************************************************!*\
  !*** ./src/app/views/admin-panel/new-admission/new-admission.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewAdmissionComponent": () => (/* binding */ NewAdmissionComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _new_admission_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-admission.component.html?ngResource */ 6650);
/* harmony import */ var _new_admission_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-admission.component.css?ngResource */ 5987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_Services_mainController_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/mainController.service */ 1556);







let NewAdmissionComponent = class NewAdmissionComponent {
    constructor(_mainService, router) {
        this._mainService = _mainService;
        this.router = router;
        this.isDisable = false;
        this.successMsg = false;
        this.errorMsg = false;
    }
    ngOnInit() {
        this.addmissionForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            std_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
            std_father: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email),
            std_mother: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
            std_dob: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
            std_department: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
            std_mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
            std_address: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
            std_email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required)
        });
    }
    onSubmit() {
        console.log("save student clicked", this.addmissionForm);
        this._mainService.addStudent(this.addmissionForm.value).subscribe((result) => {
            console.log('result', result);
            this.msg = result.message;
            this.errorMsg = false;
            this.successMsg = true;
            this.router.navigate(['/report']);
        }, (error) => {
            console.log('An unexpected error ', error.error.message);
            this.msg = error.error.message;
            this.successMsg = false;
            this.errorMsg = true;
            // this.router.navigate(['/report']);
        }, () => {
            console.log('Completed');
        });
        // this.router.navigate(['/report'])
    }
};
NewAdmissionComponent.ctorParameters = () => [
    { type: src_app_Services_mainController_service__WEBPACK_IMPORTED_MODULE_2__.MainControllerService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
NewAdmissionComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-new-admission',
        template: _new_admission_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_new_admission_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], NewAdmissionComponent);



/***/ }),

/***/ 4413:
/*!******************************************************************!*\
  !*** ./src/app/views/admin-panel/register/register.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterComponent": () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _register_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.component.html?ngResource */ 1735);
/* harmony import */ var _register_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.component.css?ngResource */ 3273);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _Services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Services/user.service */ 2167);
/* harmony import */ var src_app_loader_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/loader/loader.service */ 6124);








let RegisterComponent = class RegisterComponent {
    constructor(userService, routes, activatedRoute, loaderService) {
        this.userService = userService;
        this.routes = routes;
        this.activatedRoute = activatedRoute;
        this.loaderService = loaderService;
        this.successMsg = false;
        this.errorMsg = false;
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormGroup({
            userEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email && _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
            userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
            userPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
            cnfPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl(null, this.passValidator),
            userType: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
            docFile: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl(null)
        });
        this.registerForm.controls.userPassword.valueChanges
            .subscribe(x => { this.registerForm.controls.cnfPassword.updateValueAndValidity(); });
    }
    register() {
        console.log("hello", this.registerForm.value);
        // if (this.registerForm.valid) {
        this.userService.signUp(this.registerForm.value)
            .subscribe((result) => {
            console.log('result----', result);
            this.msg = 'Successfuly created';
            this.errorMsg = false;
            this.successMsg = true;
        }, (error) => {
            console.log('An unexpected error ', error.error.message);
            this.msg = error.error.message;
            this.successMsg = false;
            this.errorMsg = true;
        });
        // }
    }
    ngOnInit() {
    }
    isValid(controlName) {
        return this.registerForm.get(controlName).invalid && this.registerForm.get(controlName).touched;
    }
    passValidator(control) {
        if (control && (control.value !== null) || control.value !== undefined) {
            const cnfPassValue = control.value;
            const passControl = control.root.get('userPassword');
            if (passControl) {
                const passValue = passControl.value;
                if (passValue !== cnfPassValue || passValue === '') {
                    return {
                        isError: true
                    };
                }
            }
        }
        return null;
    }
    moveToLogin() {
        console.log("go to login====>");
        this.routes.navigateByUrl('/admin/login');
    }
    onFileSelect(event) {
        let fileList = event.target.files;
        if (fileList.length > 0) {
            let file = fileList[0];
            console.log("File", this.registerForm.value);
            let formData = new FormData();
            formData.append('uploadFile', file, file.name);
            this.registerForm.value.docFile = formData;
            console.log("Finale Form Value", this.registerForm.value);
            this.userService.signUp(this.registerForm.value)
                .subscribe((result) => {
                console.log('result----', result);
                this.msg = 'Successfuly created';
                this.errorMsg = false;
                this.successMsg = true;
            }, (error) => {
                console.log('An unexpected error ', error.error.message);
                this.msg = error.error.message;
                this.successMsg = false;
                this.errorMsg = true;
            });
        }
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _Services_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: src_app_loader_loader_service__WEBPACK_IMPORTED_MODULE_3__.LoaderService }
];
RegisterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-register',
        template: _register_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_register_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RegisterComponent);



/***/ }),

/***/ 5498:
/*!********************************************************************************!*\
  !*** ./src/app/views/admin-panel/dashboard/dashboard.component.css?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */";

/***/ }),

/***/ 6302:
/*!********************************************************************************!*\
  !*** ./src/app/views/admin-panel/fltreport/fltreport.component.css?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "\n\n    .container{\n        height: auto;\n        width: auto;\n        margin-top: 5px;\n        border: 2px solid rgb(31, 168, 31);\n        /* border-radius: 5px;*/\n      border-radius: 4px; \n    } \n    #fileds{\n        \n        padding: 1px;\n        padding-left: 5px;\n        /* padding-right: 22px; */\n        margin-top: 10px 0 0 0;\n        /* margin-right:0px; */\n        border-radius: 4px; \n    } \n    .instruction{\n        margin-left: 40px;\n    } \n    .btnRow{\n    float: right;\n    padding-left: 5px;\n    margin-top: 100px;\n    height: 100px;\n    } \n    .btnColl{\n    box-shadow: none;\n    border: none;\n    margin-top: 32px;\n    width: 100%;\n    margin-left:2%;\n    content: center;\n    height: -moz-max-content;\n    height: max-content;\n} \n    .btn{\n    padding: 5px;\n    margin-right: none;\n    width: 50%;\n    zoom: 0;\n} \n    #radiobutton{\n    padding-left: 3px;\n    margin-right: 4px;\n} \n    #select_date{\n    border: none;\n    box-shadow: none;\n    border-bottom: 1px solid #000;\n    border-radius: 0px;\n} \n    .dataRow{\n    margin-top: 10px;\n    background-color: #bdc1c5;\n    width: 100%;\n    border-radius: 5px;\n    padding-left: 5px;\n} \n    .paginext{\n    float: right;\n    border:2px solid blue;\n    margin-top: 0px;\n    background-color:none;\n} \n    .ngx-pagination button:hover {\n    background:none;\n} \n    .nav-link{\n    float: left;\n    margin-right: 23px;\n    list-style-type: none;\n    color : white;\n    \n    \n} \n    .nav-item{\n    list-style-type: none;\n    float: left;\n} \n    .btn{\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZsdHJlcG9ydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0lBRUk7UUFDSSxZQUFZO1FBQ1osV0FBVztRQUNYLGVBQWU7UUFDZixrQ0FBa0M7UUFDbEMsdUJBQXVCO01BQ3pCLGtCQUFrQjtJQUNwQjtJQUNBOztRQUVJLFlBQVk7UUFDWixpQkFBaUI7UUFDakIseUJBQXlCO1FBQ3pCLHNCQUFzQjtRQUN0QixzQkFBc0I7UUFDdEIsa0JBQWtCO0lBQ3RCO0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7SUFFQTtJQUNBLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYjtJQUNKO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGNBQWM7SUFDZCxlQUFlO0lBQ2Ysd0JBQW1CO0lBQW5CLG1CQUFtQjtBQUN2QjtJQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsT0FBTztBQUNYO0lBQ0E7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCO0lBQ0E7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLDZCQUE2QjtJQUM3QixrQkFBa0I7QUFDdEI7SUFDQTtJQUNJLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7SUFDQTtJQUNJLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLHFCQUFxQjtBQUN6QjtJQUdDO0lBQ0csZUFBZTtBQUNuQjtJQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsYUFBYTs7O0FBR2pCO0lBQ0E7SUFDSSxxQkFBcUI7SUFDckIsV0FBVztBQUNmO0lBQ0E7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoiZmx0cmVwb3J0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuICAgIC5jb250YWluZXJ7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgcmdiKDMxLCAxNjgsIDMxKTtcbiAgICAgICAgLyogYm9yZGVyLXJhZGl1czogNXB4OyovXG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7IFxuICAgIH0gXG4gICAgI2ZpbGVkc3tcbiAgICAgICAgXG4gICAgICAgIHBhZGRpbmc6IDFweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgICAgIC8qIHBhZGRpbmctcmlnaHQ6IDIycHg7ICovXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHggMCAwIDA7XG4gICAgICAgIC8qIG1hcmdpbi1yaWdodDowcHg7ICovXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDsgXG4gICAgfVxuICAgXG4gICAgLmluc3RydWN0aW9ue1xuICAgICAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgICB9XG4gICAgXG4gICAgLmJ0blJvd3tcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICB9XG4uYnRuQ29sbHtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1sZWZ0OjIlO1xuICAgIGNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xufVxuXG4uYnRue1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IG5vbmU7XG4gICAgd2lkdGg6IDUwJTtcbiAgICB6b29tOiAwO1xufVxuI3JhZGlvYnV0dG9ue1xuICAgIHBhZGRpbmctbGVmdDogM3B4O1xuICAgIG1hcmdpbi1yaWdodDogNHB4O1xufVxuI3NlbGVjdF9kYXRle1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbn1cbi5kYXRhUm93e1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JkYzFjNTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG4ucGFnaW5leHR7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGJvcmRlcjoycHggc29saWQgYmx1ZTtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpub25lO1xufVxuXG5cbiAubmd4LXBhZ2luYXRpb24gYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOm5vbmU7XG59XG5cbi5uYXYtbGlua3tcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIzcHg7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIGNvbG9yIDogd2hpdGU7XG4gICAgXG4gICAgXG59XG4ubmF2LWl0ZW17XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuLmJ0bntcbiAgICB3aWR0aDogMTAwJTtcbn0iXX0= */";

/***/ }),

/***/ 8245:
/*!************************************************************************!*\
  !*** ./src/app/views/admin-panel/login/login.component.css?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = ".form-container{\n   margin: 10px 0px 20px 0px;\n}\n.login-form{\n  background-color: #213d77;\n  height: auto;\n  width: 370px;\n  margin: auto;\n  padding: 20px;\n  border-radius: 8px;\n \n}\n.login-form, p2{\n  color: #FFFF;\n}\n/* .login-form, .Header-text{\n  color: rgb(233, 142, 5) !important;\n} */\n.inside-form .font_white{\ncolor: #ffff;\n}\n.login-form, .signup, p{\n  text-align: center;\n  margin-top: 8px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7R0FDRyx5QkFBeUI7QUFDNUI7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCOztBQUVwQjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7O0dBRUc7QUFDSDtBQUNBLFlBQVk7QUFDWjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakIiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWNvbnRhaW5lcntcbiAgIG1hcmdpbjogMTBweCAwcHggMjBweCAwcHg7XG59XG4ubG9naW4tZm9ybXtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxM2Q3NztcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogMzcwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuIFxufVxuLmxvZ2luLWZvcm0sIHAye1xuICBjb2xvcjogI0ZGRkY7XG59XG4vKiAubG9naW4tZm9ybSwgLkhlYWRlci10ZXh0e1xuICBjb2xvcjogcmdiKDIzMywgMTQyLCA1KSAhaW1wb3J0YW50O1xufSAqL1xuLmluc2lkZS1mb3JtIC5mb250X3doaXRle1xuY29sb3I6ICNmZmZmO1xufVxuXG4ubG9naW4tZm9ybSwgLnNpZ251cCwgcHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG4iXX0= */";

/***/ }),

/***/ 5987:
/*!****************************************************************************************!*\
  !*** ./src/app/views/admin-panel/new-admission/new-admission.component.css?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = ".banner{\r\n    width:100%;\r\n    height: 50px;\r\n}\r\n\r\n    .container{\r\n        background-color:rgb(255, 255, 255);\r\n        height: auto;\r\n        margin-top: 25px;\r\n        padding-bottom: 20px;\r\n        border: 2px solid green;\r\n        border-radius: 5px;\r\n        border-style: round;\r\n    }\r\n\r\n    #fileds{\r\n        \r\n        padding:px;\r\n        padding-left: 24px;\r\n        /* padding-right: 22px; */\r\n        margin-top: 10px;\r\n        margin-right:0px;\r\n        border-radius: 4px; \r\n    }\r\n\r\n    body{\r\n        background-color: lightgrey;\r\n    }\r\n\r\n    .instruction{\r\n        margin-left: 40px;\r\n    }\r\n\r\n    .btnRow{\r\n    float: right;\r\n    margin-top: 10px;\r\n    height: 100px;\r\n    }\r\n\r\n    .btnColl{\r\n    box-shadow: none;\r\n    border: none;\r\n    /* margin-top: 6.6%; */\r\n    \r\n}\r\n\r\n    .btn{\r\nmargin-left: 4%;\r\n}\r\n\r\n    #radiobutton{\r\n    padding-left: 3px;\r\n    margin-right: 4px;\r\n}\r\n\r\n    #select_date{\r\n    border: none;\r\n    box-shadow: none;\r\n    border-bottom: 1px solid #000;\r\n    border-radius: 0px;\r\n}\r\n\r\n    .dataRow{\r\n    margin-top: 10px;\r\n    background-color: #E5E7E9;\r\n    width: 100%;\r\n    border-radius: 5px;\r\n}\r\n\r\n    .paginext{\r\n    float: right;\r\n    border:2px solid blue;\r\n    margin-top: 0px;\r\n    background-color: GRAY;\r\n}\r\n\r\n    .nav-link{\r\n    float: left;\r\n    margin-right: 23px;\r\n    list-style-type: none;\r\n    color : white;\r\n    \r\n    \r\n}\r\n\r\n    .nav-item{\r\n    list-style-type: none;\r\n    float: left;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy1hZG1pc3Npb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixZQUFZO0FBQ2hCOztJQUVJO1FBQ0ksbUNBQW1DO1FBQ25DLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsb0JBQW9CO1FBQ3BCLHVCQUF1QjtRQUN2QixrQkFBa0I7UUFDbEIsbUJBQW1CO0lBQ3ZCOztJQUNBOztRQUVJLFVBQVU7UUFDVixrQkFBa0I7UUFDbEIseUJBQXlCO1FBQ3pCLGdCQUFnQjtRQUNoQixnQkFBZ0I7UUFDaEIsa0JBQWtCO0lBQ3RCOztJQUNBO1FBQ0ksMkJBQTJCO0lBQy9COztJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCOztJQUVBO0lBQ0EsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2I7O0lBQ0o7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLHNCQUFzQjs7QUFFMUI7O0lBQ0E7QUFDQSxlQUFlO0FBQ2Y7O0lBQ0E7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztJQUNBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQiw2QkFBNkI7SUFDN0Isa0JBQWtCO0FBQ3RCOztJQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztJQUNBO0lBQ0ksWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2Ysc0JBQXNCO0FBQzFCOztJQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsYUFBYTs7O0FBR2pCOztJQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLFdBQVc7QUFDZiIsImZpbGUiOiJuZXctYWRtaXNzaW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFubmVye1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDogNTBweDtcclxufVxyXG5cclxuICAgIC5jb250YWluZXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgZ3JlZW47XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGJvcmRlci1zdHlsZTogcm91bmQ7XHJcbiAgICB9IFxyXG4gICAgI2ZpbGVkc3tcclxuICAgICAgICBcclxuICAgICAgICBwYWRkaW5nOnB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjRweDtcclxuICAgICAgICAvKiBwYWRkaW5nLXJpZ2h0OiAyMnB4OyAqL1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OjBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7IFxyXG4gICAgfVxyXG4gICAgYm9keXtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XHJcbiAgICB9XHJcbiAgICAuaW5zdHJ1Y3Rpb257XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDQwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5idG5Sb3d7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIH1cclxuLmJ0bkNvbGx7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgLyogbWFyZ2luLXRvcDogNi42JTsgKi9cclxuICAgIFxyXG59XHJcbi5idG57XHJcbm1hcmdpbi1sZWZ0OiA0JTtcclxufVxyXG4jcmFkaW9idXR0b257XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDNweDtcclxuICAgIG1hcmdpbi1yaWdodDogNHB4O1xyXG59XHJcbiNzZWxlY3RfZGF0ZXtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxufVxyXG4uZGF0YVJvd3tcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTVFN0U5O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuLnBhZ2luZXh0e1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgYm9yZGVyOjJweCBzb2xpZCBibHVlO1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogR1JBWTtcclxufVxyXG5cclxuLm5hdi1saW5re1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIzcHg7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBjb2xvciA6IHdoaXRlO1xyXG4gICAgXHJcbiAgICBcclxufVxyXG4ubmF2LWl0ZW17XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufSJdfQ== */";

/***/ }),

/***/ 3273:
/*!******************************************************************************!*\
  !*** ./src/app/views/admin-panel/register/register.component.css?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "\n    .btn-neutral,.btn-neutral:focus,.btn-neutral:hover {\n      background-color: #FFFFFF;\n      color: #f96332;\n    }\n    .spinner{\n      position: absolute  ;\n      height: 100%;\n      width: 100%;\n      opacity: 0.8;\n      top :50%;\n      left: 46.5%;\n      \n    }\n    .spinner-border{\n      height: 100px;\n      width: 100px;\n      border-width: 0.5rem;\n      \n    }\n    .form-container{\n    margin: 10px 0px 20px 0px;\n   }\n    .form-control{\n    background-color: #f8f9fa;\n    color: #FFFFFF;\n    /* border-radius: 25px; */\n    border: none;\n    font-size: 14px;\n    color: black;\n   }\n    .signup-form{\n    background-color: #213d77;\n    height: auto;\n    width: 370px;\n    margin: auto;\n    padding: 20px;\n    border-radius: 8px;\n    \n   }\n    .signup-form, h2{\n    color: #FFFF;\n  }\n    /* .login-form, .Header-text{\n    color: rgb(233, 142, 5) !important;\n  } */\n    .inside-form .font_white{\n  color: #ffff;\n  }\n    .signup-form, .signup, p{\n    text-align: center;\n    margin-top: 8px;\n  }\n    input[type=\"file\"]{\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtJQUNJO01BQ0UseUJBQXlCO01BQ3pCLGNBQWM7SUFDaEI7SUFDQTtNQUNFLG9CQUFvQjtNQUNwQixZQUFZO01BQ1osV0FBVztNQUNYLFlBQVk7TUFDWixRQUFRO01BQ1IsV0FBVzs7SUFFYjtJQUNBO01BQ0UsYUFBYTtNQUNiLFlBQVk7TUFDWixvQkFBb0I7O0lBRXRCO0lBR0Y7SUFDRSx5QkFBeUI7R0FDMUI7SUFDQTtJQUNDLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixlQUFlO0lBQ2YsWUFBWTtHQUNiO0lBQ0Q7SUFDRSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjs7R0FFbkI7SUFDQTtJQUNDLFlBQVk7RUFDZDtJQUNBOztLQUVHO0lBQ0g7RUFDQSxZQUFZO0VBQ1o7SUFFQTtJQUNFLGtCQUFrQjtJQUNsQixlQUFlO0VBQ2pCO0lBQ0E7RUFDQSxhQUFhO0FBQ2YiLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIC5idG4tbmV1dHJhbCwuYnRuLW5ldXRyYWw6Zm9jdXMsLmJ0bi1uZXV0cmFsOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gICAgICBjb2xvcjogI2Y5NjMzMjtcbiAgICB9XG4gICAgLnNwaW5uZXJ7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGUgIDtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgb3BhY2l0eTogMC44O1xuICAgICAgdG9wIDo1MCU7XG4gICAgICBsZWZ0OiA0Ni41JTtcbiAgICAgIFxuICAgIH1cbiAgICAuc3Bpbm5lci1ib3JkZXJ7XG4gICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgYm9yZGVyLXdpZHRoOiAwLjVyZW07XG4gICAgICBcbiAgICB9XG5cblxuICAuZm9ybS1jb250YWluZXJ7XG4gICAgbWFyZ2luOiAxMHB4IDBweCAyMHB4IDBweDtcbiAgIH1cbiAgIC5mb3JtLWNvbnRyb2x7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICAvKiBib3JkZXItcmFkaXVzOiAyNXB4OyAqL1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgfVxuICAuc2lnbnVwLWZvcm17XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxM2Q3NztcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDM3MHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBcbiAgIH1cbiAgIC5zaWdudXAtZm9ybSwgaDJ7XG4gICAgY29sb3I6ICNGRkZGO1xuICB9XG4gIC8qIC5sb2dpbi1mb3JtLCAuSGVhZGVyLXRleHR7XG4gICAgY29sb3I6IHJnYigyMzMsIDE0MiwgNSkgIWltcG9ydGFudDtcbiAgfSAqL1xuICAuaW5zaWRlLWZvcm0gLmZvbnRfd2hpdGV7XG4gIGNvbG9yOiAjZmZmZjtcbiAgfVxuICBcbiAgLnNpZ251cC1mb3JtLCAuc2lnbnVwLCBwe1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gIH1cbiAgaW5wdXRbdHlwZT1cImZpbGVcIl17XG4gIGRpc3BsYXk6IG5vbmU7XG59Il19 */";

/***/ }),

/***/ 2698:
/*!*********************************************************************************!*\
  !*** ./src/app/views/admin-panel/dashboard/dashboard.component.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Document</title>\n</head>\n<body>\n    \n</body>\n</html>";

/***/ }),

/***/ 8182:
/*!*********************************************************************************!*\
  !*** ./src/app/views/admin-panel/fltreport/fltreport.component.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"container\">\n    <h4>Faculty Report</h4>\n    <hr>\n    <div class=\"row\">\n        <div id=\"fileds\" class=\"col-sm-3\">\n            <label for=\"EMT_Id\" class=\"col-sm-8 col-form-label\">Fiter By Id</label>\n            <div class=\"col-sm-12\">\n                <input [(ngModel)]=\"std_id\" type=\"text\" (keyup)='search($event.target.value)' class=\"form-control\"\n                    placeholder=\"Enter Student Id\" name=\"std_id\">\n            </div>\n            <!-- {{logedInUser.userEmail |json}} -->\n        </div>\n        <div id=\"fileds\" class=\"col-sm-3\">\n            <label for=\"EMT_Id\" class=\"col-sm-8 col-form-label\">Filter By Name</label>\n            <div class=\"col-sm-12\">\n                <input [(ngModel)]=\"std_name\" type=\"text\" class=\"form-control\" placeholder=\"Enter Student Name\"\n                    name=\"std_email\">\n            </div>\n        </div>\n        <div class=\"btnColl col-sm-2 form-control\">\n            <button class=\"btn btn-primary\" (click)=\"filter($event)\">Filter</button>\n        </div>\n        <div class=\"btnColl col-sm-2 form-control\">\n            <button class=\"btn btn-primary\">Export</button>\n        </div>\n    </div>\n    <hr>\n    <div class=\"row\">\n        <div id=\"fileds\" class=\"col-sm-10\">\n            <p style=\"float:left\"> Total Result: {{numerOfResult}}</p>\n        </div>\n        <div id=\"newAddbutton\" class=\"col-sm-2\">\n            <button (click)=\"movetoAddFaculty()\" class=\"btn btn-primary\">New Faculty</button>\n        </div>\n    </div>\n    <!-- data row -->\n    <div class=\"dataRow table-responsive\">\n        <table class=\"table\">\n            <thead>\n                <tr>\n                    \n                    <th>ID</th>\n                    <th>Actions</th>\n                    <th>User Email</th>\n                    <th>Usere Type</th>\n                    <th>Usere Photo</th>\n                    \n                </tr>\n            </thead>\n            <tbody>\n                <!-- {{Data[0]._id | json}} -->\n                <tr *ngFor=\"let data of userData\">\n                 \n                    <td>{{data._id}}</td>\n                    <td><i class=\"fa fa-edit\" style=\"font-size:25px;color:rgb(23, 98, 196);cursor: pointer;\"> </i>\n                        <i class=\"fa fa-trash-o\" (click)=\"delete(data)\"\n                            style=\"font-size:25px;color:rgb(252, 55, 55);cursor: pointer; margin-left: 3px;\">\n                        </i>\n                    </td>\n                    <td>{{data.userEmail}}</td>\n                    <td>{{data.userType}}</td>\n                    <td>{{data.userPhoto}}</td>\n\n                </tr>\n            </tbody>\n\n        </table>\n        <!-- Pagination -->\n        <!-- <template *ngIf=\"data.lenght < 0\">\n            No result found\n        </template> -->\n\n    </div>\n    <div class=\"paginate text-right\">\n        <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n    </div>\n    <div>\n        <!-- {{AllData}} -->\n    </div>\n</div>";

/***/ }),

/***/ 6317:
/*!*************************************************************************!*\
  !*** ./src/app/views/admin-panel/login/login.component.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"form-container\">\n  <!-- <button type=\"button\" class=\"btn btn-link\" click=\"history.back()\">Back To Home</button> -->\n \n  <h2 class=\"Header-text text-center\">Welcome to the Maharashi Valmiki Vidya Peeth Inter College</h2>\n  <p style=\"text-align: center; color: orangered;\"><i>BhaisaTiker Sant Kabir Nagar UP- 272165.</i></p>\n  <div class=\"row login-form\">\n        <form method=\"POST\" [formGroup]=\"loginForm\">\n          <div class=\"inside-form\">\n            <div *ngIf=\"responseMsg\" class=\"alert alert-danger alert-dismissible\">\n              <strong>{{msg}}</strong> Failed\n            </div>\n            <h2 class=\"font_white text-center\">LOG IN</h2>\n            <div class=\"row\">\n              <div id=\"fileds\" class=\"col-sm-12 form-group\">\n                <select class=\"form-control\" name=\"std_department\" formControlName=\"userType\" required>\n                  <option value=\"\" selected>User Type</option>\n                  <option value=\"admin\">Admin</option>\n                  <option value=\"faculty\">Faculty</option>\n                </select>\n              </div>\n              <span style=\"margin: 0px 0px 9px 16px; color: red;\" *ngIf=\"isValid('userType')\">Invalid User Type</span>\n\n              <div id=\"fileds\" class=\"col-sm-12 form-group\">\n                <input type=\"email\" class=\"form-control\" name=\"email\" placeholder=\"Email...\" formControlName=\"userEmail\" required>\n              </div>\n              <span style=\"margin: 0px 0px 9px 16px; color: red;\" *ngIf=\"isValid('userEmail')\">Invalid User Email</span>\n              <div id=\"fileds\" class=\"col-sm-12 form-group\">\n                <input type=\"password\" class=\"form-control\" name=\"Password\" placeholder=\"Password...\" formControlName=\"userPassword\" required>\n              </div>\n              <span style=\"margin: 0px 0px 9px 16px; color: red;\" *ngIf=\"isValid('userPassword')\">Invalid Password</span>\n\n                <div class=\"col-sm-12 submit form-group\">\n                  <button class=\"btn  btn-primary\" [disabled]=\"!loginForm.valid\" (click)=\"logIn()\">Submit</button>\n                </div>\n                <div class=\"col-sm-6 signup form-group\">\n                  <!-- <button class=\"btn  btn-primary\" (click)=\"moveToRegiter()\">Sign Up</button> -->\n                  <p style=\"text-align: center;\">Don't have an account ?</p>\n                </div>\n                <div class=\"col-sm-6 signup form-group\">\n                  <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"moveToRegiter()\">Register Now</button>\n                </div>\n               <div  *ngIf=\"loaderService.isLoading | async\" class=\"spinner\">\n                 <div class=\"spinner-border text-success\">{{msg}}</div>\n               </div>\n               \n            </div>\n            <!-- <div class=\"input-group\">\n              <select class=\"select-class form-control\" formControlName=\"userType\">\n                <option default>Select User Type</option>\n                <option>Admin</option>\n                <option>Faculty</option>\n              </select>\n            </div> -->\n            <!-- <span *ngIf=\"isValid('userType')\">Invalid User Type</span>\n            <div class=\"input-group\">\n              <input type=\"email\" class=\"form-control\" formControlName=\"userEmail\" name=\"text\"\n                placeholder=\"Email Id...\">\n            </div>\n           \n\n            <div class=\"input-group\">\n              <input type=\"password\" class=\"form-control\" formControlName=\"userPassword\" name=\"Password\"\n                placeholder=\"Password...\">\n            </div>\n            <span *ngIf=\"isValid('userPassword')\">Invalid Password</span>\n\n            <div class=\"footer text-center\">\n              <a (click)=\"logIn()\" class=\"btn btn-neutral btn-round btn-lg\">Login</a>\n            </div>\n            <p style=\"text-align: center;\">Don't have an account ?</p>\n           <input type=\"checkbox\" [value]=\"checked\"> \n            <div class=\"footer text-center\">\n              <a (click)=\"moveToRegiter()\" class=\"btn btn-neutral btn-round btn-lg\">Register Now</a>\n            </div>\n            <div  *ngIf=\"loaderService.isLoading | async\" class=\"spinner\">\n              <div class=\"spinner-border text-success\"></div>\n            </div>\n            <div *ngIf=\"responseMsg\" class=\"alert alert-danger alert-dismissible\">\n              <strong>{{msg}}</strong> Failed\n            </div> -->\n          </div>\n\n        </form>\n  </div>\n\n</div>\n";

/***/ }),

/***/ 6650:
/*!*****************************************************************************************!*\
  !*** ./src/app/views/admin-panel/new-admission/new-admission.component.html?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"container\">\n    <h4>Admission Form</h4>\n    <!-- <hr style=\"border-top: 1.5px solid #eee;\"> -->\n\n    <hr style=\"border-top: 1.5px solid #eee; width:98%;\">\n\n    <!-- first row -->\n    <form method=\"POST\" [formGroup]=\"addmissionForm\">\n        <!-- {{admissionForm.value | json}} -->\n        <!-- <div *ngIf=\"successMsg\" class=\"alert alert-success\">\n            <strong>{{msg}}</strong> Data Successfuly saved..!\n        </div> -->\n        <div *ngIf=\"successMsg\" class=\"alert alert-success alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            <strong>{{msg}}</strong> Data Successfuly saved.\n          </div>\n          <div *ngIf=\"errorMsg\" class=\"alert alert-danger alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            <strong>{{msg}}</strong> Failed\n          </div>\n       \n        <div class=\"row\">\n            <div id=\"fileds\" class=\"col-sm-6 form-group\">\n                <label for=\"std_name\" class=\"col-sm-8 col-form-label\">*Student Name</label>\n                <div class=\"col-sm-12\">\n                    <input formControlName=\"std_name\" type=\"text\" class=\"form-control\"  name=\"std_name\"\n                        placeholder=\"Enter the full name\" required>\n                    <!-- <span class=\"text-danger\"\n                        *ngIf=\"(addmissionForm.value.touched || addmissionForm.submitted) && std_name.errors?.required\">\n                        Name is required\n                    </span> -->\n                </div>\n            </div>\n            <div id=\"fileds\" class=\"col-sm-6 form-group\">\n                <label for=\"Fathers Name\" class=\"col-sm-8 col-form-label\">*Father's Name</label>\n                <div class=\"col-sm-12\">\n                    <input formControlName=\"std_father\" type=\"text\" class=\"form-control\"  name=\"std_father\"\n                        placeholder=\"Enter the Father Name\" required>\n                    <!-- <span class=\"text-danger\"\n                        *ngIf=\"(std_father.touched || admissionForm.submitted) && std_father.errors?.required\">\n                        Father's name is required\n                    </span> -->\n                </div>\n            </div>\n\n        </div>\n        <!-- second row -->\n        <div class=\"row\">\n            <div id=\"fileds\" class=\"col-sm-6 form-group\">\n                <label for=\"Fathers Name\" class=\"col-sm-8 col-form-label\">*Mother's Name</label>\n                <div class=\"col-sm-12\">\n                    <input formControlName=\"std_mother\" type=\"text\" class=\"form-control\"  name=\"std_mother\"\n                        placeholder=\"Enter the Mother Name\"  required>\n                    <!-- <span class=\"text-danger\"\n                        *ngIf=\"(std_mother.touched || admissionForm.submitted) && std_mother.errors?.required\">\n                        Mother's name is required\n                    </span> -->\n                </div>\n            </div>\n            <div id=\"fileds\" class=\"col-sm-6 form-group\">\n                <label for=\"From_date\" class=\"col-sm-12 col-form-label\">*Date of Birth</label>\n                <div class=\"col-sm-12\">\n                    <input formControlName=\"std_dob\" type=\"date\" id=\"select_date\" class=\"form-control\" name=\"std_dob\"\n                        placeholder=\" Date of Birth\" required>\n                    <!-- <span class=\"text-danger\" *ngIf=\"(std_dob.touched || admissionForm.submitted) && std_dob.errors?.required\">\n                        Date of birth is required\n                    </span> -->\n                </div>\n                <!-- {{std_dob}} -->\n            </div>\n\n        </div>\n        <!-- 3rd row -->\n\n        <div class=\"row\">\n            <div id=\"fileds\" class=\"col-sm-6 form-group\">\n                <label for=\"Department\" class=\"col-sm-12 col-form-label\">*Select Department</label>\n                <div class=\"col-sm-12\">\n                    <select formControlName=\"std_department\" class=\"form-control\" name=\"std_department\"\n                       required>\n                        <option>Select</option>\n                        <option>BSc</option>\n                        <option>Commerce</option>\n                        <option>Arts</option>\n                    </select>\n                    <!-- <span class=\"text-danger\"\n                        *ngIf=\"(std_department.touched || admissionForm.submitted) && std_department.errors?.required\">\n                        Department is required\n                    </span> -->\n                </div>\n                <!-- {{std_department}} -->\n            </div>\n            <div id=\"fileds\" class=\"col-sm-6 form-group\">\n                <label for=\"EMT_Id\" class=\"col-sm-12 col-form-label\">*Mobile Number</label>\n                <div class=\"col-sm-12\">\n                    <input formControlName=\"std_mobile\" type=\"text\" class=\"form-control\" id=\"EMT_Id\"\n                        placeholder=\"Enter the Mobile Number\" name=\"std_mobile\"  required>\n                    <!-- <span class=\"text-danger\"\n                        *ngIf=\"(std_mobile.touched || admissionForm.submitted) && std_mobile.errors?.required\">\n                        Mobile number is required\n                    </span> -->\n                </div>\n                <!-- {{std_mobile}} -->\n            </div>\n            <div id=\"fileds\" class=\"col-sm-6 form-group\">\n                <label for=\"EMT_Id\" class=\"col-sm-12 col-form-label\">*Address</label>\n                <div class=\"col-sm-12\">\n                    <input formControlName=\"std_address\" type=\"text\" class=\"form-control\" placeholder=\"Enter the Address\"\n                        name=\"std_address\"  required>\n                    <!-- <span class=\"text-danger\"\n                        *ngIf=\"(std_address.touched || admissionForm.submitted) && std_address.errors?.required\">\n                        Address is required\n                    </span> -->\n                </div>\n            </div>\n            <!-- 4th row -->\n            <div id=\"fileds\" class=\"col-sm-6 form-group\">\n                <label for=\"EMT_Id\" class=\"col-sm-8 col-form-label\">Email</label>\n                <div class=\"col-sm-12\">\n                    <input formControlName=\"std_email\" type=\"text\" class=\"form-control\" placeholder=\"Enter the Email\"\n                        name=\"std_email\">\n                </div>\n            </div>\n            <div class=\"btnColl col-sm-6 form-group\">\n                <div class=\"col-sm-12\">\n                    <button class=\"btn btn-primary\" [disabled]=\"!addmissionForm.valid\"\n                        (click)=\"onSubmit()\">Submit</button>\n                </div>\n            </div>\n        </div>\n    </form>\n</div>";

/***/ }),

/***/ 1735:
/*!*******************************************************************************!*\
  !*** ./src/app/views/admin-panel/register/register.component.html?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = "<!-- <div class=\"container-fluid stylish-form\">\n    <div  *ngIf=\"loaderService.isLoading | async\" class=\"spinner\">\n        <div class=\"spinner-border text-success\"></div>\n      </div>\n    <h2 class=\"text-center\">Welcome to the Maharashi Valmiki Vidya Peeth Inter College</h2>\n    <p style=\"text-align: center;\"><i>BhaisaTiker Sant Kabir Nagar UP- 272165.</i></p>\n    <div class=\"row mar20\">\n        <div class=\"col-md-12 col-sm-12 col-xs-12\">\n            <div class=\"inner-section\">\n                <form method=\"POST\" [formGroup]=\"registerForm\">\n                    <div class=\"mar20 inside-form\">\n                        <h2 class=\"font_white text-center\">SIGN UP</h2>\n                        <ul>\n                <h1>Upload</h1>\n                <div>\n                    <input type=\"file\" name=\"profile\" (change)=\"onFileSelect($event)\" />\n                  </div>\n                  <div>\n                    <button type=\"submit\">Upload</button>\n                  </div>\n                  \n                            <li class=\"icon-holder dsp-flex\">\n                                <i (click)=\"logIn()\" class=\"fa fa-google\"></i>\n                            </li>\n                        </ul>\n                        <div class=\"input-group\">\n                            <span class=\"input-group-addon\"><i class=\"fa fa-pencil \"></i></span>\n                            <select class=\"form-control\" formControlName=\"userType\" name=\"select\">\n\n                                <option default>admin</option>\n                                <option>faculty</option>\n                            </select>\n                        </div>\n                        <span *ngIf=\"isValid('userName')\">Invalid User Name</span>\n                        <div class=\"input-group\">\n                            <span class=\"input-group-addon\"><i class=\"fa fa-lock\"></i></span>\n                            <input type=\"text\" class=\"form-control\" formControlName=\"userName\" name=\"text\"\n                                placeholder=\"User Name...\">\n                        </div>\n                        <span *ngIf=\"isValid('userName')\">Invalid User Name</span>\n\n                        <div class=\"input-group\">\n                            <span class=\"input-group-addon\"><i class=\"fa fa-envelope \"></i></span>\n                            <input type=\"email\" class=\"form-control\" formControlName=\"userEmail\" name=\"text\"\n                                placeholder=\"Email Id...\">\n                        </div>\n                        <span *ngIf=\"isValid('userEmail')\">Invalid User Email</span>\n\n                        <div class=\"input-group\">\n                            <span class=\"input-group-addon\"><i class=\"fa fa-lock \"></i></span>\n                            <input type=\"password\" class=\"form-control\" formControlName=\"userPassword\" name=\"text\"\n                                placeholder=\"Password...\">\n                        </div>\n                        <span *ngIf=\"isValid('userPassword')\">Invalid Password</span>\n\n                        <div class=\"input-group\">\n                            <span class=\"input-group-addon\"><i class=\"fa fa-lock \"></i></span>\n                            <input type=\"password\" class=\"form-control\" name=\"text\" formControlName=\"cnfPassword\"\n                                placeholder=\"Confirm Password...\">\n                        </div>\n                        <span *ngIf=\"isValid('cnfPassword')\">Password did not match</span>\n\n                        <div class=\"footer text-center\">\n                            <a (click)=\"register()\" routerLinkActive=\"active\"\n                                class=\"btn btn-neutral btn-round btn-lg\">Signup</a>\n                        </div>\n                        <div *ngIf=\"successMsg\" class=\"alert alert-success alert-dismissible\">\n                            <strong>{{msg}}</strong>\n                          </div>\n                          <div *ngIf=\"errorMsg\" class=\"alert alert-danger alert-dismissible\">\n                            <strong>{{msg}}</strong>\n                          </div>\n                        <div class=\"footer text-center\">\n                            <a (click)=\"moveToLogin()\"  routerLinkActive=\"active\"\n                                class=\"btn btn-neutral btn-round btn-lg\">Login</a>\n                        </div>\n                    </div>\n\n                </form>\n            </div>\n        </div>\n\n    </div>\n\n</div> -->\n\n<div class=\"form-container\">\n    <div class=\"row signup-form\">\n          <form method=\"POST\" [formGroup]=\"registerForm\">\n            <div class=\"inside-form\">\n                <div class=\"row\">\n                      <div class=\"col-sm-12 form-group\">\n                        <h2 class=\"font_white text-center\">Signup </h2>\n                        <button className=\"btnUpload\" style=\"height: 100px; width: 102px; border-radius: 50%;\">\n                          <input type=\"file\" >Upload\n                        </button>\n                      </div>\n                  </div>\n              \n              \n              <div class=\"row\">\n                <div id=\"fileds\" class=\"col-sm-12 form-group\">\n                  <select class=\"form-control\" name=\"std_department\" formControlName=\"userType\" required>\n                    <option value=\"\" selected>User Type</option>\n                    <option value=\"admin\">Admin</option>\n                    <option value=\"faculty\">Faculty</option>\n                  </select>\n                </div>\n                <span style=\"margin: 0px 0px 9px 16px; color: red;\" *ngIf=\"isValid('userType')\">Invalid User Type</span>\n  \n                <div id=\"fileds\" class=\"col-sm-12 form-group\">\n                    <input type=\"text\" class=\"form-control\" formControlName=\"userName\" name=\"text\"\n                    placeholder=\"User Name...\">\n                </div>\n                <span style=\"margin: 0px 0px 9px 16px; color: red;\" *ngIf=\"isValid('userName')\">Invalid User Name</span>    \n                <div id=\"fileds\" class=\"col-sm-12 form-group\">\n                    <input type=\"email\" class=\"form-control\" formControlName=\"userEmail\" name=\"text\"placeholder=\"Email Id...\">\n                </div>\n                <span style=\"margin: 0px 0px 9px 16px; color: red;\" *ngIf=\"isValid('userEmail')\">Invalid User Email</span>    \n            \n                <div id=\"fileds\" class=\"col-sm-12 form-group\">\n                  <input type=\"password\" class=\"form-control\" name=\"Password\" placeholder=\"Password...\" formControlName=\"userPassword\" required>\n                </div>\n                <span style=\"margin: 0px 0px 9px 16px; color: red;\" *ngIf=\"isValid('userPassword')\">Invalid Password</span>\n\n                 <div id=\"fileds\" class=\"col-sm-12 form-group\">\n                    <input type=\"password\" class=\"form-control\" name=\"text\" formControlName=\"cnfPassword\"\n                    placeholder=\"Confirm Password...\">\n                </div>\n                <span style=\"margin: 0px 0px 9px 16px; color: red;\" *ngIf=\"isValid('cnfPassword')\">Password did not match</span>\n                \n                  <div *ngIf=\"successMsg\" class=\"alert alert-success alert-dismissible\">\n                    <strong>{{msg}}</strong>\n                  </div>\n                  <div *ngIf=\"errorMsg\" class=\"alert alert-danger alert-dismissible\">\n                    <strong>{{msg}}</strong>\n                  </div>\n\n\n                  <div class=\"col-sm-12 submit form-group\">\n                    <button class=\"btn  btn-primary\" [disabled]=\"!registerForm.valid\" (click)=\"register()\">Submit</button>\n                  </div>\n\n                  <div class=\"col-sm-6 signup form-group\">\n                    <p style=\"text-align: center;\">Don't have an account ?</p>\n                  </div>\n                  <div class=\"col-sm-6 signup form-group\">\n                    <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"moveToLogin()\">Login Now</button>\n                  </div>\n                 <!-- <div  *ngIf=\"loaderService.isLoading | async\" class=\"spinner\">\n                   <div class=\"spinner-border text-success\">{{msg}}</div>\n                 </div>\n                  <div *ngIf=\"responseMsg\" class=\"alert alert-danger alert-dismissible\">\n                    <strong>{{msg}}</strong> Failed\n                  </div> -->\n              </div>\n             \n            </div>\n  \n          </form>\n    </div>\n  \n  </div>\n  ";

/***/ })

}]);
//# sourceMappingURL=src_app_views_admin-panel_admin-panel_module_ts.js.map