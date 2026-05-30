import type { Product } from "./Catalog/CatalogCard/CatalogCard";
import { CartContext, type CartItemType } from "./CartContext";
import { useEffect, useState } from 'react';
const CartContextProvider = ({ children }: { children: React.ReactNode }) => {

    const [cartItems, setCartItems] = useState<CartItemType[]>([])
    const [cartIsClicked, setCartIsClicked] = useState(false)
const storedCartItems = JSON.parse(localStorage.getItem('cartItems') || '[]')
    useEffect(() => {
        
        if (storedCartItems) {
            setCartItems(storedCartItems)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
    }, [cartItems])

    const addToCart = (newItem: Product, count: number) => {
        const isItem = cartItems.find(item => {
            return item.id === newItem.id //если продукт  уже есть в корзине
        })
        if (isItem) {
            const newQuantity = cartItems.map(item => {
                if (item.id === newItem.id) {//находим товар
                    return { ...item, quantity: item.quantity + count }//добавляем кол-во
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

    const onIncrement = (id: number) => {
        if (id) {
            setCartItems(
                cartItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 }
                    }
                    return item
                }))
        }
        else {
            console.log('не передан id')
        }

    }
    const onDecrement = (id: number) => {
        const itemQuantity = cartItems.find(item => id === item.id);
        if (!itemQuantity) return;

        if (itemQuantity.quantity > 1) {
            setCartItems(
                cartItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 }
                    }
                    return item
                })
            )
        }
        else {
            setCartItems(
                cartItems.filter(item => item.id !== id

                ))
        }

    }

    const toggleShowModal = () => {
        setCartIsClicked(prev => !prev)

    }

    return (

        <CartContext.Provider value={{ cartItems,  cartIsClicked, addToCart, onIncrement, onDecrement, toggleShowModal }}>
            {children}
        </CartContext.Provider>

    )

}
export default CartContextProvider;