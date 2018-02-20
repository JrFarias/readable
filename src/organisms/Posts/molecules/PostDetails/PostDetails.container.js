import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PostDetails from './PostDetails'
import { createPost, editPost, deletePost } from '../../../../ducks/Post/PostReducer'
import { closeModal } from '../../../../ducks/PostModal/PostModalReducer'

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    createPost,
    editPost,
    deletePost,
    closeModal
  }, dispatch)
})

const  mapStateToProps = state => {

  return {
  post: state.postModal.post,
  categories: state.categories.categories,
  isLoading: state.postModal.isLoading,
}}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails)
