import { Checkbox, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { Product } from '../../contexts/ProductProvider';

const ListElement = ({ data }) => {
    const [, dispatch] = useContext(Product);

    const onSelect = () => {
        dispatch({ type: 'select_product', data: { uid: data.uid, select: !data.selected } })
    };

    const selected = !!data.selected;

    return (
        <ListItemButton role={undefined} onClick={onSelect} dense data-testid="list-item">
            <ListItemIcon>
                <Checkbox
                    data-testid="item-checkbox"
                    edge="start"
                    checked={selected}
                    disableRipple
                />
            </ListItemIcon>
            <ListItemText>{data.name}</ListItemText>
            <Typography>{data.price}</Typography>
        </ListItemButton>
    );
}

export default ListElement;