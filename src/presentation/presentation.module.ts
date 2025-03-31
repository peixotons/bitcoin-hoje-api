import { Module } from '@nestjs/common';
import { ControllersModule } from './controllers/controllers.module';
import { JobsModule } from './jobs/jobs.module';

@Module({
    imports: [ControllersModule, JobsModule],
})
export class PresentationModule { } 