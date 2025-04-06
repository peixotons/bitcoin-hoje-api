import { Controller, Get } from '@nestjs/common';
import { GetRedisDataUseCase } from 'src/application/use-cases/get-redis-data.use-case';
import { BitcoinResponseDTO } from 'src/dto/bitcoin/bitcoin-response.dto';

@Controller('redis')
export class RedisController {
    constructor(
        private readonly getRedisDataUseCase: GetRedisDataUseCase
    ) { }

    @Get()
    async getRedisData(symbol: 'bitcoin'): Promise<BitcoinResponseDTO> {
        return this.getRedisDataUseCase.execute(symbol);
    }
} 