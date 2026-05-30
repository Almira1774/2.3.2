import { useState } from 'react'


import './App.css'
import { Header } from './Header/Header'


import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import { CartContent } from './Catalog/CartContent';
import CartContextProvider from './CartContextProvider';
import { ModalCartContainer } from './ModalCart/ModalCartcontainer';
import { H2 } from './assets/h2/H2';


export default function App() {


  return <MantineProvider>{
    <>
      <CartContextProvider>
        <Header />
        <main >
            <H2></H2>
          <CartContent></CartContent>
        </main>
        <ModalCartContainer/>
      </CartContextProvider>
    </>
  }</MantineProvider>;
}


