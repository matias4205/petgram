import React from 'react'
import { Router } from '@reach/router'

import { GlobalStyle } from './styles/GlobalStyles'
import { Header } from './components/Header'
import { Content } from './components/Content'
import { NavBar } from './components/NavBar'

import { Detail } from './pages/Detail'
import { Home } from './pages/Home'
// import { ErrorMessage } from './components/ErrorMessage'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Content>
        <Router>
          <Home path='/' />
          <Home path='/pet/:categoryId' />
          <Detail path='/detail/:detailId' />
        </Router>
      </Content>
      <NavBar />
    </>
  )
}

export default App
