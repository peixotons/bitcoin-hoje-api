import { Module } from '@nestjs/common';
import { BitcoinController } from './bitcoin.controller';
import { ApplicationModule } from '../../application/application.module';
import { MetricsController } from './prometheus.controller';
import { RedisController } from './redis.controller';

@Module({
    imports: [ApplicationModule],
    controllers: [BitcoinController, MetricsController, RedisController],
})
export class ControllersModule { } 