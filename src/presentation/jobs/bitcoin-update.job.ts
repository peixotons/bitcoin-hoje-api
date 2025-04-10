import { Injectable } from '@nestjs/common';
import { GetBitcoinAnalysisUseCase } from '../../application/use-cases/get-bitcoin-analysis.use-case';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class BitcoinUpdateJob {
    constructor(
        private readonly getBitcoinAnalysisUseCase: GetBitcoinAnalysisUseCase
    ) { }

    @Cron(CronExpression.EVERY_6_HOURS)
    async handleCron() {
        console.log('Updating Bitcoin data...');
        try {
            const data = await this.getBitcoinAnalysisUseCase.execute();
            console.log('Bitcoin data updated successfully', data);
        } catch (error) {
            console.error('Error updating Bitcoin data:', error);
        }
    }
} 