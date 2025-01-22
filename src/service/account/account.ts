export interface AccountData {
    acct_num: string;
    acct_name: string;
    acct_resident_num: number;
    classification: string;
    invoice_address: string;
    invoice_address2: string | null;
    invoice_postcode: number;
}

export const fetchAccountData = async (): Promise<AccountData[]> => {
    const response = await fetch('/data/account/account.json', {
        cache: 'force-cache' // 캐싱 활성화
    }); // public 폴더의 경로
    if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.statusText}`);
    }
    return response.json();
};