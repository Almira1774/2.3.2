import { Group, Stack, Image, Text } from '@mantine/core';
import { StepperDemo } from '../../shared/StepperDemo';
import type { CartItemProps } from '../../Catalog/CatalogCard/CatalogCard';
import type { CartItemType } from '../../CartContext';

function CartItem(item:CartItemType) {
  const{id,name,price,image,quantity}=item
  return (
    // Внешний контейнер .cartItem (горизонтальный ряд для картинки и информации)
    <Group 
      bg="aquamarine" // background-color из вашего CSS
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
        <Text size="sm" fw={500}>{name}</Text>

        {/* Контейнер .cartItem-info--stepper (горизонтальный ряд для Price и StepperDemo) */}
        <Group justify="space-between" w="100%" wrap="nowrap">
          <Text size="sm" c="dimmed">{`$ ${price}`}</Text>
          <StepperDemo 
          onDecrement={()=>{}}
          onIncrement={()=>{}}
          quantity={quantity}/>
        </Group>
      </Stack>
    </Group>
  );
}

export { CartItem };