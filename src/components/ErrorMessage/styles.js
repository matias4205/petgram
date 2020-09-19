import styled from 'styled-components'

import { slideIn } from '../../styles/animation'

export const ErrorContainer = styled.div`
  width: 100%;
  padding: 20px 15px;
  display: flex;
  justify-content: space-between;
  background-color: #F73838;
`
export const CloseButton = styled.span`
  font-size: 1.5rem;
  line-height: 1;
  color: var(--white);
`
export const ErrorText = styled.p`
  color: var(--white);
  font-weight: 600;
`

export const ErrorWrapper = styled.div`
  ${slideIn()}
  overflow: hidden;
`
