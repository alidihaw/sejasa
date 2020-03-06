import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { DOCUMENT } from '@angular/common';
import { Platform } from '@angular/cdk/platform';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';

import { SplashScreenService } from '../@sejasa/services/splash-screen.service';
import { TranslationLoaderService } from '../@sejasa/services/translation-loader.service';

import { CookieService } from 'ngx-cookie-service';

@Component({
    selector   : 'body',
    templateUrl: './app.component.html',
    styleUrls  : ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy
{
    private _unsubscribeAll: Subject<any>;

    constructor(
        @Inject(DOCUMENT) private document: any,
        private _splashScreenService: SplashScreenService,
        private _translationLoaderService: TranslationLoaderService,
        private _translateService: TranslateService,
        private _platform: Platform,
        private _router: Router,
        private _cookieService: CookieService,
    )
    {
        this._translateService.addLangs(['en', 'id']);
        let lang = 'en';
        
        if (this._cookieService.get('lang')) {
            lang = this._cookieService.get('lang');
        }

        this._translateService.setDefaultLang(lang);

        // this._translationLoaderService.loadTranslations(english, bahasa);
        this._translateService.use(lang);

        if ( this._platform.ANDROID || this._platform.IOS )
        {
            this.document.body.classList.add('is-mobile');
        }

        this._unsubscribeAll = new Subject();
    }

    ngOnInit(): void
    {
        this._router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
              return;
            }
            window.scrollTo(0, 0);
          });
    }

    ngOnDestroy(): void
    {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
}
