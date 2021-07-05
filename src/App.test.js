import { screen, render, cleanup } from '@testing-library/react'
import AddProduct from '../AddProduct'
import SearchProduct from '../SearchProduct'

test('render', () => {
    render(<SearchProduct />)
    const element1 = screen.getByTestId("Tosearch");
    expect(element1).toBeInTheDocument();
    expect(element1).toHaveTextContent('Product Name');
})
