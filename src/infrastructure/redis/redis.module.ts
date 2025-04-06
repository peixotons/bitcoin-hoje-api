import { Logger, Module, Global } from '@nestjs/common';
import { RedisService } from './redis.service';
import { ConfigService } from '@nestjs/config';
import Redis from 'ioredis';
import { IRedisService } from './interfaces/redis.service.interface';

@Module({
    providers: [
        {
            provide: 'REDIS_CLIENT',
            useFactory: (configService: ConfigService) => {
                const logger = new Logger('RedisClient');

                const client = new Redis({
                    host: configService.get('REDIS_HOST'),
                    port: configService.get('REDIS_PORT', 6379),
                    password: configService.get('REDIS_PASSWORD'),
                });

                client.on('connect', () => logger.log('Redis client connected'));
                client.on('error', (err) => logger.error('Redis client error', err));
                client.on('reconnecting', () => logger.warn('Redis client reconnecting'));
                client.on('end', () => logger.log('Redis client disconnected'));

                return client;
            },
            inject: [ConfigService],
        },
        {
            provide: IRedisService,
            useClass: RedisService
        }
    ],
    exports: [IRedisService],
})
export class RedisModule { }
