import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './Services/auth.service';
import { SocialLoginModule, SocialAuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { InterceptorService } from './loader/interceptor.service';
import { DynamicPageComponent } from './views/dynamic-page/dynamic-page.component';
import { ContactUsComponent } from './views/contact-us/contact-us.component'

// const google_aouth_client_id: string = "1043334809034-h3gck3cp5c2boggj9hg5dhrl172fr5ms.apps.googleusercontent.com";

@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    DynamicPageComponent,
    ContactUsComponent
    
    // NewAdmissionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    NgxPaginationModule,
    SocialLoginModule,
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
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true, },
  {
    provide: 'SocialAuthServiceConfig',

    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider('1043334809034-h3gck3cp5c2boggj9hg5dhrl172fr5ms.apps.googleusercontent.com'),
        },
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider('960288311068672'),
        },
      ], AuthService,
    } as SocialAuthServiceConfig,
  },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
