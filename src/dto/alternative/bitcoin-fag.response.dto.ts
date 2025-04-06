interface FearAndGreedData {
    value: string;
    value_classification: string;
    timestamp: string;
    time_until_update?: string;
}

interface AlternativeResponse {
    name: string;
    data: FearAndGreedData[];
    metadata: {
        error: string | null;
    };
}

interface ProcessedFearAndGreed {
    today: number;
    min: number;
    max: number;
}
