import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'checkValue'})
export class CheckValuePipe implements PipeTransform {
    constructor(){}
    transform(val: any, field, valEmpty?): any {
        if (!val || val == null || val === undefined) {
            return valEmpty ? valEmpty : '-';
        }
        if (field) return val[field];
        return val;
    }
}
