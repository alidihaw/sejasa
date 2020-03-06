import { NgModule } from '@angular/core';

import { IfOnDomDirective } from './if-on-dom.directive';
import { OnlyNumberDirective } from './only-number.directive';
import { BlockCopyPasteDirective } from './block-copy-paste.directive';

@NgModule({
    declarations: [
        IfOnDomDirective,
        OnlyNumberDirective,
        BlockCopyPasteDirective,
    ],
    imports     : [],
    exports     : [
        IfOnDomDirective,
        OnlyNumberDirective,
        BlockCopyPasteDirective,
    ]
})
export class DirectivesModule
{
}
