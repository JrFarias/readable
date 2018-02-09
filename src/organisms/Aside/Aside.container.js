import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Aside from './Aside'
import { getCategories } from '../../ducks/Categories/CategoriesReducer'

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ getCategories }, dispatch)
})

const  mapStateToProps = state => ({
  categories: state.categoriesReducer.categories,
  isLoading: state.categoriesReducer.isLoading,
})

export default connect(mapStateToProps, mapDispatchToProps)(Aside)
