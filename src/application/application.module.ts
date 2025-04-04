import { Module } from '@nestjs/common';
import { GetBitcoinAnalysisUseCase } from './use-cases/get-bitcoin-analysis.use-case';
import { DomainModule } from '../domain/domain.module';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';

@Module({
    imports: [DomainModule, InfrastructureModule],
    providers: [GetBitcoinAnalysisUseCase],
    exports: [GetBitcoinAnalysisUseCase],
})
export class ApplicationModule { } 