import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';

import { AuthService } from './services/auth.service';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { AgmCoreModule } from '@agm/core';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { NgxStripeModule } from 'ngx-stripe';
import { PreviousCalComponent } from './components/previous-cal/previous-cal.component';
import { CalculationService } from './services/calculation.service';
import { PaymentsService } from './services/payments.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    HeaderComponent,
    NavbarComponent,
    PaymentsComponent,
    PreviousCalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxStripeModule.forRoot('pk_test_2fnIOolHoi0NEFUJmF1KXHp200SfxcJEwc'),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDAcszHq1T04XcAuNpguUvldlMW2xMLXa8 '

    })
  ],
  providers: [AuthService,CalculationService,PaymentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
