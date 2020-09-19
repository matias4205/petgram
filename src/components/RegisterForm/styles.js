import styled from 'styled-components'

export const Form = styled.form`
  margin-top: 20px;
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

export const Container = styled.div`
  padding: 20px;
  padding-top: 0;
`

export const ErrorMessage = styled.p`
  color: var(--scarlet-red);
`

export const LoginMessage = styled.p`
  margin-top: 3rem;
  text-align: center;
  
  a {
    color: var(--gradient-orange);
    font-weight: 600;
  }
`

export const Button = styled.button`
  height: 46px;
  background: linear-gradient(to left, var(--gradient-violet), var(--gradient-orange));
  border-radius: 6px;
  color: white;
  font-weight: 600;
  font-size: 14px;
  margin-top: 1.5rem;

  &[disabled] {
    opacity: .7;
  }
`
