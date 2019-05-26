import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousCalComponent } from './previous-cal.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from '../../app-routing.module';
import { AppComponent } from '../../app.component';
import { HomeComponent } from '../../components/home/home.component';
import { LoginComponent } from '../../components/login/login.component';
import { SignupComponent } from '../../components/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';

import { AuthService } from '../../services/auth.service';
import { HeaderComponent } from '../../components/layout/header/header.component';
import { AgmCoreModule } from '@agm/core';
import { NavbarComponent } from '../../components/layout/navbar/navbar.component';
import { PaymentsComponent } from '../../components/payments/payments.component';
import { NgxStripeModule } from 'ngx-stripe';

describe('PreviousCalComponent', () => {
  let component: PreviousCalComponent;
  let fixture: ComponentFixture<PreviousCalComponent>;

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
    fixture = TestBed.createComponent(PreviousCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the service when submitted', () => {
  });
});
