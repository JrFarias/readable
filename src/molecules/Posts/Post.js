import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Loading from 'react-loading'
import Card from '../Card/Card'
import './Post.css'

export default class Post extends PureComponent {

  componentDidMount() {
    this.props.actions.getPosts();
  }

  render() {
    const { posts, isLoading }  = this.props

    return (
      <div className="Post">
      {isLoading === true && posts.length === 0
      ? <Loading delay={200} type='spin' color='#222' className='loading' />
      : posts.map(post => (
          <Card
            key={post.id}
            postId={post.id}
            author={post.author}
            title={post.title}
            body={post.body}
            category={post.category}
            timestamp={post.timestamp}
            voteScore={post.voteScore}
          />
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
