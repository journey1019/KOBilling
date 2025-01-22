export interface PriceData {
    ppid: number;
    basic_fee: number;
    subscription_fee: number;
    free_byte: number;
    surcharge_unit: number;
    each_surcharge_fee: number;
    apply_company: string;
    remarks: string | null;
    note: string | null;
}

export const fetchPriceData = async (): Promise<PriceData[]> => {
    const response = await fetch('/data/price/price.json', {
        cache: 'force-cache'
    });
    if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.statusText}`);
    }
    return response.json();
}