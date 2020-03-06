import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingModule } from 'ngx-bootstrap/rating';

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";

import { SharedModule } from "./../../shared/shared.module";
@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RatingModule,
    HomeRoutingModule,
    
    SharedModule
  ],
  exports: [
  ],
  providers: [
  ],
})
export class HomeModule { }
