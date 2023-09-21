import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './Services/auth.service';
import { UserService } from './Services/user.service';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'mvvpic';
  adminMenus = false;
  HideimgSlidder = true;
  facultyMenues = false;
  loginStatus = false;
  HideLoginBtn = true;
  loginProfile = false;
  isActiveSlids = true
  loggedIn: boolean;
  // user: SocialUser;
  logedinUserDetails: any;
  currentDateTime: any;
  subscription: Subscription;

  constructor(
    private authService: AuthService,
    private routes: Router,
    private userService: UserService,
    // private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute) {

  }

  ngOnInint() {
    console.log("logedin sts ",sessionStorage.getItem('loginStatus'))
  }

  // url = document.URL;
  // red = (url.substring(url.lastIndexOf('=') + 1));
  // window.location.replace("https://api.whatsapp.com/send?text=" + red);

  ngAfterViewChecked() {
    this.userService.logedinUserDetails.subscribe((data: any) => {
      this.logedinUserDetails = data[0];
    })

    if (sessionStorage.getItem('loginStatus') === '1') {
      // console.log("inside if", this.logedinUserDetails)
      let loginUserType = this.logedinUserDetails?.userType;//sessionStorage.getItem('loginUserType');
      setInterval(() => {
        this.currentDateTime = new Date()
      }, 1000)
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
    } else {
      // console.log("inside else");

      this.adminMenus = false;
      this.HideLoginBtn = true;
      this.loginProfile = false;
    }
  }
  ngAfterViewInit() {


  }
  logout() {
    console.log("logout clicked")
    localStorage.removeItem('token');
    sessionStorage.removeItem('userType')
    sessionStorage.removeItem('loginStatus')
    this.adminMenus = false;
    this.loginProfile = false
    this.routes.navigate(['./home'])
    // this.toastrService.success("Successfully loged out")
    // alert("Sucessfully Loged Out")
  }
  signOut(): void {
    this.authService.signOut();
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
