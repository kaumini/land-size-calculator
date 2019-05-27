import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { NavbarComponent } from '../../../components/layout/navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from '../../../app-routing.module';
import { AppComponent } from '../../../app.component';
import { HomeComponent } from '../../../components/home/home.component';
import { LoginComponent } from '../../../components/login/login.component';
import { SignupComponent } from '../../../components/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';

import { AuthService } from '../../../services/auth.service';
import { AgmCoreModule } from '@agm/core';
import { PaymentsComponent } from '../../../components/payments/payments.component';
import { PreviousCalComponent } from '../../../components/previous-cal/previous-cal.component';


describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
        AgmCoreModule.forRoot({
          apiKey: 'AIzaSyDAcszHq1T04XcAuNpguUvldlMW2xMLXa8 '
    
        })
      ],
      providers: [AuthService]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should redirect to login page with login button', () => {
  });

  it('should redirect to signup page with signup button', () => {
  });
});
