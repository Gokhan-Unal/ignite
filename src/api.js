import { currentDate, lastYear, nextYear } from './utils/date.js'

// Base URL
const baseUrl = 'https://api.rawg.io/api/'

// Popular Games
const popularGames = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`
export const upcomingGames = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`
const newGames = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10`

export const popularGamesURL = () => `${baseUrl}${popularGames}`
export const upcomingGamesURL = () => `${baseUrl}${upcomingGames}`
export const newGamesURL = () => `${baseUrl}${newGames}`

// GAMEDETAILS
export const gameDetailsURL = (game_id) => `${baseUrl}games/${game_id}`

// GAMESCREENSHOTS
export const gameScreenshotURL = (game_id) =>
  `${baseUrl}games/${game_id}/screenshots`
