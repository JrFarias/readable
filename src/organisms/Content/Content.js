import React from 'react'
import './Content.css'
import PostContainer from '../Posts/Post.container'
import PostModalContainer from '../Posts/molecules/Post-Modal/PostModal.container'

const Content = () => (
  <div className="Content">
    <PostModalContainer />
    <PostContainer />
  </div>
)

export default Content
