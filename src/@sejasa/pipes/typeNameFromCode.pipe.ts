
import { Injectable, Pipe, PipeTransform } from '@angular/core';

declare let _: any;

@Pipe({name: 'typeNameFromCode'})
@Injectable()
export class TypeNameFromCodePipe implements PipeTransform {
    constructor() { }

    transform(value: string, list:any[]):any {
        let typeName: string;
        if (_.findIndex(list, {'value': value}) !== -1) {
            typeName = _.find(list, ['value', value]).name;
        } else {
            typeName = '-';
        }

        return typeName;
    }
}