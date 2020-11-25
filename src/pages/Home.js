import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { loadGames } from '../actions/gamesAction'
import Game from '../components/Game'
import styled from 'styled-components/macro'
import { motion } from 'framer-motion'
import GameDetail from '../components/GameDetail'

export const Home = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const pathId = location.pathname.split('/')[2]

  useEffect(() => {
    dispatch(loadGames())
  }, [dispatch])

  // const games = useSelector((state) => state.games)
  // or easy way to extract data
  const { popular, newGames, upcoming } = useSelector((state) => state.games)

  return (
    <GameList>
      {pathId && <GameDetail />}
      <h2>Upcoming Games</h2>
      <Games>
        {upcoming.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id}
          />
        ))}
      </Games>

      <h2>Popular Games</h2>
      <Games>
        {popular.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id}
          />
        ))}
      </Games>

      <h2>New Games</h2>
      <Games>
        {newGames.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id}
          />
        ))}
      </Games>
    </GameList>
  )
}

const GameList = styled(motion.div)`
  padding: 0 5rem;
  h2 {
    padding: 5rem 0;
  }
`

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`
