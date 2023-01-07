import { Box } from "@mui/material";
import Chart from 'chart.js/auto';

export default function TotalLabaTransaksiGraph(){
    return (
        <>
            <Box>
                <Graph />
            </Box>
        </>
    )
}

function Graph(){
    return (
        <>
            <canvas id="goodCanvas1" width="400" height="100" aria-label="Hello ARIA World" role="img"></canvas>
            
        </>
    )
}