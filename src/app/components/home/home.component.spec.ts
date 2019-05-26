import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from '../../app-routing.module';
import { AppComponent } from '../../app.component';
import { LoginComponent } from '../../components/login/login.component';
import { SignupComponent } from '../../components/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';

import { AuthService } from '../../services/auth.service';
import { HeaderComponent } from '../../components/layout/header/header.component';
import { AgmCoreModule } from '@agm/core';
import { NavbarComponent } from '../../components/layout/navbar/navbar.component';
import { PaymentsComponent } from '../../components/payments/payments.component';
import { NgxStripeModule } from 'ngx-stripe';
import { PreviousCalComponent } from '../../components/previous-cal/previous-cal.component';


describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

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
        NgxStripeModule.forRoot('pk_test_2fnIOolHoi0NEFUJmF1KXHp200SfxcJEwc'),
        AgmCoreModule.forRoot({
          apiKey: 'AIzaSyDAcszHq1T04XcAuNpguUvldlMW2xMLXa8 '
    
        })
      ],
      providers: [AuthService]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should add coordinate with map click', () => {
  });

  it('should remove last coordinate with delete last point button', () => {
  });

  it('should remove all coordinates with clear all button', () => {
  });

  it('should disable buttons when no points added', () => {
  });

  it('should call the service wen submitted', () => {
  });



});
