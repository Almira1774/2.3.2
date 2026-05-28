import { useState } from 'react'


import './App.css'
import { Header } from './Header/Header'


import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import { CartContent } from './Catalog/CartContent';
import CartContextProvider from './CartContextProvider';
import { ModalCartContainer } from './ModalCart/ModalCartcontainer';

export default function App() {


  return <MantineProvider>{
    <>
      <CartContextProvider>
        <Header />
        <main >
          <CartContent></CartContent>
        </main>
        <ModalCartContainer/>
      </CartContextProvider>
    </>
  }</MantineProvider>;
}


