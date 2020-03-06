export interface CurrencyMaskConfig {
    align: string;
    allowNegative: boolean;
    allowZero: boolean;
    decimal: string;
    precision: number;
    prefix: string;
    suffix: string;
    thousands: string;
    nullable: boolean;
    min?: number;
    max?: number;
}
