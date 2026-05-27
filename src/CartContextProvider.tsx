import type { Product } from "./Catalog/CatalogCard/CatalogCard";
import { CartContext, type CartItemType } from "./CartContext";
import { useState } from 'react';
const CartContextProvider = ({ children }: { children: React.ReactNode }) => {

    const [cartItems, setCartItems] = useState<CartItemType[]>([])

    const addToCart = (newItem: Product,count:number) => {
        const isItem = cartItems.find(item => {
            return item.id === newItem.id //если продукт  уже есть в корзине
        })
        if (isItem) {
            const newQuantity = cartItems.map(item => {
                if (item.id === newItem.id) {//находим товар
                    return { ...item, quantity: item.quantity+count }//добавляем кол-во
                }
                return item     //инкремент
            })
            setCartItems(newQuantity)//обновляем массив данных
            console.log("Добавлен")
        }
        else {
            const newQuantity = { ...newItem, quantity: count }
            setCartItems([...cartItems, newQuantity])
            console.log("Создан")//если товара нет, добавляем в корзину и обновляем массив
        }
    }
   




    return (

        <CartContext.Provider value={{ cartItems, addToCart }}>
            {children}
        </CartContext.Provider>

    )

}
export default CartContextProvider;