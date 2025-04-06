import { Module } from "@nestjs/common";
import { IAlternativeService } from "./interfaces/alternative.interface";
import { AlternativeService } from "./alternative.service";
import { HttpModule } from "@nestjs/axios";

@Module({
    imports: [
        HttpModule.register({
            baseURL: 'https://api.alternative.me/fng/?limit=365',
            timeout: 5000
        })
    ],
    providers: [
        {
            provide: IAlternativeService,
            useClass: AlternativeService
        }
    ],
    exports: [IAlternativeService]
})

export class AlternativeModule { }