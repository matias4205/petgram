import styled from 'styled-components'

import { fadeIn } from '../../styles/animation'

export const ImgWrapper = styled.div`
  display: block;
  height: 0;
  overflow: hidden;
  padding: 56.26% 0 0 0;
  position: relative;
  width: 100%;
`

export const Img = styled.img`
  ${fadeIn()}
  box-shadow: 0 10px 14px rgba(0, 0, 0, .2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`

export const Button = styled.button`
  display: flex;
  align-items: center;

  & svg {
    margin-right: 4px;
  }
`
export const Article = styled.article`
  min-height: 300px;
`

export const ControlsContainer = styled.div`
  padding: 10px 10px;
`

export const ProfileContainer = styled.span`
  padding: 10px 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

export const ProfileImgPlaceholder = styled.div`
  border-radius: 50%;
  background-color: #BDBDBD;
  width: 25px;
  height: 25px;
  margin-right: 10px;
`

export const ProfileUsername = styled.a`
  font-weight: 600;
`
