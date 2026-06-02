import '@testing-library/jest-dom';
import {screen, waitFor, within } from "@testing-library/react";
import { renderWithContext } from "../test/utils";
import { expect, it, describe, beforeEach } from "vitest";
import userEvent from '@testing-library/user-event';
import type { CartItemType } from '../CartContext';
import { ModalCart } from './ModalCart';

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

describe('Cart render card from localStorage', () => {
    let data: CartItemType[];

    beforeEach(() => {
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
        renderWithContext(<ModalCart />)
    })


    it('cart render name', () => {


        const bananText = screen.getByText(/Banana/i)

        expect(bananText).toBeInTheDocument()
    })

    it('cart render total', () => {

        const expectedSum = screen.getByText(/280/)
        expect(expectedSum).toBeInTheDocument()
    })
})

describe('Cart add and delete', () => {
    let data: CartItemType[];

    beforeEach(() => {
        data = [{
            id: 2,
            name: "Banana - 1kg",
            price: 40,
            image: "test-banana-image.jpg",
            quantity: 1
        }, {
            id: 3,
            name: "Apple - 1kg",
            price: 50,
            image: "test-apple-image.jpg",
            quantity: 1
        }]
        localStorage.setItem('cartItems', JSON.stringify(data))
        renderWithContext(<ModalCart />)
    })

    it('cart delete item', async () => {
        const bananaContainer = screen.getByTestId('Banana')
        expect(bananaContainer).toBeInTheDocument()

        const bananaDecrement = within(bananaContainer).getByText('-')

        userEvent.click(bananaDecrement)
        await waitFor(() => {
            expect(bananaContainer.querySelector('Banana')).toBeNull();
        });
    })

       it('increase the amount of item', async () => {
        const bananaContainer = screen.getByTestId('Banana')
        expect(bananaContainer).toBeInTheDocument()

        const bananaIncrement = within(bananaContainer).getByText('+')
        const bananaAmount = screen.getByTestId('Banana-amount')
        expect(bananaAmount).toBeInTheDocument()

        await userEvent.click(bananaIncrement)
         await userEvent.click(bananaIncrement)

        await waitFor(() => {
            console.log(bananaAmount.textContent)
            expect(bananaAmount).toHaveTextContent('3');
        });
    })


    it('When items are deleted, cart shows "isEmpty image"', async () => {
        const bananaContainer = screen.getByTestId('Banana')
        expect(bananaContainer).toBeInTheDocument()

        const appleContainer = screen.getByTestId('Apple')
        expect(appleContainer).toBeInTheDocument()

        const bananaDecrement = within(bananaContainer).getByText('-')
        const appleDecrement = within(appleContainer).getByText('-')



        await userEvent.click(bananaDecrement)
        await waitFor(() => {
            expect(screen.queryByText('Banana')).toBeNull();
        });

        await userEvent.click(appleDecrement)
        await waitFor(() => {
            expect(screen.queryByText('Apple')).toBeNull();
        });
        
            const cartIsEmpty = await screen.findByAltText('empty cart')
            expect(cartIsEmpty).toBeVisible()
        



    })



})


{/* 1.Проверяем корзину, если в локал сторадж есть данные.
    создаем данные для локал сторадж. ожидаем, затем первый рендер или перезагрузка. ищем данные в корзине 
    2.проверяем, что тотал выводит правильную сумму.
    даем данные. находим вывод тотал. ожидаем, что цена*на количество дает то, что получилось в тотал. 
    3. удаление из корзины. это в itemCart, наверное лучше.
    находим длину элемента. кликаем до тех пор, пока не дойдем до 1.
     Связать это с quantity? cравнить? затем проверить длину,она должна быть 0*/}