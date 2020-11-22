import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { loadGames } from '../actions/gamesAction'

export const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadGames())
  })

  return (
    <h1>Home</h1>
  )
}