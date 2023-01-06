import {Breadcrumbs, Typography, Link} from '@mui/material'
import TransaksiGraph from './pages-components/TransaksiGraph'

export default function Transaksi(){
    return (
        <>
            <header className='bg-green-600 text-center p-3'>
                <Typography color="white">
                    <span className='font-semibold'>
                        Saldo Server : Rp142.500.000,00
                    </span>
                </Typography>
            </header>
            <div id='bread-crumbs' className='ml-3 mt-7'>
                <Breadcrumbs separator="›" aria-label="breadcrumb">
                    <Link underline="none" color="#212B36" href="/" >
                        <div className='font-bold hover:underline hover:underline-offset-4'>
                            Dashboard
                        </div>
                    </Link>
                    <Typography color="#2A99FF">
                        <div className='font-bold'>
                            Transaksi
                        </div>
                    </Typography>
                </Breadcrumbs>
            </div>
            <div id='headline-page' className='mt-4 ml-3'>
                <Typography variant="h4">
                    <span className='font-bold'>
                        Transaksi
                    </span>
                </Typography>
            </div>
            <div id='graph' className='ml-3 mt-4'>
                <TransaksiGraph />
            </div>
        </>
    )
}