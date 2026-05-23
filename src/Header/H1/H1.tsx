import { ButtonDemo } from '../../shared/ButtonDemo'
import styles from './H1.module.scss'

type H1Props = {
    children: string
}


function H1({ children }: H1Props) {
    return (
    <h1 >{children}
      <ButtonDemo>SHOP</ButtonDemo>
    </h1>
    )
}
export { H1 }