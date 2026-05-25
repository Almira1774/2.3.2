import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import ButtonCart from '../../shared/ButtonCart';
import { BadgeDemo } from '../../shared/BadgeDemo';
import { ButtonDemo } from '../../shared/ButtonDemo';
import { StepperDemo } from '../../shared/StepperDemo';

export type Product={
  id: number;
  name: string;
  price: string;
  image: string;
}

function CardItem({id,name,price,image}:Product) {
  
  return (
    // Убрали все ограничения, карточка теперь идеально слушается сетку Grid
    <Card shadow="sm" padding="lg" withBorder w="100%" >
      <Card.Section component="a" href="https://mantine.dev/">
        <Image
          src={image}
          height={276}
          // Удалили width={276}, добавили автоматическое заполнение:
          w="100%"
          fit="cover"
          alt="Norway"
          mb={16} 
        />
      </Card.Section>

      {/* Убрали miw={270}. Добавили justify="space-between" для авто-распределения */}
      <Group justify="space-between" h={30} mb={16}> 
        <Text size="sm" c="dimmed">
          {name}
        </Text>
        {/* Убрали ml={100}, теперь блок аккуратно встанет справа */}
        <Group gap={0}>   
          <StepperDemo />
        </Group>
      </Group>
       
      {/* Для нижней строки тоже полезно сделать space-between, чтобы кнопка и цена разъехались по краям */}
      <Group justify="space-between">
        <p>{price}</p>
        <ButtonCart 
          bg='#D6F0DC' 
          imageAlt='add to cart' 
          imageSrc='/cartGreen.svg'
        >
          Add to cart
        </ButtonCart>
      </Group>
    </Card>
  );
}
export {CardItem}