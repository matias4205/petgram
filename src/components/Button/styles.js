import styled from 'styled-components'

export const CustomButton = styled.button`
  width: 100%;
  height: 46px;
  text-align: center;
  background-color: var(--soft-gray);
  padding: 0;
  font-size: 14px;
  font-weight: 600;
  color: var(--soft-black);
  border-radius: 6px;

  &:active {
    opacity: 0.5;
  }
`
