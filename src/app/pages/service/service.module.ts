import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingModule } from 'ngx-bootstrap/rating';

import { ServiceRoutingModule } from "./service-routing.module";
import { ServiceComponent } from "./service.component";

import { SharedModule } from "./../../shared/shared.module";
@NgModule({
  declarations: [
    ServiceComponent
  ],
  imports: [
    CommonModule,
    RatingModule,
    ServiceRoutingModule,

    SharedModule
  ],
  exports: [
  ],
  providers: [
  ],
})
export class ServiceModule { }
