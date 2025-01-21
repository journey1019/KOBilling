'use client';

import { useMemo, useEffect, useState } from 'react';
import {
    MaterialReactTable,
    useMaterialReactTable,
    type MRT_ColumnDef,
} from 'material-react-table';
import { fetchMonthlyData, RowData } from '@/service/monthly/monthly';

// 데이터 형식 인터페이스 정의


// 테이블 컴포넌트
const TableComponent: React.FC = () => {
    const [data, setData] = useState<RowData[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);


    const columns = useMemo<MRT_ColumnDef<RowData>[]>(
        () => [
            {
                accessorKey: 'profile_id',
                header: 'Profile ID',
            },
            {
                accessorKey: 'account_no',
                header: 'Account No',
            },
            {
                accessorKey: 'serial_number',
                header: 'Serial Number',
            },
            {
                accessorKey: 'alias',
                header: 'Alias',
            },
            {
                accessorKey: 'activate_date',
                header: 'Activate Date',
                Cell: ({ cell }) => new Date(cell.getValue<string>()).toLocaleDateString(),
            },
            {
                accessorKey: 'deactivate_date',
                header: 'Deactivate Date',
                Cell: ({ cell }) =>
                    cell.getValue<string | null>() ? new Date(cell.getValue<string>()).toLocaleDateString() : 'Active',
            },
            {
                accessorKey: 'free_bytes',
                header: 'Free Bytes',
            },
            {
                accessorKey: 'use_byte_total',
                header: 'Used Bytes',
            },
            {
                accessorKey: 'use_percent_of_month',
                header: 'Use Percent of Month (%)',
            },
            {
                accessorKey: 'payment.basic_fee',
                header: 'Basic Fee',
            }
        ],
        []
    );

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetchMonthlyData();
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
            <h1 className="text-base font-bold mb-4">Monthly Data</h1>
            <div className="z-1" style={{width: 'calc(100vw - 150px)'}}>
                <MaterialReactTable
                    columns={columns}
                    data={data}
                    initialState={{
                        density: 'compact',
                    }}
                    renderDetailPanel={({row}) => (
                        <div>
                            <h2 className="font-bold">Use Period Details</h2>
                            <ul>
                                {row.original.use_period_detail.map((detail) => (
                                    <li key={detail.deact_profile_id}>
                                        Period: {detail.use_period} days, Percent: {detail.use_percent_of_month}%
                                    </li>
                                ))}
                            </ul>
                            <h2 className="font-bold mt-4">Payment Details</h2>
                            <ul>
                                {row.original.payment.fee_detail.map((fee, index) => (
                                    <li key={index}>
                                        {fee.classfication}: {fee.billing_fee} USD
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                />
            </div>
        </div>
    );
};

export default TableComponent;