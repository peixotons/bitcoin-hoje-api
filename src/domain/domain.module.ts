import { Module } from '@nestjs/common';
import { BitcoinEntity } from './entities/bitcoin.entity';

@Module({
    providers: [BitcoinEntity],
    exports: [BitcoinEntity],
})
export class DomainModule { } 