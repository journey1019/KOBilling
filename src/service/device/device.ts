export interface DeviceData {
    serial_number: string;
    acct_num: string;
    profile_id: number;
    activated: string;
    deactivated: string | null;
    ppid: number;
    model_name: string;
    internet_mail_id: string;
    alias: string;
    remarks: string | null;
}

export const fetchDeviceData = async (): Promise<DeviceData[]> => {
    const response = await fetch('/data/device/device.json', {
        cache: 'force-cache'
    });
    if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.statusText}`);
    }
    return response.json();
}