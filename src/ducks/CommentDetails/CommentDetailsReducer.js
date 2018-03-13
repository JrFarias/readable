import { put } from 'redux-saga/effects'
import {
  getCommentsByPostAPI,
  createCommentAPI,
  editCommentAPI,
  deleteCommentAPI,
  voteCommentAPI
} from '../../util/Api'

export const GET_COMMENTS_START = 'GET_COMMENTS_START'
const GET_COMMENTS_COMPLETED = 'GET_COMMENTS_COMPLETED'

export const CREATE_COMMENT_START = 'CREATE_COMMENT_START'
const CREATE_COMMENT_COMPLETED = 'CREATE_COMMENT_COMPLETED'

export const EDIT_COMMENT_START = 'EDIT_COMMENT_START'
const EDIT_COMMENT_COMPLETED = 'EDIT_COMMENT_COMPLETED'

export const DELETE_COMMENT_START = 'DELETE_COMMENT_START'
const DELETE_COMMENT_COMPLETED = 'DELETE_COMMENT_COMPLETED'

export const UP_VOTE_COMMENT = 'UP_VOTE_COMMENT'
const UP_VOTE_COMMENT_COMPLETED = 'UP_VOTE_COMMENT_COMPLETED'

export const DOWN_VOTE_COMMENT = 'DOWN_VOTE_COMMENT'
const DOWN_VOTE_COMMENT_COMPLETED = 'DOWN_VOTE_COMMENT_COMPLETED'

export const getComments = postId => ({
  type: GET_COMMENTS_START,
  postId
})

export const createComment = comment => ({
  type: CREATE_COMMENT_START,
  payload: comment
})

export const editComment = comment => ({
  type: EDIT_COMMENT_START,
  payload: comment
})

export const deleteComment = commentId => ({
  type: DELETE_COMMENT_START,
  commentId
})

export const upVoteComment = commentId => ({
  type: UP_VOTE_COMMENT,
  commentId
})

export const downVoteComment = commentId => ({
  type: DOWN_VOTE_COMMENT,
  commentId
})

export const initialState = {
  comments: []
}

export default function reducer(state = initialState, action = {}) {
  const { payload, commentId } = action

  switch (action.type) {
    case GET_COMMENTS_START :
      return {
        ...state,
        isLoading: true,
        postId: action.postId
      };

    case GET_COMMENTS_COMPLETED:
      return {
        ...state,
        isLoading: false,
        comments: payload
      }
    case CREATE_COMMENT_START :
      return {
        ...state,
        isLoading: true,
      }
    case CREATE_COMMENT_COMPLETED:
      return {
        ...state,
        isLoading: false,
        comments: state.comments.concat([payload])
      }
    case EDIT_COMMENT_START :
      return {
        ...state,
        isLoading: true,
      }
    case EDIT_COMMENT_COMPLETED:
      return {
        ...state,
        isLoading: false,
        comments: state.comments.map(comment => comment.id === payload.id ? payload : comment)
      }
    case DELETE_COMMENT_START :
      return {
        ...state,
        isLoading: true,
      }
    case DELETE_COMMENT_COMPLETED:
      return {
        ...state,
        isLoading: false,
        comments: state.comments.filter(comment => comment.id !== commentId)
      }
      case UP_VOTE_COMMENT :
      return {
        ...state,
        isLoading: true
      }
    case UP_VOTE_COMMENT_COMPLETED :
      return {
        ...state,
        comments: state.comments.map(comment => comment.id === payload.id ? payload : comment),
        isLoading: false
      };
    case DOWN_VOTE_COMMENT :
      return {
        ...state,
        isLoading: true
      }
    case DOWN_VOTE_COMMENT_COMPLETED :
      return {
        ...state,
        comments: state.comments.map(comment => comment.id === payload.id ? payload : comment),
        isLoading: false
      };
    default :
      return state
  }
}

export function *getCommentsByPostSaga({ postId }, request = getCommentsByPostAPI) {
  try {
    const comments = yield request(postId)
    yield put({ type: GET_COMMENTS_COMPLETED, payload: comments })
  } catch (error) {
    ///
  }
}

export function *createCommentSaga({ payload }, request = createCommentAPI) {
  try {
    const comment = yield request(payload)
    yield put({ type: CREATE_COMMENT_COMPLETED, payload: comment })
  } catch (error) {
    ///
  }
}

export function *editCommentSaga({ payload }, request = editCommentAPI) {
  try {
    const comment = yield request(payload)
    yield put({ type: EDIT_COMMENT_COMPLETED, payload: comment })
  } catch (error) {
    ///
  }
}

export function *deleteCommentSaga({ commentId }, request = deleteCommentAPI) {
  try {
    yield request(commentId)
    yield put({ type: DELETE_COMMENT_COMPLETED, commentId })
  } catch (error) {
    ///
  }
}

export function *upVoteCommentSaga({ commentId }, request = voteCommentAPI) {
  try {
    const vote = yield request(commentId, 'upVote')
    yield put({ type: UP_VOTE_COMMENT_COMPLETED, payload: vote })
  } catch (error) {
    ///
  }
}

export function *downVoteCommentSaga({ commentId }, request = voteCommentAPI) {
  try {
    const vote = yield request(commentId, 'downVote')
    yield put({ type: DOWN_VOTE_COMMENT_COMPLETED,  payload: vote })
  } catch (error) {
    ///
  }
}
