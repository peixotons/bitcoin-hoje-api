import { Module } from '@nestjs/common';
import { GetBitcoinAnalysisUseCase } from './use-cases/get-bitcoin-analysis.use-case';
import { DomainModule } from '../domain/domain.module';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';
import { GetRedisDataUseCase } from './use-cases/get-redis-data.use-case';

@Module({
    imports: [DomainModule, InfrastructureModule],
    providers: [GetBitcoinAnalysisUseCase, GetRedisDataUseCase],
    exports: [GetBitcoinAnalysisUseCase, GetRedisDataUseCase],
})
export class ApplicationModule { } 