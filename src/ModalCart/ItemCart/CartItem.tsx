import { Group, Stack, Image, Text } from '@mantine/core';
import { StepperDemo } from '../../shared/StepperDemo';
import { type CartItemType, useCart } from '../../CartContext';

function CartItem({ item }: { item: CartItemType }) {

  const { id, name, price, image, quantity } = item
  const { onDecrement, onIncrement } = useCart()
  const [firstPart, secondPart] = name.split(" - ")
  if (!item) {
    console.log("В CartItem забыли передать item");
    return null;
  }

  return (

    <Group

      gap="md"
      wrap="nowrap"
      w="100%"
    >

      <Image
        src={image}
        alt="cart item"
        w={64}
        h={64}
        radius="xs"
      />


      <Stack
        w={320}
        h={64}
        justify="space-between"
        gap={0}
      >
        <Text size="sm" fw={500}>{firstPart}<br />{secondPart}</Text>


        <Group justify="space-between" w="100%" wrap="nowrap">
          <Text size="sm" c="dimmed">{`$ ${price}`}</Text>
          <Group gap={0}>
            <StepperDemo
              onDecrement={() => onDecrement(id)}
              onIncrement={() => onIncrement(id)}
              quantity={quantity} />
          </Group>
        </Group>
      </Stack>
    </Group>
  );
}

export { CartItem };

