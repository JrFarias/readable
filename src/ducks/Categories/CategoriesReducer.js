import { getCategoriesAPI } from '../../util/Api'

const GET_CATEGORIES_START = 'GET_CATEGORIES_start'
const GET_CATEGORIES_COMPLETED = 'GET_CATEGORIES_completed'

const getCategoriesCompleted = (categories) => ({
  type: GET_CATEGORIES_COMPLETED,
  payload: categories
})

const getCategoriesStart = () => ({
  type: GET_CATEGORIES_START,
})

const initialState = {
  categories: [],
  isLoading: false
}

const categoriesReducer = (state = initialState, action) => {
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

const mapDispatchToProps = (dispatch) => ({
  getCategories:() => {
    dispatch(getCategoriesStart())

    return getCategoriesAPI()
    .then(categories =>
      dispatch(getCategoriesCompleted(categories)))
    }
})


const  mapStateToProps = state => ({
  categories: state.categoriesReducer.categories,
  isLoading: state.categoriesReducer.isLoading,
})

export {
  GET_CATEGORIES_START,
  GET_CATEGORIES_COMPLETED,
  getCategoriesStart,
  getCategoriesCompleted,
  categoriesReducer,
  mapDispatchToProps,
  mapStateToProps
}
