import { List, ListItem, Paper } from '@mui/material';
import React, { useContext } from 'react';
import { Product } from '../../contexts/ProductProvider';
import ListElement from '../ListElement';

const ProductList = () => {
  const [productData] = useContext(Product);

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
