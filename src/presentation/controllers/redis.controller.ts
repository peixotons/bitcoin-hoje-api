import { Controller, Get, UseGuards } from '@nestjs/common';
import { GetRedisDataUseCase } from 'src/application/use-cases/get-redis-data.use-case';
import { BitcoinResponseDTO } from 'src/dto/bitcoin/bitcoin-response.dto';
import { SimpleTokenGuard } from '../auth/simple-token.guard';

@Controller('redis')
export class RedisController {
    constructor(
        private readonly getRedisDataUseCase: GetRedisDataUseCase
    ) { }

    @Get()
    @UseGuards(SimpleTokenGuard)
    async getRedisData(symbol: 'bitcoin'): Promise<BitcoinResponseDTO> {
        return this.getRedisDataUseCase.execute(symbol);
    }
} 