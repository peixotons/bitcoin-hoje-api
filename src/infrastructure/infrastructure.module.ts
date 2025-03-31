import { Module } from '@nestjs/common';
import { AlphaVantageAdapter } from './alpha-vantage/alpha-vantage.adapter';

@Module({
    imports: [AlphaVantageAdapter],
    exports: [AlphaVantageAdapter],
})
export class InfrastructureModule { } 