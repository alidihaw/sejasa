import { InjectionToken } from '@angular/core';
import { CurrencyMaskConfig } from 'ngx-currency/src/currency-mask.config';

export const currencyMaskConfig: CurrencyMaskConfig = {
    align: 'right',
    allowNegative: true,
    allowZero: true,
    decimal: ',',
    precision: 2,
    prefix: 'Rp ',
    suffix: '',
    thousands: '.',
    nullable: true
};

export let CURRENCY_MASK_CONFIG: InjectionToken<CurrencyMaskConfig>;
