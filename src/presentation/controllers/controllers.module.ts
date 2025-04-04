import { Module } from '@nestjs/common';
import { BitcoinController } from './bitcoin.controller';
import { ApplicationModule } from '../../application/application.module';
import { MetricsController } from './prometheus.controller';

@Module({
    imports: [ApplicationModule],
    controllers: [BitcoinController, MetricsController],
})
export class ControllersModule { } 