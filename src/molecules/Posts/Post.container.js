import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Post from './Post'
import { getPosts } from '../../ducks/Post/PostReducer'

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ getPosts }, dispatch)
})

const  mapStateToProps = state => {
  return {
    posts: state.posts.posts,
    isLoading: state.posts.isLoading,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
