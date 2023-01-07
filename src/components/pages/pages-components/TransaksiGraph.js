import { Box, Grid, LinearProgress, Typography } from "@mui/material";
// import TotalLabaTransaksiGraph from "./TotalLabaTransaksiGraph";
import { TrendingUp } from '@mui/icons-material';

export default function TransaksiGraph() {
  return (
    <>
      <Box margin={0.9}>
        <Grid container>

          {/* graph left side */}
          <Grid item xs={4} paddingX={1}>
            <Box
              sx={{
                borderRadius: 2,
                boxShadow: 1,
              }}
              paddingY={2}
            >
              <Typography variant="h6" gutterBottom paddingX={2}>
                <b>Total Laba Transaksi</b>
              </Typography>
              {/* <TotalLabaTransaksiGraph /> */}
            </Box>
          </Grid>
          {/* graph left side */}

          {/* graph right side */}
          <Grid item xs={8} paddingX={1}>
            <Box mb={1} padding={2} sx={{
                borderRadius: 2,
                boxShadow: 1,
              }}>
              <Typography variant="h6" gutterBottom>
                <b>Laba Transaksi</b>
              </Typography>
              <Box variant="container" mb={3}>
              <Grid container>
                  <Grid item xs={6} >
                    <Typography mb={0.8} variant="subtitle2"><b>Laba Hari</b></Typography>
                  </Grid>
                  <Grid item xs={6} textAlign="end">
                    <Typography  mb={0.8} variant="subtitle1">Rp14.500.000,00</Typography>
                  </Grid>
                </Grid>
                <LinearProgress variant="determinate" value={20} color="error" />
              </Box>
              <Box variant="container" >
                <Grid container>
                  <Grid item xs={6} >
                    <Typography mb={0.8} variant="subtitle2"><b>Laba (September)</b></Typography>
                  </Grid>
                  <Grid item xs={6} textAlign="end">
                  <Typography  mb={0.8} variant="subtitle1">Rp14.500.000,00</Typography>
                  </Grid>
                </Grid>
                <LinearProgress variant="determinate" value={20} />
              </Box>
            </Box>
            <Grid item container>
              <Grid item xs={6} paddingRight={1}>
                <Box
                  sx={{
                    borderRadius: 2,
                    boxShadow: 1,
                    backgroundColor: '#005249'
                  }}
                  padding={2}
                >
                  <TrendingUp sx={{ color:'#00AB55', fontSize: 40}} />
                </Box>
              </Grid>
              <Grid item xs={6} paddingLeft={1}>
                <Box
                  sx={{
                    borderRadius: 2,
                    boxShadow: 1,
                    backgroundColor : '#7A4F01'
                  }}
                  padding={2}
                >
                  <TrendingUp sx={{ color:'#FFC107', fontSize: 40}} />
                </Box>
              </Grid>
            </Grid>
          </Grid>
          {/* graph righ side */}

        </Grid>
      </Box>
    </>
  );
}
