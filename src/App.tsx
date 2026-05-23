import { useState } from 'react'


import './App.css'
import { Header } from './Header/Header'


import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import { CartContent } from './CartContent/CartContent';
import { CartModal } from './CartModal/CartModal';

export default function App() {


  return <MantineProvider>{
    <>
      <Header />
      <main >
        <CartContent></CartContent>
      </main>
      <CartModal></CartModal>


    </>
  }</MantineProvider>;
}


