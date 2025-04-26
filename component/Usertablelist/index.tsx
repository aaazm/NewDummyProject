import { useMemo, useState, useEffect } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';
import { getApi } from '@/utils/api';
import { Dialog } from '@mui/material';
import Userform from '../Userform';

export default function Usertable({open, setOpen}: any) {
  const [data, setData] = useState<any[]>([]);
  const [rowSelection, setRowSelection] = useState({});

  const fetchData = async () => {
    try {
      const data = await getApi('https://fakestoreapi.com/users');
      setData(data);
    } catch (error: any) {
      console.error('Failed to fetch:', error.message);
    }
  };

  useEffect(() => {

    fetchData();
  }, []);

  // Define Columns
  const columns = useMemo(
    () => [
      {
        accessorKey: 'name.firstname', // Access nested fields
        header: 'First Name',
        muiTableHeadCellProps: { sx: { color: 'green' } },
        Cell: ({ cell }: any) => <span>{cell.getValue()}</span>,
      },
      {
        accessorKey: 'name.lastname',
        header: 'Last Name',
      },
      {
        accessorKey: 'email',
        header: 'Email',
      },
      {
        accessorKey: 'phone',
        header: 'Phone',
      },
      {
        accessorKey: 'username',
        header: 'Username',
      },
    ],
    [],
  );

  const table = useMaterialReactTable({
    columns,
    data,
    enableColumnOrdering: true,
    enableRowSelection: true,
    enablePagination: true,
    onRowSelectionChange: setRowSelection,
    state: { rowSelection },
  });

  return (
    <>
    <MaterialReactTable table={table} />


    <Dialog onClose={()=> setOpen(false)} open={open}>
        <Userform setOpen={setOpen} />
    </Dialog>
    </>
  );
}
