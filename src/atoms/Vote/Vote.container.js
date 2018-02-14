import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Vote from './Vote'
import { upVote, downVote } from '../../ducks/Post/PostReducer'
import { upVoteComment, downVoteComment } from '../../ducks/CommentModal/CommentModalReducer'

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ upVote, downVote, upVoteComment, downVoteComment }, dispatch)
})

const  mapStateToProps = state => ({
  posts: state.posts.posts,
  isLoading: state.posts.isLoading,
})

export default connect(mapStateToProps, mapDispatchToProps)(Vote)
