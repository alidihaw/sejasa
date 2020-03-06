import { NgModule } from '@angular/core';
import { ConstantService } from './constant/constant.service';
import { HttpRequestService } from './http-request/http-request.service';
import { TranslateSharedService } from './translate/translate.service';

@NgModule({
    declarations: [
    ],
    imports     : [
    ],
    exports: [
    ],
    providers: [
        ConstantService,
        HttpRequestService,
        TranslateSharedService,
    ]
})
export class ServiceModule
{
}
