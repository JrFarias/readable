import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Vote from './Vote'
import { upVote, downVote } from '../../ducks/Post/PostReducer'

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ upVote, downVote }, dispatch)
})

const  mapStateToProps = state => ({
  posts: state.posts.posts,
  isLoading: state.posts.isLoading,
})

export default connect(mapStateToProps, mapDispatchToProps)(Vote)
