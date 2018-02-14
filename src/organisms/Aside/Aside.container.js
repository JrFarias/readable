import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Aside from './Aside'
import { getCategories } from '../../ducks/Categories/CategoriesReducer'
import { getPostByCategory, getPosts } from '../../ducks/Post/PostReducer'

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ getCategories, getPostByCategory, getPosts }, dispatch)
})

const  mapStateToProps = state => ({
  posts: state.posts.posts,
  categories: state.categories.categories,
  isLoading: state.categories.isLoading || state.posts.isLoading,
})

export default connect(mapStateToProps, mapDispatchToProps)(Aside)
