import { useState } from 'react'


import './App.css'
import { Header } from './Header/Header'


import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';

export default function App() {


  return <MantineProvider>{
    <>
      <Header />
    </>
  }</MantineProvider>;
}


