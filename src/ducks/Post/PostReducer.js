import { put } from 'redux-saga/effects'
import { getPostAPI } from '../../util/Api'

export const GET_POSTS_SAGA = 'GET_POSTS_SAGA'
const GET_POSTS_START = 'GET_POSTS_START'
const GET_POSTS_COMPLETED = 'GET_POSTS_COMPLETED'

export const getPosts = (categories) => ({
  type: GET_POSTS_SAGA,
  payload: categories
})

export const initialState = {
  posts: [],
  isLoading: false
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_POSTS_START :
      return {
        ...state,
        isLoading: true
      };
    case GET_POSTS_COMPLETED :
      return {
        ...state,
        posts: action.payload,
        isLoading: false
      };
    default :
      return state
  }
}

export function *getPostsSaga({ payload }, getPost = getPostAPI) {
  try {
    yield put({ type: GET_POSTS_START, payload })
    const posts = yield getPost()
    yield put({ type: GET_POSTS_COMPLETED, payload: posts })
  } catch (error) {
    ///
  }
}
