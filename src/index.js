import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { navigate } from '@reach/router'

import App from './App'
import UserContext from './context/UserContext'

const client = new ApolloClient({
  uri: 'https://petgram-api-delta.vercel.app/graphql',
  // Atachea el token de autorizacion a la request de GraphQL previo a ser enviada
  request: operation => {
    const token = window.sessionStorage.getItem('token')
    const authorization = token ? `Bearer ${token}` : ''

    operation.setContext({
      headers: {
        authorization
      }
    })
  },
  onError: error => {
    const { networkError } = error
    if (networkError && networkError.result.code === 'invalid_token') {
      window.sessionStorage.removeItem('token')
      navigate('/')
    }
  }
})

ReactDOM.render(
  <UserContext.Provider value={{ isAuth: false }}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </UserContext.Provider>
  , document.getElementById('app'))
