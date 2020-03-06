import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import * as _ from 'lodash';

@Injectable()
export class TranslateSharedService
{
    constructor(
        private _translateService: TranslateService,
    ) {}

    getTranslate(text): Promise < any > {
        return new Promise((resolve, reject) => {
            this._translateService.get(text).subscribe(response => {
                const result = response;
                resolve(result);
            });
        });
    }
}
