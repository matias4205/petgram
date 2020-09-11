import styled from 'styled-components'

export const FormTitle = styled.h1`
  color: var(--soft-black);
  margin-bottom: 2.5rem;
`

export const Form = styled.form`
  padding: 20px;
  padding-top: 40px;
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const Input = styled.input`
  padding: 12px 10px;
  border-radius: 6px;
  border: 2px solid var(--soft-gray);
  background: #FAFAFA;
  margin-bottom: 1.5rem;
  font-size: 16px;
`

export const RegisterMessage = styled.p`
  margin-top: 3rem;
  text-align: center;
  
  a {
    color: var(--gradient-orange);
    font-weight: 600;
  }
`

export const Button = styled.button`
  height: 46px;
  background: linear-gradient(to left, #B500B5, #FF8C00);
  border-radius: 6px;
  color: white;
  font-weight: 600;
  font-size: 14px;
  margin-top: 1.5rem;
`
