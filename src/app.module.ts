import { Module } from '@nestjs/common';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { DomainModule } from './domain/domain.module';
import { ApplicationModule } from './application/application.module';
import { PresentationModule } from './presentation/presentation.module';

@Module({
  imports: [
    DomainModule,
    InfrastructureModule,
    ApplicationModule,
    PresentationModule,
  ],
})
export class AppModule { }
