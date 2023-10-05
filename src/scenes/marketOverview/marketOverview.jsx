import { tokens } from "../../theme";
import { useTheme, Box, Typography } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';

const MarketOverview = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const { coinData, loading, error } = useSelector((state) => state.data);

  const columns = [
    { field: 'Id', headerName: 'ID', width: 1 },
    {
      field: 'Name', headerName: 'Name', width: 200,
      renderCell: ({ row: { Name } }) => {
        return (<Box
          display="flex" justifyContent="space-between" borderRadius="4px"
        >
          <Box sx={{
            height: 30,
            width: 30,
          }} component="img" src={Name.image} alt="coin logo" />

          <Box><Typography color={'yellow'} sx={{ ml: "5px" }}>{Name.name}
          </Typography></Box>
          <Box margin={'0 5px'} color={'yellow'}>{Name.symbol}</Box>
        </Box>
        )
      },
    },
    { field: 'Price', headerName: 'Price', width: 120 },
    { field: 'MarketCap', headerName: 'MarketCap', width: 120 },
    { field: 'circulatingSupply', headerName: 'circulatingSupply', width: 120 },
    { field: 'a24hrVolume', headerName: '24hrVolume', width: 120 },
  ];
  const rows = coinData

  const getRowId = (row) => row.Id;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}, check your Internet </div>;
  }

  return (
    <Box padding={"8px"} backgroundColor={colors.primary[400]} borderRadius={"10px"} >
      <Box>
        <div style={{ height: 300, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            getRowId={getRowId}
            {...coinData}
            initialState={{ ...coinData.initialState, pagination: { paginationModel: { pageSize: 25 } } }}
            pageSizeOptions={[25, 50]}
          />
        </div>
      </Box>
    </Box>
  )
}

export default MarketOverview;  
