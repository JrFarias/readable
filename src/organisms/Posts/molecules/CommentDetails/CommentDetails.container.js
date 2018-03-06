import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import CommentDetails from './CommentDetails'
import { getComments, createComment, editComment, deleteComment } from '../../../../ducks/CommentDetails/CommentDetailsReducer'

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    getComments,
    createComment,
    editComment,
    deleteComment
  }, dispatch)
})

const  mapStateToProps = state => {
  return {
  commentDetails: state.commentDetails,
  isLoading: state.commentDetails.isLoading,
}}

export default connect(mapStateToProps, mapDispatchToProps)(CommentDetails)
