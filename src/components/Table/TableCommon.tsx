import { MaterialReactTable,
  MRT_RowData,
  MRT_TableInstance,
} from 'material-react-table';

export interface CommonTableProps<TData extends MRT_RowData> {
  tableInstance: MRT_TableInstance<TData>;
}

const CommonTable = <TData extends MRT_RowData,>({ tableInstance }: CommonTableProps<TData>) => {

  return (
    <MaterialReactTable table = {tableInstance} />
  );
};

export default CommonTable;
