import { lastValueFrom } from "rxjs";
import { HttpService } from "@nestjs/axios";
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { IAlternativeService } from "./interfaces/alternative.interface";
import { processFearAndGreed } from "../shared/process-fag.mapper";

@Injectable()
export class AlternativeService implements IAlternativeService {
    constructor(private readonly httpService: HttpService) {
    }

    async getFearAndGreed(): Promise<ProcessedFearAndGreed> {
        try {
            const response = await lastValueFrom(this.httpService.get<AlternativeResponse>(''));
            const processedData = processFearAndGreed(response.data);
            return processedData;
        } catch (error) {
            throw new HttpException(
                `Erro ao buscar dados da Alternative: ${error.message}`,
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }
}