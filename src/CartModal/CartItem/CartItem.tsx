import { Group, Stack, Image, Text } from '@mantine/core';
import { StepperDemo } from '../../shared/StepperDemo';

function CartItem() {
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
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
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
        <Text size="sm" fw={500}>Name</Text>

        {/* Контейнер .cartItem-info--stepper (горизонтальный ряд для Price и StepperDemo) */}
        <Group justify="space-between" w="100%" wrap="nowrap">
          <Text size="sm" c="dimmed">Price</Text>
          <StepperDemo />
        </Group>
      </Stack>
    </Group>
  );
}

export { CartItem };