import styles from './Header.module.scss'
import { H1 } from './H1/H1'
import { ButtonDemo } from '../shared/Button'
import ButtonCart from '../shared/ButtonCart'

 function Header() {
  return (
    <header className={styles.header}>
        <H1>Vegetables</H1> 
        <ButtonCart imageSrc ='/cart.svg' imageAlt='cart icon' bg="#54B46A">Cart</ButtonCart>
    </header>
  )
}

export { Header }