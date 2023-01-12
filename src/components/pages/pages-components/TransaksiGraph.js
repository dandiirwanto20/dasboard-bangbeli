import { Box, CircularProgress, Grid, LinearProgress, Typography } from "@mui/material";
import { TrendingUp, Circle } from '@mui/icons-material';

export default function TransaksiGraph() {
  return (
    <>
      <Box marginBottom={4}>
        <Typography variant="h4">
          {/* <span className='font-bold'> */}
          <b>Transaksi</b>
          {/* </span> */}
        </Typography>
        <Box margin={0.9}>
          <Grid container>

            {/* graph left side */}
            <LeftGraph />
            {/* graph left side */}

            {/* graph right side */}
            <RightGraph />
            {/* graph righ side */}

          </Grid>
        </Box>
      </Box>
    </>
  );

function LeftGraph(){
  return (
    <>
      <Grid item xs={3} paddingX={1}>
        <Box
          sx={{
            borderRadius:4,
            boxShadow: 1
          }}
          paddingY={2}
        >
          <Typography variant="h6" gutterBottom paddingX={2}>
            <b>Total Laba Transaksi</b>
          </Typography>

          <Box paddingX={2} paddingBottom={2} textAlign='center' mt={4}>
            <CircularProgress variant="determinate" color="success" value={90} size={200} />
          </Box>
          <Box sx={{ borderTop: 2, borderTopColor:'#DFE7E8', textAlign:'center', paddingTop:2 }}>
            <Typography variant="subtitle2"><Circle sx={{ color:'#00AB55', fontSize: 20}} /> Total Laba Keseluruhan</Typography>
          </Box>
        </Box>
      </Grid>
    </>
  )
}

function RightGraph(){
  return (
    <>
      <Grid item xs={9} paddingX={1}>
            
        <LabaTransaksi />

        <DoubleGridTransaksi />

      </Grid>
    </>
  )
}

function LabaTransaksi(){
  return (
    <>
      <Box mb={1} padding={2} sx={{
          borderRadius: 4,
          boxShadow: 1,
        }}>
        <Typography variant="h6" gutterBottom>
          <b>Laba Transaksi</b>
        </Typography>
        
        <LabaLinearProgress />
      </Box>
    </>

  )
}

function LabaLinearProgress(){
  return (
    <>
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
    </>
  )
}

function DoubleGridTransaksi(){
  return (
    <>
      <Grid item container>
        <Grid item xs={6} paddingRight={0.5}>
          <Box
            sx={{
              borderRadius: 4,
              boxShadow: 1,
              backgroundColor: '#005249'
            }}
            padding={2}
          >
            <Grid item container>
              <Grid item xs={2}>
                <TrendingUp sx={{ color:'#00AB55', fontSize: 80}} />
              </Grid>
              <Grid item xs={8}>
                <Typography sx={{ 
                  color:'#ffffff',
                  fontSize:30,
                  marginLeft:4,
                  fontWeight:'bold'
                }}>
                  38,000
                  <Typography>
                      Total Transaksi
                  </Typography>
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={6} paddingLeft={0.5}>
          <Box
            sx={{
              borderRadius: 4,
              boxShadow: 1,
              backgroundColor : '#7A4F01'
            }}
            padding={2}
          >
            <Grid item container>
              <Grid item xs={2}>
                <TrendingUp sx={{ color:'#FFC107', fontSize: 80}} />
              </Grid>
              <Grid item xs={8}>
                <Typography sx={{ 
                  color:'#ffffff',
                  fontSize:30,
                  marginLeft:4,
                  fontWeight:'bold'
                }}>
                  38,000
                  <Typography>
                    Total Transaksi
                  </Typography>
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}
}
