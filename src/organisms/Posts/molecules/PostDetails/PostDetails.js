import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'
import FormGroup from '../../../../atoms/FormGroup/FormGroup'
import CommentDetails from '../CommentDetails/CommentDetails.container'
import './PostDetails.css'
import Vote from '../../../../molecules/Vote/Vote.container'

export default class PostDetails extends PureComponent {
  componentWillReceiveProps(nextProps) {
    if (nextProps.post.error) {
      this.props.history.push('/404')
    }

    if (nextProps.post.id) { //eslint-disable-line
      const nextState = Object.assign({}, nextProps.post, { isEditable: true })
      this.setState(nextState)
    }
  }

  componentWillMount() {
    if (!this.props.postId) {
      return
    }

    this.props.actions.getPostId(this.props.postId)
  }

  state = {
    id: `${Math.floor((Math.random() * 10000))}`,
    author: '',
    title: '',
    body: '',
    category: 'react',
    timestamp: Date.now(),
    isEditable: false,
    voteScore: 0,
    commentCount: 0,
  }

  onChangeHandler(e, stateField) {
    return this.setState({
      [stateField]: e.target.value
    })
  }

  submit(e) {
    e.preventDefault()
    if(this.state.isEditable) {
      this.props.actions.editPost(this.state)
      this.props.history.push('/')
    }
    else {
      this.props.actions.createPost(this.state)
    }
  }

  deletePost(id) {
    this.props.actions.deletePost(id)
    this.props.history.push('/')
  }

  render() {
    const { categories, isLoading } = this.props
    const {id, author, title, body, category, isEditable, voteScore, commentCount } = this.state

    return (
      <div className="container PostDetails">
        <form id="PostModalForm" name="PostModalForm" onSubmit={(e) => this.submit(e)}>
          <FormGroup
            label="Title"
            type="text"
            onChange={(e) => this.onChangeHandler(e, 'title')}
            value={title}
          />
          <FormGroup
            label="Author"
            type="text"
            onChange={(e) => this.onChangeHandler(e, 'author')}
            value={author}
          />
          <FormGroup
            label="Message"
            type="text"
            onChange={(e) => this.onChangeHandler(e, 'body')}
            value={body}
          />

          <div className="PostDetails__FormGroup row">
            <label htmlFor="author" className="col-sm-3">Categories:</label>
            <select
              className="col-sm-6"
              name="category"
              value={category}
              onChange={(e) => this.onChangeHandler(e, 'category')}
            >
            {isLoading === true && categories.length === 0
              ? <option>Seletion...</option>
              : categories.map(category => (
                <option key={ category.path }>{ category.name }</option>
              ))
            }
            </select>
          </div>
          <div className="PostDetails__Footer">
            <div>
              <Button bsStyle="primary"  type="submit">
                {
                  isEditable ? 'Editar' : 'Enviar'
                }
              </Button>
              {isEditable ? <Button bsStyle="danger" onClick={() => this.deletePost(id)}>deletar</Button> : ''}
            </div>
            <div>
              <Vote
                postId={id}
                voteScore={voteScore}
              />
            {commentCount} Comments
            </div>
          </div>
        </form>
        <div className="PostDetails__Comments">
        { !isEditable
          ? <div></div>
          : <CommentDetails postId={id} />
        }
        </div>
      </div>
    )
  }
}

PostDetails.propTypes = {
  categories: PropTypes.array,
  isLoading: PropTypes.bool,
  actions: PropTypes.object,
  post: PropTypes.object,
  history: PropTypes.object,
  postId: PropTypes.string
}

PostDetails.defaultProps = {
  categories: [],
  isLoading: false,
  actions: {},
  post: {},
  postId: ''
}
