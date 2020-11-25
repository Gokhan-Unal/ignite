import React, { Fragment } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { smallImage } from '../util'

import playstation from '../img/playstation.svg'
import steam from '../img/steam.svg'
import xbox from '../img/xbox.svg'
import nintendo from '../img/nintendo.svg'
import apple from '../img/apple.svg'
import gamepad from '../img/gamepad.svg'

import starEmpty from '../img/star-empty.png'
import starFull from '../img/star-full.png'

const GameDetail = ({ pathId }) => {
  const history = useHistory()

  const exitDetailHandler = (e) => {
    const element = e.target
    if (element.classList.contains('shadow')) {
      document.body.style.overflow = 'auto'
      history.push('/')
    }
  }

  // get stars

  const getStars = () => {
    const stars = []
    const rating = Math.floor(game.rating)
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<img alt="star" key={i} src={starFull} />)
      } else {
        stars.push(<img alt="star" key={i} src={starEmpty} />)
      }
    }
    return stars
  }

  // get platform images
  const getPlatform = (platform) => {
    switch (platform) {
      case 'PlayStation 4':
      case 'PlayStation 5':
        return playstation

      case 'Xbox One':
        return xbox

      case 'PC':
        return steam

      case 'Nintendo Switch':
        return nintendo

      case 'IOS':
        return apple

      default:
        return gamepad
    }
  }

  // get data from combineReducers
  const { screen, game, isLoading } = useSelector((state) => state.detail)

  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
          <Detail layoutId={pathId}>
            <Stats>
              <div className="rating">
                <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
                <p>Rating: {game.rating}</p>
                {getStars()}
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {game.platforms.map((data) => (
                    <Fragment key={data.platform.id}>
                      <img
                        src={getPlatform(data.platform.name)}
                        alt={data.platform.name}
                      />
                      <small>{data.platform.name}</small>
                    </Fragment>
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <motion.img
                layoutId={`image ${pathId}`}
                src={smallImage(game.background_image, 1280)}
                alt={game.background_image}
              />
            </Media>
            <Video controls>
              <source
                src={Object.values(game.clip.clips.full).join('')}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </Video>
            <Description>
              <p>{game.description_raw}</p>
            </Description>
            <Gallery>
              {screen.results.map((screen) => (
                <img
                  src={smallImage(screen.image, 1280)}
                  key={screen.id}
                  alt={screen.image}
                />
              ))}
            </Gallery>
          </Detail>
        </CardShadow>
      )}
    </>
  )
}

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  z-index: 10;
  left: 10%;
  top: 5%;
  color: black;
  img {
    width: 100%;
  }
`

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 2rem;
    height: 2rem;
    display: inline;
  }
`

const Info = styled(motion.div)`
  text-align: center;
`

const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  img {
    width: 100%;
    margin-left: 3rem;
  }
`
const Video = styled.video`
  width: 100%;
`

const Gallery = styled.div`
  img {
    margin-bottom: 3px;
  }
`

const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
    margin-bottom: 12px;
  }
`

const Description = styled(motion.div)`
  margin: 5rem 0;
`

export default GameDetail
