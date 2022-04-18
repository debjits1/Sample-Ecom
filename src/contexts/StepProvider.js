import React from 'react';

export const CheckoutSteps = React.createContext();

const CheckoutStepsProvider = (props) => {
    const initialState = {
        active: 0,
        list: [
            {label: 'Select products', key: 1},
            {label: 'Checkout', key: 2},
            {label: 'Complete', key: 3, autoComplete: true}
        ]
    };

    const stepsReducer = (state, action) => {
        switch (action.type) {
            case 'change_step': 
                return {
                    ...state,
                    active: action.data.nextStep
                }
            default: 
                return null
        }
    };

    const [state, dispatch] = React.useReducer(stepsReducer, initialState);
    const value = [state, dispatch];
    return (
        <CheckoutSteps.Provider value={value}>
            {props.children}
        </CheckoutSteps.Provider>
    );
}

export default CheckoutStepsProvider;