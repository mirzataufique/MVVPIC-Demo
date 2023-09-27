import { Component, OnInit, HostListener, Input } from '@angular/core';
import { AuthService } from '../../../Services/auth.service'
import { SocialAuthService, SocialUser } from "angularx-social-login";
import { UserService } from '../../../Services/user.service'
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user: SocialUser;
  loggedIn: boolean;
  dashboardForm: FormGroup;
  constructor(private authService: AuthService,
    private socialService: SocialAuthService,
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {

  }


  ngOnInit() {

  }


  navigateTo(curentUrl) {
    let url = "/admin/" + curentUrl;
    console.log(url);
    this.router.navigateByUrl(url);
  }

}
