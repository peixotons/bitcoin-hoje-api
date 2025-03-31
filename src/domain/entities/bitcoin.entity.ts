/**
 * Entidade que representa o Bitcoin e suas análises
 * Contém dados e comportamentos relacionados à criptomoeda
 */
export class BitcoinEntity {
    protected symbol: string;
    protected market: string;
    protected lastRefreshed: string;
    protected timeZone: string;
    protected dailyData: {
        [date: string]: {
            open: number;
            high: number;
            low: number;
            close: number;
            volume: number;
        };
    };

    /**
     * Construtor vazio para criação progressiva via setters
     */
    constructor();

    /**
     * Construtor com todos os parâmetros para criação direta
     */
    constructor(
        symbol: string,
        market: string,
        lastRefreshed: string,
        timeZone: string,
        dailyData: {
            [date: string]: {
                open: number;
                high: number;
                low: number;
                close: number;
                volume: number;
            };
        }
    );

    /**
     * Implementação dos construtores
     */
    constructor(
        symbol?: string,
        market?: string,
        lastRefreshed?: string,
        timeZone?: string,
        dailyData?: {
            [date: string]: {
                open: number;
                high: number;
                low: number;
                close: number;
                volume: number;
            };
        }
    ) {
        this.symbol = symbol || 'BTC';
        this.market = market || 'USD';
        this.lastRefreshed = lastRefreshed || '';
        this.timeZone = timeZone || '';
        this.dailyData = dailyData || {};
    }


    public getSymbol(): string {
        return this.symbol;
    }

    public setSymbol(value: string): void {
        if (!value) {
            throw new Error('Symbol cannot be empty');
        }
        this.symbol = value;
    }

    public getMarket(): string {
        return this.market;
    }

    public setMarket(value: string): void {
        if (!value) {
            throw new Error('Market cannot be empty');
        }
        this.market = value;
    }

    public getLastRefreshed(): string {
        return this.lastRefreshed;
    }

    public setLastRefreshed(value: string): void {
        this.lastRefreshed = value;
    }

    public getTimeZone(): string {
        return this.timeZone;
    }

    public setTimeZone(value: string): void {
        this.timeZone = value;
    }

    public getDailyData(): {
        [date: string]: {
            open: number;
            high: number;
            low: number;
            close: number;
            volume: number;
        };
    } {
        return this.dailyData;
    }

    public setDailyData(value: {
        [date: string]: {
            open: number;
            high: number;
            low: number;
            close: number;
            volume: number;
        };
    }): void {
        this.dailyData = value;
    }
} 