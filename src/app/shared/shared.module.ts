
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';
import { NgPipesModule } from 'ngx-pipes';
import { NgxMaskModule } from 'ngx-mask';

import { CarouselModule } from 'ngx-bootstrap/carousel';

import { SejasaModule } from '../../@sejasa/sejasa.module';
import { ServiceModule } from './service/service.module';

import { CookieService } from 'ngx-cookie-service';

@NgModule({
  imports: [
  ],
  declarations: [
  ],
  exports: [
    CommonModule,

    FontAwesomeModule,
    TranslateModule,
    NgPipesModule,
    NgxMaskModule,

    CarouselModule,

    SejasaModule,

    ServiceModule,
  ],
  providers: [
    CookieService,
  ],
  bootstrap: []
})
export class SharedModule { }
