import { put } from 'redux-saga/effects'
import { getCategoriesAPI } from '../../util/Api'

export const GET_CATEGORIES_SAGA = 'GET_CATEGORIES_SAGA'
const GET_CATEGORIES_START = 'GET_CATEGORIES_START'
const GET_CATEGORIES_COMPLETED = 'GET_CATEGORIES_COMPLETED'

export const getCategories = (categories) => ({
  type: GET_CATEGORIES_SAGA,
  payload: categories
})

export const initialState = {
  categories: [],
  isLoading: false
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_CATEGORIES_START :
      return {
        ...state,
        isLoading: true
      };
    case GET_CATEGORIES_COMPLETED :
      return {
        ...state,
        categories: action.payload,
        isLoading: false
      };
    default :
      return state
  }
}

export function *getCategoriesSaga({ payload }, getCategoriesApi = getCategoriesAPI) {
  try {
    yield put({ type: GET_CATEGORIES_START, payload })
    const categories = yield getCategoriesApi()

    yield put({ type: GET_CATEGORIES_COMPLETED, payload: categories })
  } catch (error) {
    ///
  }
}

