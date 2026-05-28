import styles from './Header.module.scss'
import { H1 } from './H1/H1'
import { ButtonDemo } from '../shared/ButtonDemo'
import ButtonCart from '../shared/ButtonCart'
import { BadgeDemo } from '../shared/BadgeDemo'
import { type CartItemType, useCart } from '../CartContext';
import { useState } from 'react'
function Header() {

  const { cartItems,isEmpty,toggleShowModal } = useCart()

  return (
    <header className={styles.header}>
      <H1>Vegetables</H1>
      <ButtonCart imageSrc='/cart.svg' imageAlt='cart icon' bg="#54B46A"
      onClick={toggleShowModal}>
        {!isEmpty ?<BadgeDemo bg='#FFFFFF'>
          {cartItems.reduce((amount, item) =>
            amount + item.quantity, 0
          )}

        </BadgeDemo>:""}
        
        Cart
      </ButtonCart>
    </header>
  )
}

export { Header }