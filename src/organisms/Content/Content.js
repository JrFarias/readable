import React from 'react'
import './Content.css'
import PostContainer from '../Posts/Post.container'
import PostModalContainer from '../Posts/molecules/PostModal/PostModal.container'
import CommentModalContainer from '../Posts/molecules/CommentModal/CommentModal.container'

const Content = () => (
  <div className="Content">
    <PostModalContainer />
    <CommentModalContainer />
    <PostContainer />
  </div>
)

export default Content
