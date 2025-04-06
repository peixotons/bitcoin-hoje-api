export abstract class IAlternativeService {
    abstract getFearAndGreed(): Promise<ProcessedFearAndGreed>;
} 