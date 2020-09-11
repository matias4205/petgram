import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import App from './App'
import UserContext from './context/UserContext'

const client = new ApolloClient({
  uri: 'https://petgram-api-delta.vercel.app/graphql'
})

ReactDOM.render(
  <UserContext.Provider value={{ isAuth: false }}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </UserContext.Provider>
  , document.getElementById('app'))
