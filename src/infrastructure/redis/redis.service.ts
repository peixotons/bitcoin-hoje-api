import { Injectable, Inject } from '@nestjs/common';
import Redis from 'ioredis';
import { IRedisService } from './interfaces/redis.service.interface';

@Injectable()
export class RedisService implements IRedisService {
    constructor(
        @Inject('REDIS_CLIENT') private readonly redisClient: Redis,
    ) { }

    async get(key: string): Promise<string | null> {
        return this.redisClient.get(key);
    }

    async set(key: string, value: string, ttl?: number): Promise<void> {
        if (ttl) {          
            await this.redisClient.set(key, value, 'EX', ttl);
        } else {        
            await this.redisClient.set(key, value);
        }   
    }

    async del(key: string): Promise<number> {
        return this.redisClient.del(key);
    }
}
