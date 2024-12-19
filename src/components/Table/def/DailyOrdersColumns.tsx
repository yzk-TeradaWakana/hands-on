/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/react-in-jsx-scope */
import { MRT_ColumnDef, useMaterialReactTable } from 'material-react-table';
import { useMemo } from 'react';
import { Orders } from '../../../models/OrdersTypes';
import { fakeData } from '../../../constants/OrdersDef';
import { Link } from '@mui/material';


export const makeDailyOrdersTableInstance = () => {

  const columns = useMemo<MRT_ColumnDef<Orders>[]>(
    () => [
      {
        accessorKey: 'productNumber',
        header: '品番',
        Cell: () => (
          <Link href={`/mock/daily-orders-detail`}>0000-0000-0000</Link>
        ),
      },
      {
        accessorKey: 'deliveryDate',
        header: '納期',
      },
      {
        accessorKey: 'quantity',
        header: '数量',
      },
      {
        accessorKey: 'delivery',
        header: '納入先',
      },
      {
        accessorKey: 'factory',
        header: '主管工場',
      },
      {
        accessorKey: 'manufacturing',
        header: '製造場所',
      },
    ],
    [],
  );

  const dailyOrdersTable = useMaterialReactTable({
    columns,
    data: fakeData,
  });

  return dailyOrdersTable;
}