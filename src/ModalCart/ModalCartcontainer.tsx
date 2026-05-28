import { ModalCart } from './ModalCart';
import { useCart } from '../CartContext';
const ModalCartContainer = () => {
    const{cartIsClicked}=useCart()
    return (
        cartIsClicked?
        <ModalCart></ModalCart>
        : ""

    )
}

export { ModalCartContainer };