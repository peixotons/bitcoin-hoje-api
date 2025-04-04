import { Controller, Get } from '@nestjs/common';
import { GetBitcoinAnalysisUseCase } from '../../application/use-cases/get-bitcoin-analysis.use-case';
import { BitcoinEntity } from '../../domain/entities/bitcoin.entity';

@Controller('bitcoin')
export class BitcoinController {
    constructor(
        private readonly getBitcoinAnalysisUseCase: GetBitcoinAnalysisUseCase
    ) { }

    @Get()
    async getBitcoinAnalysis(): Promise<BitcoinEntity> {
        return this.getBitcoinAnalysisUseCase.execute();
    }
} 