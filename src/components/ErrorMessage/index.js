import React from 'react'

import { ErrorContainer, CloseButton, ErrorText, ErrorWrapper } from './styles'

export const ErrorMessage = ({ message }) => {
  return (
    <ErrorWrapper>
      <ErrorContainer>
        <ErrorText>{message}</ErrorText>
        <button>
          <CloseButton>&times;</CloseButton>
        </button>
      </ErrorContainer>
    </ErrorWrapper>
  )
}
