import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Card from './Card'
import { openModal } from '../../ducks/PostModal/PostModalReducer'
import { openModal as openCommentModal } from '../../ducks/CommentModal/CommentModalReducer'

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ openModal, openCommentModal }, dispatch)
})

const  mapStateToProps = state => ({
  postModal: state.postModal
})

export default connect(mapStateToProps, mapDispatchToProps)(Card)
