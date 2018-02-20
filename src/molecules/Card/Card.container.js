import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Card from './Card'
import { deletePost } from '../../ducks/Post/PostReducer'
import { openModal as openCommentModal } from '../../ducks/CommentModal/CommentModalReducer'

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ deletePost, openCommentModal }, dispatch)
})

export default connect(null, mapDispatchToProps)(Card)
