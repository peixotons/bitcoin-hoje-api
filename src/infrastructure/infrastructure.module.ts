import { Module } from '@nestjs/common';
import { AlphaVantageModule } from './alpha-vantage/alpha-vantage.module';

@Module({
    imports: [AlphaVantageModule],
    exports: [AlphaVantageModule],
})
export class InfrastructureModule { } 