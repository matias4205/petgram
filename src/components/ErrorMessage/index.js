import React from 'react'

import { ErrorContainer, CloseButton, ErrorText } from './styles'

export const ErrorMessage = ({ message }) => {
  return (
    <ErrorContainer>
      <ErrorText>{message}</ErrorText>
      <button>
        <CloseButton>&times;</CloseButton>
      </button>
    </ErrorContainer>
  )
}
