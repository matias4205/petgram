import React from 'react'
import { Link } from '@reach/router'

import { useNearScreen } from '../../hooks/useNearScreen'

import {
  ImgWrapper,
  Img,
  Article,
  ControlsContainer,
  ProfileContainer,
  ProfileImgPlaceholder,
  ProfileUsername,
  ProfileUsernameSkeleton,
  ImgSkeleton
} from './styles'
import { FavButton } from '../FavButton'
import { ToggleLikeMutation } from '../../container/ToggleLikeMutation'

const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, src = DEFAULT_IMAGE, username, likes = 0, liked, isDetail }) => {
  const [show, ref] = useNearScreen()

  return (
    <Article ref={ref}>
      {show && (
        <>
          <ProfileContainer>
            <ProfileImgPlaceholder />
            <ProfileUsername>{username}</ProfileUsername>
          </ProfileContainer>
          {isDetail ? (
            <ImgWrapper>
              <Img src={src} alt='image' />
            </ImgWrapper>
          ) : (
            <Link to={`/detail/${id}`}>
              <ImgWrapper>
                <Img src={src} alt='image' />
              </ImgWrapper>
            </Link>
          )}
          <ControlsContainer>
            <ToggleLikeMutation>
              {(toggleLike) => {
                const handleFavClick = () => {
                  toggleLike({
                    variables: {
                      input: { id }
                    }
                  })
                }

                return (
                  <FavButton
                    liked={liked}
                    likes={likes}
                    onClick={handleFavClick}
                  />
                )
              }}
            </ToggleLikeMutation>
          </ControlsContainer>
        </>
      )}
    </Article>
  )
}

export const PhotoCardSkeleton = () => (
  <Article>
    <ProfileContainer>
      <ProfileImgPlaceholder />
      <ProfileUsernameSkeleton />
    </ProfileContainer>
    <div>
      <ImgSkeleton />
    </div>
  </Article>
)
