
import { createContext, useContext, useState } from "react";
export type CartItemType = {
    id: number;
    image: string;
    name: string;
    price: number;
    quantity: number;

}

export type CartContextType = {
    cartItems: CartItemType[];
    addToCart: (item: CartItemType) => void
}
export const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('Контекст должен быть внутри Провайдера');

    }
    else {
        return context;
    }
};