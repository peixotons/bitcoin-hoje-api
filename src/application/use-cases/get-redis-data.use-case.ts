import { Injectable } from '@nestjs/common';
import { IRedisService } from 'src/infrastructure/redis/interfaces/redis.service.interface';

@Injectable()
export class GetRedisDataUseCase {
    constructor(
        private readonly redisService: IRedisService
    ) { }

    async execute(): Promise<any> {
        return await this.redisService.get('crypto:bitcoin')
    }
}