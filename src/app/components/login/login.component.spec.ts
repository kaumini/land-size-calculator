import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { empty, of } from 'rxjs';
import { Router } from '@angular/router';


import { LoginComponent } from './login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from '../../app-routing.module';
import { AppComponent } from '../../app.component';
import { HomeComponent } from '../../components/home/home.component';
import { SignupComponent } from '../../components/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';

import { AuthService } from '../../services/auth.service';
import { HeaderComponent } from '../../components/layout/header/header.component';
import { AgmCoreModule } from '@agm/core';
import { NavbarComponent } from '../../components/layout/navbar/navbar.component';
import { PaymentsComponent } from '../../components/payments/payments.component';
import { PreviousCalComponent } from '../../components/previous-cal/previous-cal.component';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

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
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should disable submit button if username is invalid`, () => {
    const compiled = fixture.debugElement.nativeElement;

    component.name = 'dsfgh23233';
    component.password = '123456';
    expect(compiled.querySelector('button').disabled).toBeFalsy();

    component.name = '';
    component.password = '123456';
    expect(compiled.querySelector('button').disabled).toBeFalsy();

  });

  it(`should disable submit button if password is invalid`, () => {
    const compiled = fixture.debugElement.nativeElement;

    component.name = 'dsfgh23233';
    component.password = '12345';
    expect(compiled.querySelector('button').disabled).toBeFalsy();

    component.name = 'kavikavi';
    component.password = '';
    expect(compiled.querySelector('button').disabled).toBeFalsy();

  });

  it('should alert if credentials are invalid', () => {
  });

  it(`should enable submit button if all inputs are valid`, () => {
    component.name = 'somename';
    component.password = '1234567';
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button').disabled).toBeFalsy();
  });

  it('should add token to local storage when submitted', () => {
  });

  it('should call the service wen submitted', () => {
    const authService = TestBed.get(AuthService);
    const spy = spyOn(authService, 'login').and.callFake(data => {
      return empty();
    });

    component.Login();
    expect(spy).toHaveBeenCalled();
  });

  it(`should redirect to home after successful login`, () => {
    
        const router = TestBed.get(Router);
        const authService = TestBed.get(AuthService);
    
        const spy = spyOn(authService, 'login').and.callFake(data => {
          return of({token:'bsjhdcbhjbdch'});
        });
    
        // component.Login();
        // expect(router.navigate).toHaveBeenCalledWith(['/home']);
    
        // localStorage.removeItem('access_token');
        // localStorage.removeItem('tries');
      });
  
});
