import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingModule } from 'ngx-bootstrap/rating';

import { ServiceDetailRoutingModule } from "./service-detail-routing.module";
import { ServiceDetailComponent } from "./service-detail.component";

import { SharedModule } from "./../../shared/shared.module";
@NgModule({
  declarations: [
    ServiceDetailComponent
  ],
  imports: [
    CommonModule,
    RatingModule,
    ServiceDetailRoutingModule,
    
    SharedModule
  ],
  exports: [
  ],
  providers: [
  ],
})
export class ServiceDetailModule { }
