import axios from 'axios'
import { gameDetailsURL, gameScreenshotURL } from '../api'
import { GET_DETAIL, LOADING_DETAIL } from './types'

export const loadDetail = (id) => async (dispatch) => {
  dispatch({ type: LOADING_DETAIL })
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
