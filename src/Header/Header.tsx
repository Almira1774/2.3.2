
import { H1 } from './H1/H1'
import { ButtonDemo } from '../shared/ButtonDemo'
import ButtonCart from '../shared/ButtonCart'
import { BadgeDemo } from '../shared/BadgeDemo'
import { type CartItemType, useCart } from '../CartContext';
import { useState } from 'react'
import '@mantine/core/styles.css';
function Header() {

  const { cartItems, isEmpty, toggleShowModal } = useCart()

  return ( 
    <header  style={{width:'1440', 
    height: '59px',
     backgroundColor: 'rgb(255, 255, 255)', 
     color: 'black', 
     display: 'flex',
      paddingLeft: '20px', 
      paddingRight: '20px', 
      alignItems: 'center',
      top:'0',
      position:'sticky', 
      zIndex:'200',
      marginBottom: 'auto'}}>
      <H1>Vegetables</H1>
      <ButtonCart
        imageSrc='/cart.svg'
        imageAlt='cart icon'
        bg="#54B46A"
        pos={'fixed'}
        right={'20px'}
        top={7.5}
        onClick={toggleShowModal}>
        {cartItems.length>0 ? <BadgeDemo bg='#FFFFFF'>
          {cartItems.reduce((amount, item) =>
            amount + item.quantity, 0
          )}

        </BadgeDemo> : ""}
        <span style={{ marginLeft: 10 }}>Cart</span>
      </ButtonCart >
    </header>
  )
}

export { Header }