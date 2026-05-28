import { Box, Stack, Group, Text } from '@mantine/core';
import { CartItem } from './ItemCart/CartItem';
import { useCart } from '../CartContext';




function ModalCart() {
    const { cartItems, isEmpty } = useCart();
    return (
        !isEmpty ?
            <Stack 
                w={444}
                mih={100} // Из вашего CSS взяли последнее значение height: 100px
                bg="aqua"
                pos="sticky"
                left={600}
                style={{ zIndex: 200 }}
                gap={0}
            // сбрасываем стандартные отступы Stack между элементами
            >
                {cartItems.map((product) => {
                    return (
                        <Box key={product.id}
                            w={396}
                            flex={1} // Чтобы внутренний блок растягивался по высоте родителя, если нужно
                        >
                            <CartItem item={product}></CartItem>
                        </Box>
                    )
                })}

                <Group justify="space-between" w="100%" px="md" mt="auto">
                    <Text fw={700}>Total:</Text>
                    <Text fw={700}>{cartItems.reduce((total, item) =>
                        total + item.quantity * item.price, 0

                    )}
                    </Text>
                </Group>
            </Stack >
            :
            <Stack    w={301}
               h={227} // Из вашего CSS взяли последнее значение height: 100px
                
                pos="sticky"
                left={600}
                style={{ zIndex: 200 }}
                gap={0}>
                
                <img src='/cart_empty.svg' width={118} height={107}></img>
                <Text>Cart is Empty</Text>
            </Stack>

    );

}

export { ModalCart };