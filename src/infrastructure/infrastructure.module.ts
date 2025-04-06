import { Module } from '@nestjs/common';
import { AlphaVantageModule } from './alpha-vantage/alpha-vantage.module';
import { RedisModule } from './redis/redis.module';
import { AlternativeModule } from './alternative/alternative.module';

@Module({
    imports: [AlphaVantageModule, RedisModule, AlternativeModule],
    exports: [AlphaVantageModule, RedisModule, AlternativeModule],
})
export class InfrastructureModule { } 