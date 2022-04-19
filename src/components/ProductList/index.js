import { List, ListItem, Paper } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import { Product } from '../../contexts/ProductProvider';
import useFetch from '../../hooks/useFetch';
import ListElement from '../ListElement';

const ProductList = () => {
  const [productData, dispatchProductAction] = useContext(Product);
  const { data, loading, error } = useFetch('MOCK_DATA.json');

  useEffect(() => {
      if (!loading && data) {
          dispatchProductAction({ type: 'product_list', data });
      }
  }, [data, loading, error, dispatchProductAction]);
  return (
    <Paper elevation={1}>
      <List>
        {productData
          && productData.list.map(item => (
            <ListItem key={item.uid}>
              <ListElement data={item} />
            </ListItem>
          ))
        }
      </List>
    </Paper>
  );
}

export default React.memo(ProductList);
