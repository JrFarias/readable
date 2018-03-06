import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import PlusIcon from 'react-icons/lib/fa/plus-circle'
import { withRouter } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import './Content.css'
import PostContainer from '../Posts/Post.container'
import sortBy from 'sort-by'

class Content extends PureComponent {


  AddPost() {
    return this.props.history.push('/post/add')
  }

  orderByVotes() {
   this.props.actions.sortByVotes()
  }

  orderByTimeStamp(sortBy) {
    this.setState({
      posts: this.props.posts.sort(sortBy('-timestamp'))
    })
  }

  render() {
    const { posts } = this.props

    return (
      <div className="Content">
       <div className="Content_Buttons">
        <Button bsSize="small" onClick={() => this.orderByTimeStamp(sortBy)}>
          Data de Criação
        </Button>

        <Button bsSize="small" onClick={() => this.AddPost()}>
          <PlusIcon size={20} />Adicionar Post
        </Button>

        <Button bsSize="small" onClick={() => this.orderByVotes()}>
          Votos
        </Button>
       </div>

       <PostContainer posts={posts} />
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

Content.defaultProps = {
  posts: [],
  category: '',
  history: {},
  actions: {}
}

export default withRouter(Content)
