export function processFearAndGreed(response: AlternativeResponse) {
    const { data } = response;

    if (!data || data.length === 0) {
        throw new Error("Nenhum dado retornado da API");
    }
    
    const today = Number(data[0].value);

    const values = data.map(item => Number(item.value));

    const min = Math.min(...values);
    const max = Math.max(...values);

    return { today, min, max };
}
