import '@testing-library/jest-dom';
import { screen } from "@testing-library/react";
import { renderWithContext } from "../test/utils";
import { expect, it, describe, beforeEach } from "vitest";
import { Header } from './Header';
import { ModalCart } from '../ModalCart/ModalCart';
import type { CartItemType } from '../CartContext';

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


describe('badge shows amount',()=>{
    let data: CartItemType[];
    
    beforeEach(()=>{
         data = [{
            id: 2,
            name: "Banana - 1kg",
            price: 40,
            image: "test-banana-image.jpg",
            quantity: 2
        }, {
            id: 3,
            name: "Apple - 1kg",
            price: 50,
            image: "test-apple-image.jpg",
            quantity: 4
        }]
        localStorage.setItem('cartItems', JSON.stringify(data))
        renderWithContext
        (<>
          <Header></Header>
          <ModalCart></ModalCart>
          </>)
    })

    it('amount',()=>{

        const headerBadge = screen.getByTestId('headerBadge')
        expect(headerBadge).toBeInTheDocument()
        console.log(headerBadge.textContent)
        expect(headerBadge).toHaveTextContent('6')
    })

})