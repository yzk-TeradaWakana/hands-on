/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/react-in-jsx-scope */
import { MRT_ColumnDef, useMaterialReactTable } from 'material-react-table';
import { useMemo } from 'react';
import { fakeData } from '../../../constants/OrderDetailDef';
import { OrderDetail } from '../../../models/OrderDetail';


export const makeDailyOrderDetailTableInstance = () => {

  const columns = useMemo<MRT_ColumnDef<OrderDetail>[]>(
    () => [
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
      {
        accessorKey: 'backorder',
        header: 'BO',
      },
      {
        accessorKey: 'status',
        header: '状況',
      },
      {
        accessorKey: 'note',
        header: '備考',
      },
      {
        accessorKey: 'updateReason',
        header: '更新理由',
      },
      {
        accessorKey: 'updateData',
        header: '更新日時',
      },
    ],
    [],
  );

  const dailyOrderDetailTable = useMaterialReactTable({
    columns,
    data: fakeData,
  });

  return dailyOrderDetailTable;
}