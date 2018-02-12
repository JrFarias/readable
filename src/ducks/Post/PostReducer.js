import { put } from 'redux-saga/effects'
import { getPostAPI, voteAPI } from '../../util/Api'

export const GET_POSTS_SAGA = 'GET_POSTS_SAGA'
const GET_POSTS_START = 'GET_POSTS_START'
const GET_POSTS_COMPLETED = 'GET_POSTS_COMPLETED'

export const UP_VOTE = 'UP_VOTE'
const UP_VOTE_COMPLETED = 'UP_VOTE_COMPLETED'

export const DOWN_VOTE = 'DOWN_VOTE'
const DOWN_VOTE_COMPLETED = 'DOWN_VOTE_COMPLETED'

export const getPosts = (categories) => ({
  type: GET_POSTS_SAGA,
  payload: categories
})

export const upVote = (postId) => ({
  type: UP_VOTE,
  postId
})

export const downVote = (postId) => ({
  type: DOWN_VOTE,
  postId
})

export const initialState = {
  posts: [],
  isLoading: false
}

export default function reducer(state = initialState, action = {}) {
  const { payload, postId } = action

  switch (action.type) {
    case GET_POSTS_START :
      return {
        ...state,
        isLoading: true
      };
    case GET_POSTS_COMPLETED :
      return {
        ...state,
        posts: payload,
        isLoading: false
      };
    case UP_VOTE :
      return {
        ...state,
        isLoading: true
      }
    case UP_VOTE_COMPLETED :
      return {
        ...state,
        posts: state.posts.map(post => post.id === postId ? payload : post),
        isLoading: false
      };

    case DOWN_VOTE :
      return {
        ...state,
        isLoading: true
      }
    case DOWN_VOTE_COMPLETED :
      return {
        ...state,
        posts: state.posts.map(post => post.id === postId ? payload : post),
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

export function *upVoteSaga({ postId }, voteApi = voteAPI) {
  try {
    const vote = yield voteApi(postId, 'upVote')
    yield put({ type: UP_VOTE_COMPLETED, postId, payload: vote })
  } catch (error) {
    ///
  }
}

export function *downVoteSaga({ postId }, voteApi = voteAPI) {
  try {
    const vote = yield voteApi(postId, 'downVote')
    yield put({ type: DOWN_VOTE_COMPLETED, postId, payload: vote })
  } catch (error) {
    ///
  }
}
