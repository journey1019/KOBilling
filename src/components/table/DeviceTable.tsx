'use client';

import { useMemo, useEffect, useState } from 'react';
import {
    MaterialReactTable,
    type MRT_ColumnDef
} from "material-react-table";
import { fetchDeviceData, DeviceData } from '@/service/device/device';


const DeviceTable: React.FC = () => {
    const [data, setData] = useState<DeviceData[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const columns = useMemo<MRT_ColumnDef<DeviceData>[]>(
        () => [
            {
                accessorKey: 'serial_number',
                header: 'Serial Number',
            },
            {
                accessorKey: 'acct_num',
                header: 'Account Number',
            },
            {
                accessorKey: 'profile_id',
                header: 'Profile ID',
            },
            {
                accessorKey: 'activated',
                header: 'Activate',
                Cell: ({ cell }) => new Date(cell.getValue<string>()).toLocaleDateString(),
            },
            {
                accessorKey: 'deactivated',
                header: 'Deactivate',
                Cell: ({ cell }) => new Date(cell.getValue<string>()).toLocaleDateString(),
            },
            {
                accessorKey: 'ppid',
                header: 'PPID',
            },
            {
                accessorKey: 'model_name',
                header: 'Model Name',
            },
            {
                accessorKey: 'internet_mail_id',
                header: 'Mail',
            },
            {
                accessorKey: 'alias',
                header: 'Alias',
            },
            {
                accessorKey: 'remarks',
                header: 'Remarks',
            },
        ],
        []
    );
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetchDeviceData();
                setData(result);
            } catch (err) {
                setError('Failed to load data');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="container mx-auto">
            <h1 className="text-base font-bold">Device Data</h1>
            <div className="z-1" style={{width: 'calc(100vw - 100px)'}}>
                <MaterialReactTable
                    columns={columns}
                    data={data}
                    initialState={{
                        density: 'compact',
                    }}
                />
            </div>
        </div>
    );
}
export default DeviceTable;