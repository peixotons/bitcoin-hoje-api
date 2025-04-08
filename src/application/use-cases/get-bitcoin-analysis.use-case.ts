import { Injectable } from '@nestjs/common';
import { IAlphaVantageService } from '../../infrastructure/alpha-vantage/interfaces/alpha-vantage.service.interface';
import { IAlternativeService } from 'src/infrastructure/alternative/interfaces/alternative.interface';
import { BitcoinResponseDTO } from 'src/dto/bitcoin/bitcoin-response.dto';
import { processHistoricalData } from 'src/infrastructure/shared/process-bitcoin-data.mapper';
import { IRedisService } from 'src/infrastructure/redis/interfaces/redis.service.interface';

@Injectable()
export class GetBitcoinAnalysisUseCase {
    constructor(
        private readonly alphaVantageService: IAlphaVantageService,
        private readonly alternativeService: IAlternativeService,
        private readonly redisService: IRedisService

    ) { }

    async execute(market: string = 'USD'): Promise<BitcoinResponseDTO> {
        const fearAndGreed = await this.alternativeService.getFearAndGreed();

        const bitcoinPriceData = await this.alphaVantageService.getDigitalCurrencyDaily('BTC', market);
        const sma50Data = await this.alphaVantageService.getSimpleMoveAverage(50);
        const sma100Data = await this.alphaVantageService.getSimpleMoveAverage(100);
        const sma200Data = await this.alphaVantageService.getSimpleMoveAverage(200);

        const { currentPrice, mayerMultiple, historicalData } = processHistoricalData(
            bitcoinPriceData,
            sma50Data,
            sma100Data,
            sma200Data,
            30
        );

        await this.redisService.set('crypto:bitcoin', JSON.stringify({
            currentData: {
                price: currentPrice,
                mayerMultiple,
                mayerMultipleStats: {
                    min: 0.51,
                    max: 2.77
                },
                fearAndGreedIndex: fearAndGreed
            },
            historicalData
        }), 86400);

        return {
            currentData: {
                price: currentPrice,
                mayerMultiple,
                mayerMultipleStats: {
                    min: 0.51,
                    max: 2.77
                },
                fearAndGreedIndex: fearAndGreed
            },
            historicalData
        };
    }
}
