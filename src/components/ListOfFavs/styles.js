import styled from 'styled-components'

export const Grid = styled.ul`
  display: grid;
  grid-gap: 2px;
  grid-template-columns: repeat(auto-fill,minmax(160px,1fr));
`

export const EmptyMessage = styled.p`
  color: var(--dark-gray);
  font-weight: 600;
  text-align: center;
  display: block;
  margin-top: 2rem;
`
