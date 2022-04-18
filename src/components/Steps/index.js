import { Step, StepLabel, Stepper } from '@mui/material';
import React from 'react';

const Steps = ({data}) => {
    return (
        <Stepper activeStep={data.active} alternativeLabel>
            {data && data.list && data.list.map((item) => (
                <Step key={item.key}>
                    <StepLabel>{item.label}</StepLabel>
                </Step>
            ))}
            
        </Stepper>
    );
}

export default React.memo(Steps);