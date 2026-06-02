import { type ReactNode } from "react";
import { render } from "@testing-library/react";
import { MantineProvider } from '@mantine/core'; // ДОБАВИЛИ
import CartContextProvider from "../CartContextProvider.tsx";

export function renderWithContext(ui: React.ReactElement, options = {}) {
  return render(ui, {
    // Оборачиваем сначала в Mantine, а внутрь кладём ваш корзинный контекст
    wrapper: ({ children }: { children: ReactNode }) => (
      <MantineProvider>
        <CartContextProvider>
          {children}
        </CartContextProvider>
      </MantineProvider>
    ),
    ...options,
  });
}

{/* Тесты отображения (Рендеринг): Правильно ли компонент принимает 
  пропсы и выводит их на экран? (Например: вывелось ли имя брокколи,
   разделился ли вес по тире, правильная ли картинка подгрузилась) 

   [INDEX].Тесты локального состояния: Реагирует ли локальный степпер 
   карточки на клики? Блокируется ли уход счетчика в минус или ноль? 

   [INDEX]Тесты интеграции с Контекстом: Вызывается ли глобальная функция
    addToCart при нажатии на кнопку? Передаются ли в неё правильные 
    аргументы (объект товара и накрученное количество)? [INDEX]Тесты
     глобального состояния (Модалка): Меняется ли Total при изменении
      количества товаров внутри корзины? Исчезает ли карточка, если д
      окрутить её до нуля? [INDEX] */}