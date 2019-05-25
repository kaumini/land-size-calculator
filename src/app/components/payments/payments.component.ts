import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { StripeService, Elements, Element as StripeElement, ElementsOptions } from "ngx-stripe";
import { PaymentsService } from '../../services/payments.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {

  elements: Elements;
  card: StripeElement;
 
  // optional parameters
  elementsOptions: ElementsOptions = {
    locale: 'es'
  };
 
  stripeTest: FormGroup;
 
  constructor(
    private fb: FormBuilder,
    private payment: PaymentsService,
    private stripeService: StripeService,
    private router: Router) {}
 
  ngOnInit() {
    this.stripeTest = this.fb.group({
      name: ['', [Validators.required]]
    });
    this.stripeService.elements(this.elementsOptions)
      .subscribe(elements => {
        this.elements = elements;
        // Only mount the element the first time
        if (!this.card) {
          this.card = this.elements.create('card', {
            style: {
              base: {
                iconColor: '#666EE8',
                color: '#31325F',
                lineHeight: '40px',
                fontWeight: 300,
                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                fontSize: '18px',
                '::placeholder': {
                  color: '#CFD7E0'
                }
              }
            }
          });
          this.card.mount('#card-element');
        }
      });
  }
 
  buy($event) {
    const name = this.stripeTest.get('name').value;
    const token = JSON.parse(window.localStorage.getItem('access_token'));
    const uid = token[0];
    this.stripeService
      .createToken(this.card, { name })
      .subscribe(obj => {
        if (obj) {
          // console.log("Token is --> ",obj.token.id);

          // // Use the token to create a charge or a customer
          // // https://stripe.com/docs/charges
          // console.log(obj);
          // console.log(obj.token);
          console.log(uid);
          this.payment.pay(obj, uid).subscribe(
            res => {
              console.log("The response from server is ",res);
              console.log('Payment Done');
              this.router.navigateByUrl('home');
              console.log(obj, uid);
              
            },
            error => {
              console.log('The error is ',error);
              
            }
          );
          

        } else if (obj.error) {
          // Error creating the token
          console.log(obj.error.message);
        }
      });
  }

}
