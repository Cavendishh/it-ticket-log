import {
GET_TECHS,
ADD_TECH,
DELETE_TECH,
SET_LOADING,
TECHS_ERROR
} from './types'

// Get all techs
export const getTechs = () => async dispatch => {
  try {
    setLoading()

    const res = await fetch('/techs')
    const data = await res.json()
  
    dispatch({
      type: GET_TECHS,
      payload: data
    })
  } catch (e) {
    dispatch({
      type: TECHS_ERROR,
      payload: e.response.statusText
    })
  }
}

// Set loading
export const setLoading = () => {
  return {
    type: SET_LOADING
  }
}