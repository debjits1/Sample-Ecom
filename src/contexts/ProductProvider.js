import React from 'react';

export const Product = React.createContext();

const ProductProvider = (props) => {

    const initialState = {list: []};

    const productReducer = (state, action) => {
        switch (action.type) {
            case 'select_product': 
                return {
                    ...state,
                    list: [
                        ...state.list.map((item) => {
                            if(item.uid === action.data.uid) {
                                item.selected = action.data.select
                            }
                            return item;
                        })
                    ]
                }
            case 'product_list': {
                return {
                    ...state,
                    list: action.data
                }
            }
            default: 
                return null
        }
    };

    const [state, dispatch] = React.useReducer(productReducer, initialState);
    const value = [state, dispatch];
    return (
        <Product.Provider value={value}>
            {props.children}
        </Product.Provider>
    );
}

export default ProductProvider;