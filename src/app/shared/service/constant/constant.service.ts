import { Injectable } from '@angular/core';

import { TranslateSharedService } from './../translate/translate.service';

import * as _ from 'lodash';

@Injectable()
export class ConstantService
{
    constructor(
        private _translateSharedService: TranslateSharedService,
    ) {}

    randomName(type, length): string {
        let charset = '';
        let randomName = '';

        const numeric = '0123456789';
        const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLNMOPQRSTUPWXYZ';
        const alphaNumberic = numeric + alphabet;

        if (type === 'numeric') {
            charset = numeric;
        } else if (type === 'alphabet') {
            charset = alphabet;
        } else if (type === 'alphaNumeric') {
            charset = alphaNumberic;
        }

        for (let i = 0; i < length; i++) {
            randomName += charset.charAt(Math.floor(Math.random() * charset.length));
        }
        return randomName;
    }

    async listMonth(): Promise <any> {
        const month = new Array();
        month[0] = await this._translateSharedService.getTranslate('January');
        month[1] = await this._translateSharedService.getTranslate('February');
        month[2] = await this._translateSharedService.getTranslate('March');
        month[3] = await this._translateSharedService.getTranslate('April');
        month[4] = await this._translateSharedService.getTranslate('May');
        month[5] = await this._translateSharedService.getTranslate('June');
        month[6] = await this._translateSharedService.getTranslate('July');
        month[7] = await this._translateSharedService.getTranslate('August');
        month[8] = await this._translateSharedService.getTranslate('September');
        month[9] = await this._translateSharedService.getTranslate('October');
        month[10] = await this._translateSharedService.getTranslate('November');
        month[11] = await this._translateSharedService.getTranslate('December');
        return month;
    }

    async listDay(): Promise <any> {
        const day = new Array();
        day[0] = await this._translateSharedService.getTranslate('Sunday');
        day[1] = await this._translateSharedService.getTranslate('Monday');
        day[2] = await this._translateSharedService.getTranslate('Tuesday');
        day[3] = await this._translateSharedService.getTranslate('Wednesday');
        day[4] = await this._translateSharedService.getTranslate('Thursday');
        day[5] = await this._translateSharedService.getTranslate('Friday');
        day[6] = await this._translateSharedService.getTranslate('Saturday');
        return day;
    }
}
