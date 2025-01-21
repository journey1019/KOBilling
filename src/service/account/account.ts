export const fetchMockData = async (): Promise<any> => {
    const response = await fetch('/data/account/account.json'); // public 폴더의 경로
    if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.statusText}`);
    }
    return response.json();
};