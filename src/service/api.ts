const BASE_URL = 'http://127.0.0.1:8000/monthly/';

export const fetchMonthlyData = async (date: string, token: string): Promise<any> => {
    try {
        const response = await fetch(`${BASE_URL}${date}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${token}`,
            },
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Failed to fetch data:', error);
        throw error;
    }
};

export const fetchMockData = async (): Promise<any> => {
    const response = await fetch('/data/monthly/monthly.json'); // public 폴더의 경로
    if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.statusText}`);
    }
    return response.json();
};