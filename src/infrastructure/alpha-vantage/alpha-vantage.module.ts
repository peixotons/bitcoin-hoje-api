import { Module } from "@nestjs/common";
import { IAlphaVantageService } from "./interfaces/alpha-vantage.service.interface";
import { AlphaVantageService } from "./alpha-vantage.service";
import { HttpModule } from "@nestjs/axios";

@Module({
    imports: [
        HttpModule.register({
            baseURL: 'https://www.alphavantage.co/query',
            timeout: 5000
        })
    ],
    providers: [
        {
            provide: IAlphaVantageService,
            useClass: AlphaVantageService
        }
    ],
    exports: [IAlphaVantageService]
})

export class AlphaVantageModule { }