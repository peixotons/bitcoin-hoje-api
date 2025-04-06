import { BitcoinHistoricalData } from 'src/dto/bitcoin/bitcoin-response.dto';

interface DigitalCurrencyDailyResponse {
    "Meta Data": any;
    "Time Series (Digital Currency Daily)": {
        [date: string]: {
            "1. open": string;
            "2. high": string;
            "3. low": string;
            "4. close": string;
            "5. volume": string;
        }
    }
}

interface TechnicalAnalysisSMAResponse {
    "Meta Data": any;
    "Technical Analysis: SMA": {
        [date: string]: {
            "SMA": string;
        }
    }
}

/**
 * Função para processar os dados brutos das APIs e extrair:
 * - O preço atual (último fechamento)
 * - Mayer Multiple (calculado como currentPrice / sma200 atual)
 * - Dados históricos dos últimos 30 dias, contendo data, preço (close) e os SMAs de 50, 100 e 200 dias.
 */
export function processHistoricalData(
    priceData: DigitalCurrencyDailyResponse,
    sma50Data: TechnicalAnalysisSMAResponse,
    sma100Data: TechnicalAnalysisSMAResponse,
    sma200Data: TechnicalAnalysisSMAResponse,
    days: number = 30
): { currentPrice: number; mayerMultiple: number; historicalData: BitcoinHistoricalData[] } {
    const priceSeries = priceData["Time Series (Digital Currency Daily)"];
    const sma50Series = sma50Data["Technical Analysis: SMA"];
    const sma100Series = sma100Data["Technical Analysis: SMA"];
    const sma200Series = sma200Data["Technical Analysis: SMA"];

    const sortedDates = Object.keys(priceSeries).sort(
        (a, b) => new Date(b).getTime() - new Date(a).getTime()
    );

    const last30Dates = sortedDates.slice(0, days);

    const historicalData: BitcoinHistoricalData[] = last30Dates.map(date => ({
        date,
        price: Number(priceSeries[date]["4. close"]),
        sma50: Number(sma50Series[date]["SMA"]),
        sma100: Number(sma100Series[date]["SMA"]),
        sma200: Number(sma200Series[date]["SMA"])
    }));

    // Os dados atuais serão referentes à data mais recente
    const currentPrice = Number(priceSeries[sortedDates[0]]["4. close"]);
    const currentSma200 = Number(sma200Series[sortedDates[0]]["SMA"]);
    // Mayer Multiple: preço atual dividido pelo SMA200 atual
    const mayerMultiple = currentPrice / currentSma200;

    return { currentPrice, mayerMultiple, historicalData };
}
