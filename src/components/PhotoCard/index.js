import React from 'react'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'

import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'

import { ImgWrapper, Img, Button, Article, ControlsContainer } from './styles'

const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, ref] = useNearScreen()
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)

  const LikeIcon = liked ? <MdFavorite size='32px' /> : <MdFavoriteBorder size='32px' />

  return (
    <Article ref={ref}>
      {show && (
        <>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} alt='image' />
            </ImgWrapper>
          </a>
          <ControlsContainer>
            <Button onClick={() => setLiked(!liked)}>
              {LikeIcon}
              {likes} likes!
            </Button>
          </ControlsContainer>
        </>
      )}
    </Article>
  )
}
