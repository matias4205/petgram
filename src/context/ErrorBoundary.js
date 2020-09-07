import React, { createContext, useState } from 'react'

import { ErrorMessage } from '../components/ErrorMessage'

const ErrorContext = createContext({})

const ErrorProvider = ({ children }) => {
  const [errorState, setState] = useState({ error: true, message: 'LALALALALA' })

  const state = errorState

  return (
    <ErrorContext.Provider value={state}>
      {errorState.error && <ErrorMessage message={errorState.message} />}
      {children}
    </ErrorContext.Provider>
  )
}

export { ErrorContext as default, ErrorProvider as Provider }
