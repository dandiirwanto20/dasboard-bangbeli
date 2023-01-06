import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function TransaksiGraph() {
  return (
    <>
    <div className='flex'>
        <div className='inline-flex'>
            <Box sx={{
                width: 300,
                height: 300,
                boxShadow : 1,
                borderRadius : 5
                }}>
                
            </Box> 
            <Box sx={{
                width: 300,
                height: 30,
                boxShadow : 1,
                borderRadius : 5
                }}>
                
            </Box> 
        </div>
    </div>
    </>
  );
}