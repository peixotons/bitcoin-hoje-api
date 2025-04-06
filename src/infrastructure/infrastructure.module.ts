import { Module } from '@nestjs/common';
import { AlphaVantageModule } from './alpha-vantage/alpha-vantage.module';
import { RedisModule } from './redis/redis.module';

@Module({
    imports: [AlphaVantageModule, RedisModule],
    exports: [AlphaVantageModule, RedisModule],
})
export class InfrastructureModule { } 