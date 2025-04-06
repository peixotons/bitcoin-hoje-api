import { Controller, Get, UseGuards } from '@nestjs/common';
import { GetBitcoinAnalysisUseCase } from '../../application/use-cases/get-bitcoin-analysis.use-case';
import { BitcoinResponseDTO } from 'src/dto/bitcoin/bitcoin-response.dto';
import { SimpleTokenGuard } from '../auth/simple-token.guard';

@Controller('bitcoin')
export class BitcoinController {
    constructor(
        private readonly getBitcoinAnalysisUseCase: GetBitcoinAnalysisUseCase
    ) { }

    @Get()
    @UseGuards(SimpleTokenGuard)
    async getBitcoinAnalysis(): Promise<BitcoinResponseDTO> {
        return this.getBitcoinAnalysisUseCase.execute();
    }
} 