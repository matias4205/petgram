import React, { useContext, Suspense } from 'react'
import { Router, Redirect } from '@reach/router'

import { GlobalStyle } from './styles/GlobalStyles'
import { Header } from './components/Header'
import { Content } from './components/Content'
import { NavBar } from './components/NavBar'

import { Provider as ErrorProvider } from './context/ErrorBoundary'
import { Context as UserContext } from './context/UserContext'

// Importa los componentes dinamicamente
const Home = React.lazy(() => import('./pages/Home'))
const Favs = React.lazy(() => import('./pages/Favs'))
const User = React.lazy(() => import('./pages/User'))
const Detail = React.lazy(() => import('./pages/Detail'))
const Login = React.lazy(() => import('./pages/Login'))
const Register = React.lazy(() => import('./pages/Register'))

const App = () => {
  const { isAuth } = useContext(UserContext)

  return (
    <Suspense fallback={<div />}>
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
            {!isAuth && <Redirect from='/user' to='/login' />}
            {!isAuth && <Redirect from='/favs' to='/login' />}

            <User path='/user' />
            <Favs path='/favs' />
          </Router>
        </ErrorProvider>
      </Content>
      <NavBar />
    </Suspense>
  )
}

export default App
