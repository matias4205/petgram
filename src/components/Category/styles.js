import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'

export const Link = styled(LinkRouter)`
  display: flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  width: 60px;
`

export const Image = styled.img`
  border: 1px solid #ddd;
  box-shadow: 0px 10px 14px rgba(0,0,0,.2);
  border-radius: 50%;
  height: auto;
  overflow: hidden;
  object-fit: cover;
  height: 60px;
  width: 60px;
`

export const SkeletonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  width: 60px;
`

export const ImageSkeleton = styled.div`
  box-shadow: 0px 10px 14px rgba(0,0,0,.2);
  border-radius: 50%;
  height: 60px;
  width: 60px;
  background-color: var(--dark-gray);
`
