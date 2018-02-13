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
  deletePostSaga
} from '../ducks/Post/PostReducer'

import postModal from '../ducks/PostModal/PostModalReducer'

export const rootReducer = combineReducers({
  categories,
  posts,
  postModal
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
  ]);
}
