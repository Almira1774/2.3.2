import { Box, Stack, Group, Text, Image } from '@mantine/core';
import { CartItem } from './ItemCart/CartItem';
import { useCart } from '../CartContext';
import '@mantine/core/styles.css';



function ModalCart() {
    const { cartItems } = useCart();
    return (
        cartItems.length > 0 ?
            <Stack
                style={{
                    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 36px 28px -7px, rgba(0, 0, 0, 0.04) 0 17px 17px -7px',
                    zIndex: "200",
                    overflowY: "auto"
                }}

                bdrs={16}
                w={444}
                mih={100}
                mah={400}
                p={24}
                bg="white"
                pos="fixed"
                right={20}
                top={71}
                gap={0}

            >
                {cartItems.map((product) => {
                    return (
                        <Box key={product.id}
                            w={396}
                            flex={1}
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
            <Stack
                style={{
                    zIndex: 200,
                    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 36px 28px -7px, rgba(0, 0, 0, 0.04) 0 17px 17px -7px'
                }}
                w={301}
                h={227}
                bg="white"
                bdrs={16}
                p={24}
                pos="fixed"
                right={20}
                top={71}
                gap={0}
                justify="center"
                align="center">



                <Image src='/cart_empty.svg'
                    w={118} h={107}
                ></Image>
                <Text style={{ textAlign: "center" }}>Cart is Empty</Text>
            </Stack>

    );

}

export { ModalCart };