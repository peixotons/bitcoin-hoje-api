export abstract class IAlphaVantageService {
    abstract getDigitalCurrencyDaily(symbol: string, market: string): Promise<any>;
    abstract getSimpleMoveAverage(time_period: number): Promise<any>
} 