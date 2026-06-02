import '@testing-library/jest-dom';
import { screen } from "@testing-library/react";
import { CatalogCard, type Product } from "./CatalogCard";
import { renderWithContext } from "../../test/utils";
import { expect, it, describe, beforeEach } from "vitest";
import userEvent from '@testing-library/user-event';

Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (query: string) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: () => { },
        removeListener: () => { },
        addEventListener: () => { },
        removeEventListener: () => { },
        dispatchEvent: () => false,
    }),
});

{/* Тесты отображения
    1.image. Вх.данные- catalogCard, изображение. Мок или настоящее?
     ищем каталогкард. ожидаем, что содержит изображение.
     */}


describe('rendering', () => {
    let mockProduct: Product;

    beforeEach(() => {
        mockProduct = {
            id: 2,
            name: "Banana - 1kg",
            price: 40,
            image: "test-banana-image.jpg"
        }
        renderWithContext(<CatalogCard item={mockProduct} />)
    })

    it('Card rendering image', () => {

        const altImage = screen.getByAltText(`ProductCard ${mockProduct.name}`)
        expect(altImage).toBeInTheDocument()
    })

    it('Card rendering price', () => {

        const priceText = screen.getByText(`$ ${mockProduct.price}`)
        expect(priceText).toBeInTheDocument()
    })

})

describe('check increment, decrement, add functions', () => {
    let mockProduct: Product;
    beforeEach(() => {
        mockProduct = {
            id: 2,
            name: "Banana - 1kg",
            price: 40,
            image: "test-banana-image.jpg"
        }
        renderWithContext(<CatalogCard item={mockProduct} />)
    })

    it('onIncrement - return a+1', async () => {
        const plusButton = screen.getByText('+');
        const countDisplay = screen.getByText('1')
        await userEvent.click(plusButton)
        expect(countDisplay).toHaveTextContent('2')
    })

    it('onDecrement - return a-1', async () => {
        const plusButton = screen.getByText('+');
        const minusButton = screen.getByText('-')
        const countDisplay = screen.getByText('1')


        await userEvent.click(plusButton)
        expect(countDisplay).toHaveTextContent('2')

        await userEvent.click(minusButton)
        expect(countDisplay).toHaveTextContent('1')
    })

       it('onDecrement - if a=1,return 1-a=1', async () => {
        
        const minusButton = screen.getByText('-')
        const countDisplay = screen.getByText('1')
        

        await userEvent.click(minusButton)
        expect(countDisplay).toHaveTextContent('1')
    })

}

)