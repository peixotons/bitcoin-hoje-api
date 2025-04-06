export interface BitcoinCurrentData {
    price: number;
    mayerMultiple: number;
    mayerMultipleStats: {
        min: number;
        max: number;
    };
    fearAndGreedIndex: object;
}

export interface BitcoinHistoricalData {
    date: string;
    price: number;
    sma50: number;
    sma100: number;
    sma200: number;
}

export interface BitcoinResponseDTO {
    currentData: BitcoinCurrentData;
    historicalData: BitcoinHistoricalData[];
}
