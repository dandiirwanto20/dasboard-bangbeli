import { Box } from "@mui/material";
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import { NumericFormat } from 'react-number-format';

export const columns = [
    { field: 'id', width: 120,headerName: 'ID', hide: true },
    { field: 'date', width:120,headerName: 'Tanggal' },
    { field: 'produk', width: 170,headerName: 'Produk' },
    { field: 'no_tujuan', width: 170,headerName: 'No. Tujuan' },
    { field: 'member', width: 130,headerName: 'Member', 
        renderCell: (params) => {
            if (params.row.member === 'Premium') {
                return (
                    <Box sx={{ 
                        backgroundColor:'#FF9500',
                        paddingY:0.4,
                        paddingX:0.8,
                        borderRadius:1,
                        color:'#FFFFFF'
                     }}>
                        <b>
                            <LocalPoliceIcon sx={{ 
                                color:"#FFE600",
                                fontSize:15
                             }} />
                            {params.row.member}
                        </b>
                    </Box>
                )
            } else {
                return (
                    <Box sx={{ 
                        backgroundColor:'#E0E0E0',
                        paddingY:0.4,
                        paddingX:1,
                        borderRadius:1,
                        color:'#637381'
                     }}>
                        <b>
                            {params.row.member}
                        </b>
                    </Box>
                )
            }
        }
    },
    { field: 'nama_lengkap', width: 170, headerName: 'Nama Lengkap'},
    { field: 'laba', width: 170 ,headerName: 'Laba', type: 'number', renderCell: (params) => {
        if (params.row.laba <= 200000) {
            return (
                <Box sx={{ 
                    backgroundColor: '#CB3A31',
                    paddingX:1,
                    paddingY:0.5,
                    borderRadius:1.5,
                    color:'#FFFFFF'
                 }}>
                    <b><NumericFormat displayType={'text'} value={params.row.laba} thousandSeparator={true} prefix="Rp." suffix=",00" /></b>
                </Box>
            )
        } else {
            return (
                <b><NumericFormat displayType={'text'} value={params.row.laba} thousandSeparator={true} prefix="Rp." suffix=",00" /></b>
            )
        }
    } },
    { field: 'status', width: 120,headerName: 'Status', align: 'center',
        renderCell: (params) => (
            <Box
            backgroundColor={
                params.row.status === 'Berhasil' ? '#00AB55' 
                : params.row.status === 'Refund' ? '#CB3A31' 
                : params.row.status === 'Pengisian' ? '#154C80' : '#FF9500'}
            sx={{ 
                paddingX:1,
                paddingY:0.5,
                borderRadius:1.5,
                color:'#FFFFFF',
                textAlign: 'center',
                fontSize:12
             }}>
                {params.row.status}
            </Box>
        )
    },
    { field: 'saldo_akhir', width: 170,headerName: 'Saldo Akhir', type: 'number' },
    { field: 'opsi', width: 70,headerName: 'Opsi',  description: 'This column has a value getter and is not sortable.',
    sortable: false,
    renderCell: () => (
      <strong>
        <Box sx={{ 
            padding:0.7,
            backgroundColor:'#00B998',
            borderRadius:2
         }}>
            PP
        </Box>
      </strong>
    ),},
  ];
  
export const rows = [
    {id:1, date: '1/2/2022', produk:'Pulsa XL', no_tujuan:'081234567890', nama_lengkap:'Fadly', member:'Premium', laba:200000, status:'Berhasil', saldo_akhir:700000,},
    {id:2, date: '1/2/2022', produk:'Pulsa XL', no_tujuan:'081234567890', nama_lengkap:'Fadly', member:'Premium', laba:150000, status:'Refund', saldo_akhir:700000,},
    {id:3, date: '1/2/2022', produk:'Pulsa XL', no_tujuan:'081234567890', nama_lengkap:'Fadly', member:'Reguler', laba:2900000, status:'Pengisian', saldo_akhir:700000,},
    {id:4, date: '1/2/2022', produk:'Pulsa XL', no_tujuan:'081234567890', nama_lengkap:'Fadly', member:'Premium', laba:3000000, status:'Menunggu Pembayaran', saldo_akhir:700000,},
    {id:5, date: '1/2/2022', produk:'Pulsa XL', no_tujuan:'081234567890', nama_lengkap:'Fadly', member:'Premium', laba:3000000, status:'Berhasil', saldo_akhir:700000,},
    {id:6, date: '1/2/2022', produk:'Pulsa XL', no_tujuan:'081234567890', nama_lengkap:'Fadly', member:'Premium', laba:3000000, status:'Berhasil', saldo_akhir:700000,},
    {id:7, date: '1/2/2022', produk:'Pulsa XL', no_tujuan:'081234567890', nama_lengkap:'Fadly', member:'Premium', laba:3000000, status:'Berhasil', saldo_akhir:700000,},
    {id:8, date: '1/2/2022', produk:'Pulsa XL', no_tujuan:'081234567890', nama_lengkap:'Fadly', member:'Premium', laba:3000000, status:'Berhasil', saldo_akhir:700000,},
  ];

/*

Tanggal, 
Produk, 
No. Tujuan, 
Member (Premium/Reguler),
Laba, 
Status, 
Saldo Akhir,
Opsi

*/