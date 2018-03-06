import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import PostDetails from './PostDetails'
import { createPost, editPost, deletePost, getPostId } from '../../../../ducks/Post/PostReducer'

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    createPost,
    editPost,
    deletePost,
    getPostId
  }, dispatch)
})

const  mapStateToProps = state => {
  return {
    categories: state.categories.categories,
    post: state.posts.post
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostDetails))
