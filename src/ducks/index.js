import { combineReducers } from 'redux';
import { takeEvery } from 'redux-saga/effects'
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
} from '../ducks/Post/PostReducer'

export const rootReducer = combineReducers({
  categories,
  posts
})

export function *rootSaga() {
  yield [
    takeEvery(GET_CATEGORIES_SAGA, getCategoriesSaga),
    takeEvery(GET_POSTS_SAGA, getPostsSaga),
    takeEvery(UP_VOTE ,upVoteSaga),
    takeEvery(DOWN_VOTE, downVoteSaga),
    takeEvery(GET_POST_BY_CATEGORY, getPostByCategorySaga),
    takeEvery(CREATE_POST_START, createPostSaga)
  ];
}
