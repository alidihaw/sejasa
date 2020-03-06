import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationStrategy, HashLocationStrategy, PathLocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import 'hammerjs';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

import { NgPipesModule } from 'ngx-pipes';
import { NgxMaskModule } from 'ngx-mask';  

import { CookieService } from 'ngx-cookie-service';

import { SejasaModule } from '../@sejasa/sejasa.module';

import { currencyMaskConfig, CURRENCY_MASK_CONFIG } from './../@sejasa/config/currency.config';

import { PerfectScrollbarModule, PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

// Import 3rd party components
import { RatingModule } from 'ngx-bootstrap/rating';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';

// Import containers
import { LayoutComponent } from './containers';

const APP_CONTAINERS = [
    LayoutComponent
];

import { CarouselModule } from 'ngx-bootstrap/carousel';

import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,

    AppRoutingModule,

    SejasaModule,

    FontAwesomeModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [HttpClient],
        },
        defaultLanguage: 'en'
    }),
    NgPipesModule,
    NgxMaskModule.forRoot(),
    PerfectScrollbarModule,

    CarouselModule.forRoot(),
    BsDropdownModule.forRoot(),
    RatingModule.forRoot(),
    TabsModule.forRoot(),

    SharedModule,
  ],
  providers: [
    CookieService,
    { provide: CURRENCY_MASK_CONFIG, useValue: currencyMaskConfig },
    { provide: LocationStrategy, useClass: PathLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
