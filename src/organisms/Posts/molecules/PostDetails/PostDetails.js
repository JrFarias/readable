import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'
import FormGroup from '../../../../atoms/FormGroup/FormGroup'
import { getPostByIdAPI } from '../../../../util/Api'
import './PostDetails.css'

export default class PostDetails extends PureComponent {
  componentWillMount() {
    const { post, postId } = this.props
    if (post && post.postId) {
      this.setState({
        id: post.postId,
        author: post.author,
        title: post.title,
        body: post.body,
        category: post.category,
        timestamp: post.timestamp,
        isEditable: true
      })
    } else if(postId) {
      this.getPostById(postId)
    } else {
      this.setState({
        id: `${Math.floor((Math.random() * 10000))}`,
        author: '',
        title: '',
        body: '',
        category: 'react',
        timestamp: Date.now(),
        isEditable: false
      })
    }
  }

  getPostById(postId) {
    return getPostByIdAPI(postId)
    .then(post => {
      if(post.error) {
        this.props.history.push('/404')

        return
      }

      return this.setState({
      id: post.id,
      author: post.author,
      title: post.title,
      body: post.body,
      category: post.category,
      timestamp: post.timestamp,
      isEditable: true
    })
  })
  }

  state = {
    id: `${Math.floor((Math.random() * 10000))}`,
    author: '',
    title: '',
    body: '',
    category: 'react',
    timestamp: Date.now(),
    isEditable: false
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
    }
    else {
      this.props.actions.createPost(this.state)
    }
    this.props.history.push('/')
  }


  render() {
    const { categories, isLoading } = this.props
    const { deletePost } = this.props.actions

    const {id, author, title, body, category, isEditable } = this.state

    return (
      <form id="PostModalForm" name="PostModalForm" className="container PostDetails" onSubmit={(e) => this.submit(e)}>
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
          <Button bsStyle="primary"  type="submit">
            {
              isEditable ? 'Editar' : 'Enviar'
            }
          </Button>
          {isEditable ? <Button bsSize="danger" onClick={() => deletePost(id)}>deletar</Button> : ''}
        </div>
      </form>
    )
  }
}

PostDetails.propTypes = {
  categories: PropTypes.array,
  isLoading: PropTypes.bool,
  actions: PropTypes.object,
  openModal: PropTypes.func,
  closeModal: PropTypes.func,
  post: PropTypes.object,
  postId: PropTypes.string,
  history: PropTypes.object
}

PostDetails.defaultProps = {
  categories: [],
  isLoading: false,
  actions: {},
  openModal: () => {},
  closeModal: () => {},
  post: {},
  postId: ''
}
