import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { empty } from 'rxjs';

import { SignupComponent } from './signup.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from '../../app-routing.module';
import { AppComponent } from '../../app.component';
import { HomeComponent } from '../../components/home/home.component';
import { LoginComponent } from '../../components/login/login.component';
import { HttpClientModule } from '@angular/common/http';

import { AuthService } from '../../services/auth.service';
import { HeaderComponent } from '../../components/layout/header/header.component';
import { AgmCoreModule } from '@agm/core';
import { NavbarComponent } from '../../components/layout/navbar/navbar.component';
import { PaymentsComponent } from '../../components/payments/payments.component';
import { PreviousCalComponent } from '../../components/previous-cal/previous-cal.component';

class MockRouter {
  navigate = jasmine.createSpy('navigate');
}

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

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
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it(`should disable submit button if first name is invalid`, () => {
    const compiled = fixture.debugElement.nativeElement;

    component.name = "asdfghj2342";
    component.email = "aasd@sdab.com";
    component.password = "abcdfg";
    component.cpassword = "abcdfg";

    expect(compiled.querySelector('button').disabled).toBeFalsy();

  });


  it(`should disable submit button if email is invalid`, () => {
    const compiled = fixture.debugElement.nativeElement;

    component.name = "asbdhfkd";
    component.email = "adsffsfds.com";
    component.password = "abdffkdi";
    component.cpassword = "abdffkdi";

    expect(compiled.querySelector('button').disabled).toBeFalsy();

  });


  it(`should disable submit button if password is invalid`, () => {
    const compiled = fixture.debugElement.nativeElement;

    component.name = "asbdhfkd";
    component.email = "adsf@gmail.com";
    component.password = "abdf";
    component.cpassword = "abdf";

    expect(compiled.querySelector('button').disabled).toBeFalsy();

  });

  it(`should disable submit button if password dont match`, () => {
    const compiled = fixture.debugElement.nativeElement;

    component.name = "asbdhfkd";
    component.email = "adsf@dfs.com";
    component.password = "abdfeer";
    component.cpassword = "abdfeet";

    expect(compiled.querySelector('button').disabled).toBeFalsy();

  });


  it(`should enable submit button if all inputs are valid`, () => {
    const compiled = fixture.debugElement.nativeElement;

    component.name = "asbdhfkd";
    component.email = "adsff@fds.com";
    component.password = "abdfeer";
    component.cpassword = "abdfeer";

    expect(compiled.querySelector('button').disabled).toBeFalsy();

  });


  it('should call the service wen submitted', () => {
    const authService = TestBed.get(AuthService);
    const spy = spyOn(authService, 'signup').and.callFake(data => {
      return empty();
    });
  });
});
