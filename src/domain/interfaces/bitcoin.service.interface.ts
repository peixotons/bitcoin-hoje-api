export interface IBitcoinService {
    getDigitalCurrencyDaily(symbol: string, market?: string): Promise<any>;
} 