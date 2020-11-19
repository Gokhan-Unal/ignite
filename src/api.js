import { currentDate, lastYear } from './utils/date.js'

// Base URL
const baseUrl = 'https://api.rawg.io/api/'

// Popular Games
const popularGames = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`

export const popularGamesURL = () => `${baseUrl}${popularGames}`

console.log(popularGamesURL());