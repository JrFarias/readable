import { connect } from 'react-redux'
import Content from './Content'

const  mapStateToProps = state => ({
  posts: state.posts.posts
})

export default connect(mapStateToProps, null)(Content)
