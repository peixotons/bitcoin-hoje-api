export abstract class IRedisService {
    abstract get(key: string): Promise<string | null>
    abstract set(key: string, value: string, ttl?: number): Promise<void>
    abstract del(key: string): Promise<number>
}