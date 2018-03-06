import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Content from './Content'
import sortBy from 'sort-by'
import { sortByVotes } from '../../ducks/Post/PostReducer'

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ sortByVotes }, dispatch)
})

const  mapStateToProps = state => {
  let posts = state.posts.posts

  if (state.posts.sortByVotes) {
    debugger
    posts = posts.sort(sortBy('-voteScore'))
  }

  return {
    posts
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content)
