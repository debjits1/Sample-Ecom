import { Box } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import { Product } from '../../contexts/ProductProvider';
import { CheckoutSteps } from '../../contexts/StepProvider';
import useFetch from '../../hooks/useFetch';
import OrderComplete from '../OrderComplete';
import Payment from '../Payment';
import ProductList from '../ProductList';
import StepNav from '../StepNav';
import Steps from '../Steps';
import './style.css';

const Checkout = () => {
    const { data, loading, error } = useFetch('MOCK_DATA.json');

    const [, dispatchProductAction] = useContext(Product);

    useEffect(() => {
        if (!loading && data) {
            dispatchProductAction({ type: 'product_list', data });
        }
    }, [data, loading, error, dispatchProductAction]);

    const [stepsData] = useContext(CheckoutSteps);

    return (
        <Box className='checkout' p={4}>
            <Steps data={stepsData} />
            <Box className='step-wrapper' pt={4} pb={6}>
                {stepsData.active === 0 && <ProductList />}
                {stepsData.active === 1 && <Payment />}
                {stepsData.active === 2 && <OrderComplete />}
            </Box>
            <StepNav></StepNav>
        </Box>
    );
}

export default Checkout;