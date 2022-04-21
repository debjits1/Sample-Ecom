import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import ListElement from '.';
import ProductProvider from '../../contexts/ProductProvider';

describe('Renders with proper text ', () => {
    test('should have item name', () => {
        const mockListItem = { name: 'Food', price: 22.2 };
        render(
            <ProductProvider>
                <ListElement data={mockListItem} />
            </ProductProvider>
        );
        const name = screen.getByText(/^Food/);
        expect(name).toBeInTheDocument();

    });
    test('should have item name', () => {
        const mockListItem = { name: 'Food', price: 22.2 };
        render(
            <ProductProvider>
                <ListElement data={mockListItem} />
            </ProductProvider>
        );
        const price = screen.getByText(/^22.2/);
        expect(price).toBeInTheDocument();
    });
})

test('checks checkbox when clicked', () => {
    const mockListItem = { name: 'Food', price: 22.2, selected: false };
    render(
        <ProductProvider>
            <ListElement data={mockListItem} />
        </ProductProvider>
    )
    const itemDom = screen.getByTestId("item-checkbox");
    fireEvent.click(itemDom)
    waitFor(() => expect(itemDom).toHaveClass("Mui-checked"));
})
