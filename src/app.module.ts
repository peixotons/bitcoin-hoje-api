import { Module } from '@nestjs/common';
import { PresentationModule } from './presentation/presentation.module';
import { ScheduleModule } from '@nestjs/schedule';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    PresentationModule,
    ConfigModule.forRoot({
      isGlobal: true
    }),
    ScheduleModule.forRoot()
  ],
})
export class AppModule { }
