import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingModule } from 'ngx-bootstrap/rating';

import { CheckoutRoutingModule } from "./checkout-routing.module";
import { CheckoutComponent } from "./checkout.component";

import { SharedModule } from "./../../shared/shared.module";
@NgModule({
  declarations: [
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    RatingModule,
    CheckoutRoutingModule,
    
    SharedModule
  ],
  exports: [
  ],
  providers: [
  ],
})
export class CheckoutModule { }
