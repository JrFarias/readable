import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import PlusIcon from 'react-icons/lib/fa/plus-circle'
import { withRouter } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import './Content.css'
import PostContainer from '../Posts/Post.container'
import CommentModalContainer from '../Posts/molecules/CommentModal/CommentModal.container'
import sortBy from 'sort-by'

class Content extends PureComponent {
  state = {
    posts: []
  }

  AddPost() {
    return this.props.history.push('/post/add')
  }

  orderByVotes(sortBy) {
    this.setState({
      posts: this.props.posts.sort(sortBy('-voteScore'))
    })
  }

  orderByTimeStamp(sortBy) {
    this.setState({
      posts: this.props.posts.sort(sortBy('-timestamp'))
    })
  }


  render() {
    const { category } = this.props
    const { posts } = this.state

    return (
      <div className="Content">
       <div className="Content_Buttons">
        <Button bsSize="small" onClick={() => this.orderByTimeStamp(sortBy)}>
          Data de Criação
        </Button>

        <Button bsSize="small" onClick={() => this.AddPost()}>
          <PlusIcon size={20} />Adicionar Post
        </Button>

        <Button bsSize="small" onClick={() => this.orderByVotes(sortBy)}>
          Votos
        </Button>
       </div>

       <CommentModalContainer />
       <PostContainer category={category} posts={posts} />
     </div>
    )
  }
}

Content.propTypes = {
  category: PropTypes.string,
  history: PropTypes.object,
  actions: PropTypes.object,
  posts: PropTypes.array
}

export default withRouter(Content)
