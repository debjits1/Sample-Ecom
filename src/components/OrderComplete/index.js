import { Divider, Paper, Typography } from '@mui/material';
import React from 'react';

const OrderComplete = () => {
    return ( 
        <Paper elevation={4} sx={{px: 2, py: 5}}>
            <Typography sx={{color: "success.light", my: 2}} variant='h2'>Order Placed</Typography>

            <Divider />
            
            <Typography sx={{color: "text.secondary", mt: 15}} variant="h5">Thank you for your purchase</Typography>
            <Typography sx={{color: "text.secondary", my: 2}} variant="h6">Your order is being prepared for shipping</Typography>
        </Paper>
    );
}
 
export default OrderComplete;