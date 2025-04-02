import { Module } from '@nestjs/common';
import { BitcoinEntity } from './entities/bitcoin.entity';
import { InfrastructureModule } from 'src/infrastructure/infrastructure.module';

@Module({
    imports: [InfrastructureModule],
    providers: [BitcoinEntity],
    exports: [BitcoinEntity, InfrastructureModule],
})
export class DomainModule { } 