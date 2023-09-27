import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { UserService } from '../../../Services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
// import { SocialAuthService, SocialUser } from "angularx-social-login";
// import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
// import { NGXLogger } from 'ngx-logger';
import { LoggerService } from '../../../Services/logger.service'
import { LoaderService } from 'src/app/loader/loader.service';
import { ValidationService } from 'src/app/Services/validation.service';
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {
  // user: SocialUser;
  // loggedIn: boolean;
  loginForm: UntypedFormGroup;

  loginStatus = '0';
  loginUserType: string;
  currentUser;
  responseMsg;
  msg!: string;

  constructor(
    // private authService: AuthService, 
    private routes: Router, private activatedRoute: ActivatedRoute,
    // private socialService: SocialAuthService, 
    private userService: UserService,
    // private logger: NGXLogger,
    // private toastrService: ToastrService,
    public validationService: ValidationService,
    private customLogger: LoggerService,
    public loaderService: LoaderService) {
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
          this.userService.logedinUserDetails.next(result.user)
          localStorage.setItem('token', JSON.stringify(result.token));
          sessionStorage.setItem('loginStatus', this.loginStatus = '1');
          sessionStorage.setItem('loginUserType', result.user[0].userType);
          sessionStorage.setItem('logeninUserDetails', result.user);
          this.loginUserType = sessionStorage.getItem('loginUserType');
          console.log("===>", this.loginUserType)
          this.routes.navigateByUrl('admin/dashboard')
        },
          (error) => {
            console.log(error);
            this.customLogger.postLogToServer(error);
            this.responseMsg = error.statusText;
            console.log('response', this.responseMsg);
            this.routes.navigateByUrl('/admin/login');
          }, () => {
            console.log('Authentication completed');
          });
    }

  };

  ngOnInit() {
    this.loginForm = new UntypedFormGroup({
      userType: new UntypedFormControl(null, Validators.required),
      userEmail: new UntypedFormControl(null, Validators.email),
      userPassword: new UntypedFormControl(null, Validators.required)
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
    this.routes.navigate(['../register'], { relativeTo: this.activatedRoute })
  }
  moveToHomePage() {
    this.routes.navigate(['../home'], { relativeTo: this.activatedRoute })
  }
}
