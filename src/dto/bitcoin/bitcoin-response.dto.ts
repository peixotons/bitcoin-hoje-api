export interface BitcoinHistoricalData {
    date: string;
    price: number;
    sma50: number;
    sma100: number;
    sma200: number;
}

export interface BitcoinResponseDTO {
    currentData: {
        price: number;
        mayerMultiple: number;
        fearAndGreedIndex: object;
    };
    historicalData: BitcoinHistoricalData[];
}