import { Module } from '@nestjs/common';
import { BitcoinUpdateJob } from './bitcoin-update.job';
import { ApplicationModule } from '../../application/application.module';

@Module({
    imports: [ApplicationModule],
    providers: [BitcoinUpdateJob],
})
export class JobsModule { } 