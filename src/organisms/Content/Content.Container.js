import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import sortBy from 'sort-by'
import Content from './Content'
import { sortByVotes, sortByTimeStamp } from '../../ducks/Post/PostReducer'

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ sortByVotes, sortByTimeStamp }, dispatch)
})

const  mapStateToProps = state => {
  let posts = state.posts.posts

  if (state.posts.sortByVotes) {
    posts = posts.sort(sortBy('-voteScore'))
  }

  if(state.posts.sortByTimeStamp) {
    posts = posts.sort(sortBy('-timestamp'))
  }

  return {
    posts
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content)
