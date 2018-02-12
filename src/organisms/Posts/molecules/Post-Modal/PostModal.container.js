import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PostModal from './PostModal'
import { createPost } from '../../../../ducks/Post/PostReducer'

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ createPost }, dispatch)
})

const  mapStateToProps = state => ({
  posts: state.posts.posts,
  categories: state.categories.categories,
  isLoading: state.posts.isLoading,
})

export default connect(mapStateToProps, mapDispatchToProps)(PostModal)
