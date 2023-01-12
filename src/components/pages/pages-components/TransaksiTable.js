import { Box, Typography } from "@mui/material";
import { DataGrid, gridClasses } from '@mui/x-data-grid';
import { rows, columns } from "../../utils/Data";

export default function TransaksiTable(){

    return (
        <>
            <Box marginBottom={4}>
                <Typography variant="h4">
                    <b>Filter</b>
                </Typography>
                {/* <Search /> */}
            </Box>
            <Box marginRight={1}>
                <DataTable />
            </Box>
        </>
    )
}

function DataTable() {
    return (
      <div style={{ height: 400}}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          getRowHeight={() => 'auto'}
          sx={{
            [`& .${gridClasses.cell}`]: {
              py: 1,
            },
          }}
        />
      </div>
    );
  }