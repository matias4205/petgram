import styled from 'styled-components'

export const CustomButton = styled.button`
  width: 100%;
  text-align: center;
  background-color: var(--soft-gray);
  padding: 12px 0px;
  font-size: 14px;
  font-weight: 600;
  color: var(--soft-black);
  border-radius: 6px;

  &:active {
    opacity: 0.5;
  }
`
