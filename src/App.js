import React from 'react'

import { GlobalStyle } from './styles/GlobalStyles'
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'
import { Header } from './components/Header'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <ListOfCategories />
      <ListOfPhotoCards />
    </>
  )
}

export default App
