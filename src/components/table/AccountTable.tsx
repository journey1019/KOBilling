'use client';

import { useMemo, useEffect, useState } from 'react';
import {
    MaterialReactTable,
    useMaterialReactTable,
    type MRT_ColumnDef,
} from 'material-react-table';
import { fetchAccountData, AccountData } from '@/service/account/account';


// 테이블 컴포넌트
const TableComponent: React.FC = () => {
    const [data, setData] = useState<AccountData[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);


    const columns = useMemo<MRT_ColumnDef<AccountData>[]>(
        () => [
            {
                accessorKey: 'acct_num',
                header: 'Account Num',
            },
            {
                accessorKey: 'acct_name',
                header: '사용자 명',
            },
            {
                accessorKey: 'acct_resident_num',
                header: '등록 번호',
            },
            {
                accessorKey: 'classification',
                header: 'Alias',
            },
            {
                accessorKey: 'invoice_address',
                header: '주소',
            },
            {
                accessorKey: 'invoice_address2',
                header: '주소2',
            },
            {
                accessorKey: 'invoice_postcode',
                header: 'Post Code',
            },
        ],
        []
    );

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetchAccountData();
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
        <>
            <h1 className="text-base font-bold">Account Data</h1>
            <div className="z-1">
                <MaterialReactTable
                    columns={columns}
                    data={data}
                    initialState={{
                        density: 'compact',
                    }}
                    defaultColumn={{
                        size: 50,
                        minSize: 50,
                        maxSize: 200,
                    }}
                />
            </div>
        </>
    );
};

export default TableComponent;