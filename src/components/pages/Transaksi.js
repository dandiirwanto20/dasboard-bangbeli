import {Breadcrumbs, Typography, Link, Box} from '@mui/material'
import TransaksiGraph from './pages-components/TransaksiGraph'
import TransaksiTable from './pages-components/TransaksiTable'

export default function Transaksi(){
    return (
        <>
            <header className='bg-green-600 text-center p-3'>
                <Typography color="white" fontWeight={600}>
                    Saldo Server : Rp142.500.000,00
                </Typography>
            </header>

            {/* BreadCrumbs */}
            <Box marginLeft={3} marginTop={4}>
                <Breadcrumbs separator="›" aria-label="breadcrumb">
                    <Link underline="none" color="#212B36" href="/" >
                        <div className='hover:underline hover:underline-offset-4'>
                            <b>Dashboard</b>
                        </div>
                    </Link>
                    <Typography color="#2A99FF">
                        <b>Transaksi</b>
                    </Typography>
                </Breadcrumbs>
            </Box>
            {/* BreadCrumbs */}
                
            <Box marginLeft={3} marginTop={4}>
                {/* Transaksi Section Graph */}
                <TransaksiGraph />
                {/* Transaksi Section Graph */}

                {/* Transaksi Table */}
                <TransaksiTable />
                {/* Transaksi Table */}
            </Box>
        </>
    )
}