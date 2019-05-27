import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
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
import { HeaderComponent } from '../../../components/layout/header/header.component';
import { AgmCoreModule } from '@agm/core';
import { PaymentsComponent } from '../../../components/payments/payments.component';
import { PreviousCalComponent } from '../../../components/previous-cal/previous-cal.component';


describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

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
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should direct to previous cal page with cal button', () => {
  });

  it('should direct to payment page with buy button', () => {
  });

  it('should hide buy button for premium users', () => {
  });

  it('should clear local storage when logout', () => {
  });
});
