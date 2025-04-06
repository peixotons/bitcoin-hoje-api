import { Injectable } from '@nestjs/common';
import { IAlphaVantageService } from '../../infrastructure/alpha-vantage/interfaces/alpha-vantage.service.interface';
import { BitcoinEntity } from '../../domain/entities/bitcoin.entity';

@Injectable()
export class GetBitcoinAnalysisUseCase {
    constructor(
        private readonly alphaVantageService: IAlphaVantageService
    ) { }
    
    async execute(market: string = 'USD'): Promise<BitcoinEntity> {
        return await this.alphaVantageService.getDigitalCurrencyDaily('BTC', market);
    }
}