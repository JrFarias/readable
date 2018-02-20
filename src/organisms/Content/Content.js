import React from 'react'
import PropTypes from 'prop-types'
import './Content.css'
import PostContainer from '../Posts/Post.container'
import CommentModalContainer from '../Posts/molecules/CommentModal/CommentModal.container'

const Content = ({ category }) => (
  <div className="Content">
    <CommentModalContainer />
    <PostContainer category={category} />
  </div>
)

Content.propTypes = {
  category: PropTypes.string
}

export default Content
