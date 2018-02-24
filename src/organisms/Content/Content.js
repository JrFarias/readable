import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import PlusIcon from 'react-icons/lib/fa/plus-circle'
import { withRouter } from 'react-router-dom'
import './Content.css'
import PostContainer from '../Posts/Post.container'
import CommentModalContainer from '../Posts/molecules/CommentModal/CommentModal.container'


class Content extends PureComponent{

  AddPost = () => this.props.history.push('/post/add')

  render() {
    const { category } = this.props

    return (
      <div className="Content">
      <button className="Content_AddPost" onClick={() => this.AddPost()}>
         <PlusIcon size={30} />
       </button>
       <CommentModalContainer />
       <PostContainer category={category} />
     </div>
    )
  }
}

Content.propTypes = {
  category: PropTypes.string,
  history: PropTypes.object
}

export default withRouter(Content)
