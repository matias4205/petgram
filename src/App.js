import React from 'react'
import { Router } from '@reach/router'

import { GlobalStyle } from './styles/GlobalStyles'
import { Header } from './components/Header'
import { Content } from './components/Content'
import { NavBar } from './components/NavBar'

import { Detail } from './pages/Detail'
import { Home } from './pages/Home'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import { Provider as ErrorProvider } from './context/ErrorBoundary'
import UserContext from './context/UserContext'
// import { ErrorMessage } from './components/ErrorMessage'

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
                    <NotRegisteredUser path='/favs' />
                    <NotRegisteredUser path='/user' />
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
