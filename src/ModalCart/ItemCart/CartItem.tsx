import { Group, Stack, Image, Text } from '@mantine/core';
import { StepperDemo } from '../../shared/StepperDemo';
import type { CartItemProps } from '../../Catalog/CatalogCard/CatalogCard';
import { type CartItemType, useCart } from '../../CartContext';

function CartItem({ item }: { item: CartItemType }) {

  const { id, name, price, image, quantity } = item
  const { onDecrement, onIncrement } = useCart()
  const[firstPart, secondPart] = name.split(" - ") // Разделяем имя на две части для переноса
  if (!item) {
    console.log("В CartItem забыли передать item");
    return null;
  }

  return (
    // Внешний контейнер .cartItem (горизонтальный ряд для картинки и информации)
    <Group
       // background-color из вашего CSS
      gap="md"        // отступ между картинкой и текстом
      wrap="nowrap"   // запрещаем перенос элементов на новую строку
      w="100%"
    >
      {/* Картинка из Mantine (встроенные width и height) */}
      <Image
        src={image}
        alt="cart item"
        w={64}
        h={64}
        radius="xs" // можно добавить аккуратное скругление углам
      />

      {/* Контейнер .cartItem-info (вертикальный столбик для Name и нижней строки) */}
      <Stack
        w={320}
        h={64} // увеличили до 64px, чтобы Name и Степпер красиво разошлись по высоте картинки
        justify="space-between" // вертикальное распределение (Name вверху, цена внизу)
        gap={0}
      >
        <Text size="sm" fw={500}>{firstPart}<br />{secondPart}</Text>

        {/* Контейнер .cartItem-info--stepper (горизонтальный ряд для Price и StepperDemo) */}
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

