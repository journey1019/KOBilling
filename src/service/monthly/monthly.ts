export interface UsePeriodDetail {
    deact_profile_id: number;
    account_no: string;
    act_date: string;
    deact_date: string | null;
    use_period: number;
    use_percent_of_month: number;
}
export interface FeeDetail {
    classfication: string;
    act_date_period: string;
    default_byte: number;
    use_byte: number;
    billing_fee: number;
    apply_company: string;
    note: string;
}
export interface Payment {
    basic_fee: number;
    subscribe_fee: number;
    add_use_fee: number;
    tax_fee: number;
    total_fee: number;
    cut_off_fee: number;
    final_fee: number;
    fee_detail: FeeDetail[];
}
export interface RowData {
    profile_id: number;
    account_no: string;
    serial_number: string;
    alias: string;
    activate_date: string;
    deactivate_date: string | null;
    free_bytes: number;
    use_byte_total: number;
    use_period: number;
    use_percent_of_month: number;
    use_period_detail: UsePeriodDetail[];
    payment: Payment;
}

export const fetchMonthlyData = async (): Promise<RowData[]> => {
    const response = await fetch('/data/monthly/monthly.json', {
        cache: 'force-cache' // 캐싱 활성화
    }); // public 폴더의 경로
    if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.statusText}`);
    }
    return response.json();
};