import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Loading from 'react-loading'
import './Post.css'

export default class Post extends PureComponent {

  componentDidMount() {
    this.props.actions.getPosts();
  }

  render() {
    const { posts, isLoading }  = this.props

    return (
      <div>
      {isLoading === true && posts.length ===0
      ? <Loading delay={200} type='spin' color='#222' className='loading' />
      : posts.map(post => (
          <div key={post.id}>
          <p>{ post.author }</p>
          <p>title { post.title }</p>
          <p>body { post.body }</p>
          <p>category { post.category }</p>
          <p>timestamp { post.timestamp }</p>
          <p>voteScore { post.voteScore }</p>
          </div>
        ))}
      </div>
    )
  }
}

Post.propTypes = {
  actions: PropTypes.object,
  posts: PropTypes.array,
  isLoading: PropTypes.bool
}

Post.defaultProps =  {
  actions: {
    getPosts: () => {}
  },
  posts: [],
  isLoading: false
}
