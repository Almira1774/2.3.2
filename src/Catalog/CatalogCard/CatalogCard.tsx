import { Card, Image, Text, Group } from '@mantine/core';
import ButtonCart from '../../shared/ButtonCart';
import { StepperDemo } from '../../shared/StepperDemo';
import { useCart } from '../../CartContext';
import { useState } from 'react';

export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;

}

export type CartItemProps = {
  item: Product;
}

function CatalogCard
  ({ item }: CartItemProps) {
  if (!item) {
    console.log("item не передали")
    return null;
  }
  const { id, name, price, image } = item
  const { addToCart, cartItems } = useCart()
  const [count, setCount] = useState(1)
  const [firstPart, secondPart] = name.split(" - ") // Разделяем имя на две части для переноса


  const isQuantity = cartItems.find(cart => cart.id === item.id)
  const quantityValue = isQuantity ? isQuantity.quantity : 0


  return (
    // Убрали все ограничения, карточка теперь идеально слушается сетку Grid
    <Card shadow="sm" withBorder h={'100%'}
      p={'md'}>
      <Card.Section component="a" href="https://mantine.dev/" >
        <Image
          src={image}
          height={276} // Фиксированная высота для всех изображений
          // Удалили width={276}, добавили автоматическое заполнение:
          w="100%"
          fit="cover"
          alt="Norway"
          mb={16}
        />
      </Card.Section>

      {/* Убрали miw={270}. Добавили justify="space-between" для авто-распределения */}
      <Group justify="space-between" align="center" mb={24} wrap="wrap" gap="xs" >
        <Group gap={6} style={{ flexGrow: 1, minWidth: 0 }}>
          <Text size="sm" c="dimmed">
            <strong style={{ color: '#212529', fontSize: '16px' }}>{firstPart}</strong>
          </Text>
          <Text size="sm" c="dimmed" ml={12} >
            {secondPart}
          </Text>
        </Group>
        {/* Убрали ml={100}, теперь блок аккуратно встанет справа */}
        <Group gap={0}>
          <StepperDemo onDecrement={() => {
            if (count > 1) {
              console.log("Кликнули минус, текущий count:", count)
              setCount(count - 1)
            }
          }}

            onIncrement={() => {
              console.log("Кликнули минус, текущий count:", count)
              setCount(count + 1)
            }}
            quantity={count} />
        </Group>
      </Group>

      {/* Для нижней строки тоже полезно сделать space-between, чтобы кнопка и цена разъехались по краям */}
      <Group justify="space-between" w='100%' wrap="nowrap" mt='auto'>
        <Text c="dimmed">
          <strong style={{ color: '#212529', fontSize: '20px' }}>{`$  ${price}`}</strong>
        </Text>
        <ButtonCart onClick={() => addToCart(item, count)}
          bg='#D6F0DC'
          imageAlt='add to cart'
          imageSrc='/cartGreen.svg'
          mr={16}
          ml={0}

        >
          <Text style={{ color: '#3B944E', fontSize: '16px' }}>Add to cart</Text>
        </ButtonCart>
      </Group>
    </Card>
  );
}

export { CatalogCard }