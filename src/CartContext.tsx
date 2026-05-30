
import { createContext, useContext} from "react";
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
cartIsClicked:boolean
addToCart:(item:Product,count:number)=>void
onIncrement:(id:number)=>void
onDecrement:(id:number)=>void
toggleShowModal:()=>void
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
