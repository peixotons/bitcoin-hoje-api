import { Controller, Get } from '@nestjs/common';
import { GetRedisDataUseCase } from 'src/application/use-cases/get-redis-data.use-case';

@Controller('redis')
export class RedisController {
    constructor(
        private readonly getRedisDataUseCase: GetRedisDataUseCase
    ) { }

    @Get()
    async getRedisData(symbol: 'bitcoin'): Promise<any> {
        return this.getRedisDataUseCase.execute(symbol);
    }
} 