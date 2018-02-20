import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import PostDetails from './PostDetails'
import { createPost, editPost, deletePost } from '../../../../ducks/Post/PostReducer'

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    createPost,
    editPost,
    deletePost
  }, dispatch)
})

const  mapStateToProps = state => ({
  categories: state.categories.categories
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostDetails))
