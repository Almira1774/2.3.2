
import { createContext, useContext, useState } from "react";
import type { Product } from "./Catalog/CatalogCard/CatalogCard";
export type CartItemType = {
    id: number;
    image: string;
    name: string;
    price: number;
    quantity: number;

}

export type CartContextType={
cartItems:CartItemType[];
addToCart:(item:Product)=>void
}
export const CartContext = createContext<CartContextType|undefined>(undefined);

export const useCart=()=>{
const context = useContext(CartContext);
if(!context){
    throw new Error('Контекст должен быть внутри Провайдера');

}
else{
    return context;
}
}
