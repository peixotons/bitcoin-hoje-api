import { Module } from '@nestjs/common';
import { GetBitcoinAnalysisUseCase } from './use-cases/get-bitcoin-analysis.use-case';
import { DomainModule } from '../domain/domain.module';

@Module({
    imports: [DomainModule],
    providers: [GetBitcoinAnalysisUseCase],
    exports: [GetBitcoinAnalysisUseCase],
})
export class ApplicationModule { } 