import React, { useContext } from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { Box, Divider, Paper } from '@mui/material';
import { Product } from '../../contexts/ProductProvider';
import usePriceCalc from '../../hooks/usePriceCalc';

const addresses = ['1 MUI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const payments = [
    { name: 'Card type', detail: 'Visa' },
    { name: 'Card holder', detail: 'Mr John Smith' },
    { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
    { name: 'Expiry date', detail: '04/2024' },
];

const currency = '$';

export default function Payment() {
    const [productData] = useContext(Product);
    let total = 0;
    const discountPercentage = 15;
    const selectedItems = productData
        && productData.list
        && productData.list.filter((item) => {
            const price = item.selected ? item.price : 0;
            total = parseFloat((total + price).toFixed(2))
            return item.selected;
        });
    const { discounted, payable } = usePriceCalc(total, discountPercentage);

    return (
        <Paper elevation={1} sx={{ px: 4, py: 2 }}>
            <Typography variant="h6" gutterBottom>
                Order summary
            </Typography>
            <List disablePadding>
                {selectedItems.map((product) => (
                    <Box key={product.uid}>
                    <ListItem sx={{ py: 1, px: 0 }}>
                        <ListItemText primary={product.name} />
                        <Typography variant="body2">{product.price}</Typography>
                    </ListItem>
                    <Divider />
                    </Box>
                ))}

                <ListItem sx={{ py: 1, px: 0 }}>
                    <ListItemText primary="Total" />
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                        {currency}{total}
                    </Typography>
                </ListItem>
                <ListItem sx={{ py: 1, px: 0 }}>
                    <ListItemText primary={`Discount (${discountPercentage}%)`} />
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                        {currency}{discounted}
                    </Typography>
                </ListItem>
                <ListItem sx={{ py: 1, px: 0 }}>
                    <ListItemText primary="Payable" />
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                        {currency}{payable}
                    </Typography>
                </ListItem>
            </List>
            <Divider />
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                        Shipping
                    </Typography>
                    <Typography gutterBottom>John Smith</Typography>
                    <Typography gutterBottom>{addresses.join(', ')}</Typography>
                </Grid>
                <Grid item container direction="column" xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                        Payment details
                    </Typography>
                    <Grid container>
                        {payments.map((payment) => (
                            <React.Fragment key={payment.name}>
                                <Grid item xs={6}>
                                    <Typography gutterBottom>{payment.name}</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography gutterBottom>{payment.detail}</Typography>
                                </Grid>
                            </React.Fragment>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
}