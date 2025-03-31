import axios, { AxiosInstance } from "axios";
import { IBitcoinService } from "../../domain/interfaces/bitcoin.service.interface";

export class AlphaVantageAdapter implements IBitcoinService {
    private axiosInstance: AxiosInstance
    private API_KEY: string
    constructor() {
        this.API_KEY = process.env.ALPHA_VANTAGE_API_KEY || ''
        this.axiosInstance = axios.create({
            baseURL: 'https://www.alphavantage.co/query',
            timeout: 5000
        });
    }

    /**
    * Busca o histórico diário de uma moeda digital (ex: BTC)
    *
    * @param symbol - Símbolo da criptomoeda (ex: 'BTC')
    * @param market - Mercado (ex: 'USD')
    * @returns Dados retornados pela API
    */
    async getDigitalCurrencyDaily(symbol: string, market: string = 'USD'): Promise<any> {
        const params = {
            function: 'DIGITAL_CURRENCY_DAILY',
            symbol,
            market,
            apiKey: this.API_KEY
        };

        try {
            const response = await this.axiosInstance.get('', { params })
            return response.data
        } catch (error) {
            throw new Error(`Erro ao buscar dados da Alpha Vantage: ${error}`)
        }
    }
}