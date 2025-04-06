import { Controller, Get } from '@nestjs/common';
import { GetBitcoinAnalysisUseCase } from '../../application/use-cases/get-bitcoin-analysis.use-case';
import { BitcoinResponseDTO } from 'src/dto/bitcoin/bitcoin-response.dto';

@Controller('bitcoin')
export class BitcoinController {
    constructor(
        private readonly getBitcoinAnalysisUseCase: GetBitcoinAnalysisUseCase
    ) { }

    @Get()
    async getBitcoinAnalysis(): Promise<BitcoinResponseDTO> {
        return this.getBitcoinAnalysisUseCase.execute();
    }
} 