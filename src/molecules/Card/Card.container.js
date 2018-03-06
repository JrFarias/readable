import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Card from './Card'
import { deletePost } from '../../ducks/Post/PostReducer'

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ deletePost }, dispatch)
})

export default connect(null, mapDispatchToProps)(Card)
