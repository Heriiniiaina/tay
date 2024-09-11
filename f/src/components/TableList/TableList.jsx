import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';



export default function TableList({ Columns, Arrows, Height, PageSizeOptions }) {
  const columns = Columns;
  const rows = Arrows;

  const paginationModel = { page: 0, pageSize: PageSizeOptions[0] };

  return (
    <Paper
      sx={{
        borderRadius: 2,
        height: Height,
        width: "100%",
        background: "transparent",
        boxShadow: "0 7px 25px rgba(0, 0, 0, 0.11)",
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={PageSizeOptions}
        // checkboxSelection
        sx={{ border: 0, borderRadius: 2, background: "transparent" }}
      />
    </Paper>
  );
}