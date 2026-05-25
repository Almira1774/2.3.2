import {CartContext, type CartItemType } from "./CartContext";
import {useState} from 'react';
const CartContextProvider = ({ children }: { children: React.ReactNode }) => {

const[cartItems, setCartItems]=useState<CartItemType[]>([])

const addToCart = (newItem:CartItemType)=>{
const isItem = cartItems.find(item=>{
    return item.id===newItem.id
})
if(isItem){
    const newQuantity = cartItems.map(item=>{
        if(item.id===newItem.id){
            return { ...item, quantity: item.quantity + 1 }
        }  
        return item     
    })
    setCartItems(newQuantity)
}
else{
    const newQuantity = {...newItem, quantity:1}
    setCartItems([...cartItems,newQuantity])
    
}
}
    return (

        <CartContext.Provider value={{ cartItems, addToCart }}>
            {children}
        </CartContext.Provider>

    )

}
export default CartContextProvider;