import React, { PureComponent } from 'react';
import FormGroup from '../../../../atoms/FormGroup/FormGroup'
import PropTypes from 'prop-types'
import { getPostByIdAPI } from '../../../../util/Api'

export default class PostDetails extends PureComponent {
  componentWillMount() {
    debugger

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

    this.getPostById(postId)
  }

  getPostById(postId) {
    return getPostByIdAPI(postId)
    .then(post => this.setState({
      id: post.id,
      author: post.author,
      title: post.title,
      body: post.body,
      category: post.category,
      timestamp: post.timestamp,
      isEditable: true
    }))
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
    this.props.actions.closeModal()
  }


  render() {
    const { categories, isLoading } = this.props
    const { deletePost } = this.props.actions

    const {id, author, title, body, category, isEditable } = this.state

    return (
      <form id="PostModalForm" name="PostModalForm" className="container" onSubmit={(e) => this.submit(e)}>
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

        <div className="PostModal__FormGroup row">
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

        <div className="PostModal__Footer">
          <button type="submit">
            {
              isEditable ? 'Editar' : 'Enviar'
            }
          </button>
          {isEditable ? <button onClick={() => deletePost(id)}>deletar</button> : ''}
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
  postId: PropTypes.string
}

PostDetails.defaultProps = {
  categories: [],
  isLoading: false,
  actions: {},
  openModal: () => {},
  closeModal: () => {},
  post: {},
  postId: {}
}
