import { Injectable, Inject } from '@nestjs/common';
import { IBitcoinService } from '../../domain/interfaces/bitcoin.service.interface';
import { BitcoinEntity } from '../../domain/entities/bitcoin.entity';

@Injectable()
export class GetBitcoinAnalysisUseCase {
    constructor(
        private cryptoDataProvider: IBitcoinService
    ) { }

    /**
     * Executa a análise do Bitcoin
     */
    async execute(market: string = 'USD'): Promise<BitcoinEntity> {
        return await this.cryptoDataProvider.getDigitalCurrencyDaily('BTC', market);
    }
}