import { Module } from '@nestjs/common';
import { BitcoinController } from './bitcoin.controller';
import { ApplicationModule } from '../../application/application.module';

@Module({
    imports: [ApplicationModule],
    controllers: [BitcoinController],
})
export class ControllersModule { } 