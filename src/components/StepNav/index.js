import { Button, Paper } from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext } from 'react';
import { Product } from '../../contexts/ProductProvider';
import { CheckoutSteps } from '../../contexts/StepProvider';
const StepNav = () => {
    const [stepsData, dispatchStepAction] = useContext(CheckoutSteps);
    const [, dispatchProductAction] = useContext(Product);

    const isFirstStep = stepsData.active === 0;

    const isLastStep = stepsData.active === stepsData.list.length - 1;

    const onPrev = () => {
        if (isFirstStep) {
            return;
        }
        dispatchStepAction({ type: 'change_step', data: { nextStep: stepsData.active - 1 } })
    }

    const onNext = () => {
        if (isLastStep) {
            return
        }
        dispatchStepAction({ type: 'change_step', data: { nextStep: stepsData.active + 1 } })
    };
    const onReset = () => {
        dispatchStepAction({ type: 'reset'});
        dispatchProductAction({type: 'reset'});
        
    };

    return (
        <Paper elevation={5} color="primary"
            sx={{ left: 0, right: 0, bottom: 0, px: 10, py: 2, position: 'fixed', display: 'flex', justifyContent: 'space-between' }}>
            <Box>
                <Button onClick={onPrev} 
                    sx={{display: isLastStep ? 'none' : ''}} 
                    disabled={isFirstStep} 
                    variant="text">
                    Back
                </Button>
            </Box>
            <Box>
                <Button onClick={onNext} 
                    sx={{display: isLastStep ? 'none' : ''}} 
                    disabled={isLastStep} 
                    variant="text">
                    Next
                </Button>
            </Box>
            <Box sx={{display: isLastStep ? '' : 'none'}}>
                <Button onClick={onReset} variant="text">
                    Reset
                </Button>
            </Box>
        </Paper>
    );
}

export default StepNav;