import { put } from 'redux-saga/effects'
import {
  getPostAPI,
  voteAPI,
  getPostByCategoryAPI,
  createPostAPI
} from '../../util/Api'

export const GET_POSTS_SAGA = 'GET_POSTS_SAGA'
const GET_POSTS_START = 'GET_POSTS_START'
const GET_POSTS_COMPLETED = 'GET_POSTS_COMPLETED'

export const UP_VOTE = 'UP_VOTE'
const UP_VOTE_COMPLETED = 'UP_VOTE_COMPLETED'

export const DOWN_VOTE = 'DOWN_VOTE'
const DOWN_VOTE_COMPLETED = 'DOWN_VOTE_COMPLETED'

export const GET_POST_BY_CATEGORY = 'GET_POST_BY_CATEGORY'
const GET_POST_BY_CATEGORY_COMPLETED = 'GET_POST_BY_CATEGORY_COMPLETED'

export const CREATE_POST_START = 'CREATE_POST_START'
const CREATE_POST_START_COMPLETED = 'CREATE_POST_START_COMPLETED'

export const getPosts = (post) => ({
  type: GET_POSTS_SAGA,
  payload: post
})

export const upVote = (postId) => ({
  type: UP_VOTE,
  postId
})

export const downVote = (postId) => ({
  type: DOWN_VOTE,
  postId
})

export const getPostByCategory = (category) => ({
  type: GET_POST_BY_CATEGORY,
  payload: category
})

export const createPost = (post) => ({
  type: CREATE_POST_START,
  payload: post
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

    case GET_POST_BY_CATEGORY:
      return {
        ...state,
        isLoading: true
      }
    case GET_POST_BY_CATEGORY_COMPLETED:
      return {
        ...state,
        posts: payload,
        isLoading: true
      }
    case CREATE_POST_START:
      return {
        ...state,
        isLoading: true
      }
    case CREATE_POST_START_COMPLETED:
      return {
        ...state,
        posts: state.posts.concat([payload]),
        isLoading: true
      }
    default :
      return state
  }
}

export function *getPostsSaga({ payload }, request = getPostAPI) {
  try {
    yield put({ type: GET_POSTS_START, payload })
    const posts = yield request()
    yield put({ type: GET_POSTS_COMPLETED, payload: posts })
  } catch (error) {
    ///
  }
}

export function *createPostSaga({ payload }, request = createPostAPI) {
  try {
    const post = yield request(payload)
    yield put({ type: CREATE_POST_START_COMPLETED, payload: post })
  } catch (error) {
    ///
  }
}

export function *upVoteSaga({ postId }, request = voteAPI) {
  try {
    const vote = yield request(postId, 'upVote')
    yield put({ type: UP_VOTE_COMPLETED, postId, payload: vote })
  } catch (error) {
    ///
  }
}

export function *downVoteSaga({ postId }, request = voteAPI) {
  try {
    const vote = yield request(postId, 'downVote')
    yield put({ type: DOWN_VOTE_COMPLETED, postId, payload: vote })
  } catch (error) {
    ///
  }
}

export function *getPostByCategorySaga({ payload }, request = getPostByCategoryAPI) {
  try {
    const postByCategory = yield request(payload)
    yield put({ type: GET_POST_BY_CATEGORY_COMPLETED, payload: postByCategory })
  } catch (error) {
    ///
  }
}
