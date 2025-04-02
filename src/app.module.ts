import { Module } from '@nestjs/common';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { DomainModule } from './domain/domain.module';
import { ApplicationModule } from './application/application.module';
import { PresentationModule } from './presentation/presentation.module';
import { ScheduleModule } from '@nestjs/schedule';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    DomainModule,
    InfrastructureModule,
    ApplicationModule,
    PresentationModule,
    ConfigModule.forRoot({
      isGlobal: true
    }),
    ScheduleModule.forRoot()
  ],
})
export class AppModule { }
