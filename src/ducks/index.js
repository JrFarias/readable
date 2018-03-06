import { combineReducers } from 'redux';
import { takeEvery, all } from 'redux-saga/effects'
import categories, { GET_CATEGORIES_SAGA, getCategoriesSaga } from '../ducks/Categories/CategoriesReducer'
import posts, {
  GET_POSTS_SAGA,
  getPostsSaga,
  UP_VOTE,
  upVoteSaga,
  DOWN_VOTE,
  downVoteSaga,
  GET_POST_BY_CATEGORY,
  getPostByCategorySaga,
  CREATE_POST_START,
  createPostSaga,
  EDIT_POST_START,
  editPostSaga,
  DELETE_POST_START,
  deletePostSaga,
  GET_POST_BY_ID_START,
  getPostById
} from '../ducks/Post/PostReducer'

import commentDetails, {
  GET_COMMENTS_START,
  getCommentsByPostSaga,
  CREATE_COMMENT_START,
  createCommentSaga,
  EDIT_COMMENT_START,
  editCommentSaga,
  DELETE_COMMENT_START,
  deleteCommentSaga,
  UP_VOTE_COMMENT,
  upVoteCommentSaga,
  DOWN_VOTE_COMMENT,
  downVoteCommentSaga
} from '../ducks/CommentDetails/CommentDetailsReducer'

export const rootReducer = combineReducers({
  categories,
  posts,
  commentDetails
})

export function *rootSaga() {
  yield all([
    takeEvery(GET_CATEGORIES_SAGA, getCategoriesSaga),
    takeEvery(GET_POSTS_SAGA, getPostsSaga),
    takeEvery(UP_VOTE ,upVoteSaga),
    takeEvery(DOWN_VOTE, downVoteSaga),
    takeEvery(GET_POST_BY_CATEGORY, getPostByCategorySaga),
    takeEvery(CREATE_POST_START, createPostSaga),
    takeEvery(EDIT_POST_START, editPostSaga),
    takeEvery(DELETE_POST_START, deletePostSaga),
    takeEvery(GET_COMMENTS_START, getCommentsByPostSaga),
    takeEvery(CREATE_COMMENT_START, createCommentSaga),
    takeEvery(EDIT_COMMENT_START, editCommentSaga),
    takeEvery(DELETE_COMMENT_START, deleteCommentSaga),
    takeEvery(UP_VOTE_COMMENT, upVoteCommentSaga),
    takeEvery(DOWN_VOTE_COMMENT, downVoteCommentSaga),
    takeEvery(GET_POST_BY_ID_START, getPostById)
  ]);
}
