import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import CommentDetails from './CommentDetails'
import {  closeModal, createComment, editComment, deleteComment } from '../../../../ducks/CommentModal/CommentModalReducer'

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    closeModal,
    createComment,
    editComment,
    deleteComment
  }, dispatch)
})

const  mapStateToProps = state => {
  return {
  commentModal: state.commentModal,
  isLoading: state.commentModal.isLoading,
}}

export default connect(mapStateToProps, mapDispatchToProps)(CommentDetails)
