import { lastValueFrom } from "rxjs";
import { IAlphaVantageService } from "./interfaces/alpha-vantage.service.interface";
import { HttpService } from "@nestjs/axios";
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class AlphaVantageService implements IAlphaVantageService {
    private readonly API_KEY: string
    constructor(private readonly httpService: HttpService, private readonly configService: ConfigService) {
        this.API_KEY = this.configService.get<string>('ALPHA_VANTAGE_API_KEY') || ''
    }

    /**
    * Busca o histórico diário de uma moeda digital (ex: BTC)
    *
    * @param symbol - Símbolo da criptomoeda (ex: 'BTC')
    * @param market - Mercado (ex: 'USD')
    * @returns Dados retornados pela API
    */
    async getDigitalCurrencyDaily(symbol: string = 'BTC', market: string = 'USD'): Promise<any> {
        const params = {
            function: 'DIGITAL_CURRENCY_DAILY',
            symbol,
            market,
            apikey: this.API_KEY
        };
        try {
            const response = await lastValueFrom(this.httpService.get('', { params }));
            return response.data
        } catch (error) {
            throw new HttpException(
                `Erro ao buscar dados da Alpha Vantage: ${error.message}`,
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }

    async getSimpleMoveAverage(time_period: number): Promise<any> {
        const params = {
            function: 'SMA',
            symbol: 'BTCUSD',
            interval: 'daily',
            time_period,
            series_type: 'close',
            apikey: this.API_KEY
        };
        try {
            const response = await lastValueFrom(this.httpService.get('', { params }));
            return response.data
        } catch (error) {
            throw new HttpException(
                `Erro ao buscar dados da Alpha Vantage: ${error.message}`,
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }
}