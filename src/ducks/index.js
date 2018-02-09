import { combineReducers } from 'redux';
import { takeEvery } from 'redux-saga/effects'
import categoriesReducer, { GET_CATEGORIES_SAGA, getCategoriesSaga } from '../ducks/Categories/CategoriesReducer'

export const rootReducer = combineReducers({
  categoriesReducer
})

export function *rootSaga() {
  yield [
    takeEvery(GET_CATEGORIES_SAGA, getCategoriesSaga)
  ];
}
