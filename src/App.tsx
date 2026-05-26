import { useState } from 'react'


import './App.css'
import { Header } from './Header/Header'


import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import { CartContent } from './Catalog/CartContent';
import {ModalCart } from './ModalCart/ModalCart';
import CartContextProvider from './CartContextProvider';

export default function App() {


  return <MantineProvider>{
    <>
      <CartContextProvider>
        <Header />
        <main >
          <CartContent></CartContent>
        </main>
        <ModalCart></ModalCart>
      </CartContextProvider>
    </>
  }</MantineProvider>;
}


