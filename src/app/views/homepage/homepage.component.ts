import { Component, OnInit, HostListener, Input } from '@angular/core';
import { AuthService } from '../../Services/auth.service'
import { SocialAuthService, SocialUser } from "angularx-social-login";
import { UserService } from '../../Services/user.service'
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  state: string = 'default';

  rotate(direction) {
    console.log("direction",direction);
    if(direction === 'left'){
      console.log("left clicked")
      this.state = (this.state === 'default' ? 'rotatedleft' : 'default');
      console.log("state",this.state)
    }
    if(direction === 'right'){
      console.log("right clicked")
      this.state = (this.state === 'default' ? 'rotatedright' : 'default');
      console.log("state",this.state)
    }
      
  }


  adminMenus = false;
  HideimgSlidder= true;
  facultyMenues = false;
  loginStatus = false;  
  HideLoginBtn = true;
  loginProfile = false;
  isActiveSlids = true
  loggedIn: boolean;
  user: SocialUser;
  isSticky: boolean = false;

  constructor(private authService: AuthService, private socialService: SocialAuthService, private userService: UserService, private routes: Router, private activatedRoute: ActivatedRoute) {
    this.socialService.authState.subscribe((user) => {
      this.user = user;
      console.log("email users", this.user);
      this.loggedIn = (user != null);

    });

  }


  // menuItems = ['HOME','ABOUT US','ACADEMICS','ACTIVITIES','DMISSION & EXAMS','Admission','Exams' ];


  adminDashBoard :Boolean;
  
  ngOnInit() {
    console.log("hiii",window.location.href)
    if(window.location.href === 'http://localhost:4200/home'){
        this.HideimgSlidder = false;
    }else{
      this.adminDashBoard = true
    }
    if(sessionStorage.getItem('loginStatus') === '1'){
      console.log("inside if")
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
      console.log("userType in home page", loginUserType)
    }
    
  }


  

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 250;
  }
  logout() {
    console.log("logout clicked")
    localStorage.removeItem('token');
    sessionStorage.removeItem('userType')
    sessionStorage.removeItem('loginStatus')
    this.routes.navigate(['/login'])
    alert("Sucessfully Loged Out")
  }
  signOut(): void {
    this.authService.signOut();
  }

  // rotateElem() {
  //   document.querySelector('.box').style.transform = 'rotate(90deg)';
  // }
}
