import { combineReducers } from 'redux';
import { takeEvery } from 'redux-saga/effects'
import categories, { GET_CATEGORIES_SAGA, getCategoriesSaga } from '../ducks/Categories/CategoriesReducer'
import posts, { GET_POSTS_SAGA, getPostsSaga } from '../ducks/Post/PostReducer'

export const rootReducer = combineReducers({
  categories,
  posts
})

export function *rootSaga() {
  yield [
    takeEvery(GET_CATEGORIES_SAGA, getCategoriesSaga),
    takeEvery(GET_POSTS_SAGA, getPostsSaga)
  ];
}
