import React from 'react'
import { Router, Redirect } from '@reach/router'

import { GlobalStyle } from './styles/GlobalStyles'
import { Header } from './components/Header'
import { Content } from './components/Content'
import { NavBar } from './components/NavBar'

import { Detail } from './pages/Detail'
import { Home } from './pages/Home'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { Provider as ErrorProvider } from './context/ErrorBoundary'
import UserContext from './context/UserContext'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Content>
        <ErrorProvider>
          <Router>
            <Home path='/' />
            <Home path='/pet/:categoryId' />
            <Detail path='/detail/:detailId' />
            <Login path='/login' />
            <Register path='/register' />
          </Router>
          <UserContext.Consumer>
            {({ isAuth }) => (
              <Router>
                {isAuth ? (
                  <>
                    <User path='/user' />
                    <Favs path='/favs' />
                  </>
                ) : (
                  <>
                    <Redirect from='/user' to='/login' />
                    <Redirect from='/favs' to='/login' />
                  </>
                )}
              </Router>
            )}
          </UserContext.Consumer>
        </ErrorProvider>
      </Content>
      <NavBar />
    </>
  )
}

export default App
