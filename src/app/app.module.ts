import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';

import { AuthService } from './services/auth.service';
import { HomeComponent } from './components/home/home.component';
import { PaymentComponent } from './payment/payment.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { AgmCoreModule } from '@agm/core';
import { NavbarComponent } from './components/layout/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    PaymentComponent,
    HeaderComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDAcszHq1T04XcAuNpguUvldlMW2xMLXa8 '

    })
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
