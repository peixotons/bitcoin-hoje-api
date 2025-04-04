import { Module, OnModuleInit } from '@nestjs/common';
import { PresentationModule } from './presentation/presentation.module';
import { ScheduleModule } from '@nestjs/schedule';
import { ConfigModule } from '@nestjs/config';
import { collectDefaultMetrics, register } from 'prom-client';

@Module({
  imports: [
    PresentationModule,
    ConfigModule.forRoot({
      isGlobal: true
    }),
    ScheduleModule.forRoot()
  ],
})
export class AppModule implements OnModuleInit {
  onModuleInit() {
    collectDefaultMetrics({ register });
  }
}
