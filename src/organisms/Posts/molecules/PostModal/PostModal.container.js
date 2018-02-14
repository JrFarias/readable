import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PostModal from './PostModal'
import { createPost, editPost, deletePost } from '../../../../ducks/Post/PostReducer'
import { openModal, closeModal } from '../../../../ducks/PostModal/PostModalReducer'

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    createPost,
    editPost,
    deletePost,
    openModal,
    closeModal,
  }, dispatch)
})

const  mapStateToProps = state => ({
  postModal: state.postModal,
  posts: state.posts.posts,
  categories: state.categories.categories,
  isLoading: state.posts.isLoading,
})

export default connect(mapStateToProps, mapDispatchToProps)(PostModal)
