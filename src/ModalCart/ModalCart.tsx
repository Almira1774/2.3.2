import { Box, Stack, Group, Text } from '@mantine/core';
import { CartItem } from './ItemCart/CartItem';
import { useCart } from '../CartContext';




function ModalCart() {
    const { cartItems } = useCart();
    return (
        // Заменяем внешний .cartModal
        <Stack
            w={444}
            mih={100} // Из вашего CSS взяли последнее значение height: 100px
            bg="aqua"
            pos="sticky" // position: relative
            left={600}     // left: 600px
            style={{ zIndex: 200 }} // z-index передаем через инлайн-стиль
            gap={0}
        // сбрасываем стандартные отступы Stack между элементами
        >


            {cartItems.map((product) => {
                return (
                    <Box key={product.id}
                        w={396}
                        bg="rgb(57, 71, 71)"
                        flex={1} // Чтобы внутренний блок растягивался по высоте родителя, если нужно
                    >
                        <CartItem id={product.id}
                            name={product.name}
                            image={product.image}
                            quantity={product.quantity}
                            price={product.price}
                        
                        ></CartItem>
                    </Box>
    )
})}




<Group justify="space-between" w="100%" px="md" mt="auto">
    <Text fw={700}>Total:</Text>
    <Text fw={700}>$100.00</Text> {/* Сюда потом подставите общую сумму */}
</Group>
        </Stack >
    );
}

export { ModalCart };