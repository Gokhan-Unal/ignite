import axios from 'axios'
import { gameDetailsURL, gameScreenshotURL } from '../api'
import { GET_DETAIL } from './types'

export const loadDetail = (id) => async (dispatch) => {
  const detailData = await axios.get(gameDetailsURL(id))
  const screenShotData = await axios.get(gameScreenshotURL(id))

  dispatch({
    type: GET_DETAIL,
    payload: {
      game: detailData.data,
      screen: screenShotData.data,
    },
  })
}
