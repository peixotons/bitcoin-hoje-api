export abstract class IAlphaVantageService {
    abstract getDigitalCurrencyDaily(symbol?: string, market?: string): Promise<any>;
} 