import { NgModule } from '@angular/core';

import { KeysPipe } from './keys.pipe';
import { GetByIdPipe } from './getById.pipe';
import { HtmlToPlaintextPipe } from './htmlToPlaintext.pipe';
import { FilterPipe } from './filter.pipe';
import { CamelCaseToDashPipe } from './camelCaseToDash.pipe';
import { CheckValuePipe } from './checkValue.pipe';
import { SafePipe } from './safe.pipe';
import { TypeNameFromCodePipe } from './typeNameFromCode.pipe';
import { NumberFormatPipe } from './numberFormat.pipe';
import { MoneyFormatPipe } from './moneyFormat.pipe';

@NgModule({
    declarations: [
        KeysPipe,
        GetByIdPipe,
        HtmlToPlaintextPipe,
        FilterPipe,
        CamelCaseToDashPipe,
        CheckValuePipe,
        SafePipe,
        TypeNameFromCodePipe,
        NumberFormatPipe,
        MoneyFormatPipe,
    ],
    imports     : [],
    exports     : [
        KeysPipe,
        GetByIdPipe,
        HtmlToPlaintextPipe,
        FilterPipe,
        CamelCaseToDashPipe,
        CheckValuePipe,
        SafePipe,
        TypeNameFromCodePipe,
        NumberFormatPipe,
        MoneyFormatPipe,
    ]
})
export class PipesModule
{
}
