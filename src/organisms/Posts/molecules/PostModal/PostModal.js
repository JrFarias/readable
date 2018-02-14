import React, { PureComponent } from 'react';
import Modal from 'react-modal'
import PropTypes from 'prop-types'
import PlusIcon from 'react-icons/lib/fa/plus-circle'
import CloseIcon from 'react-icons/lib/fa/times-circle'
import './PostModal.css'
import FormGroup from '../../../../atoms/FormGroup/FormGroup'

export default class PostModal extends PureComponent {
  componentWillMount() {
    Modal.setAppElement('body');
  }

  componentWillReceiveProps(nextProps) {
    const { post } = nextProps.postModal
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
  }

  state = {
    id: `${Math.floor((Math.random() * 10000))}`,
    author: '',
    title: '',
    body: '',
    category: 'react',
    timestamp: Date.now(),
    isEditable: false
  };

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
    const { categories, isLoading, postModal } = this.props
    const {openModal, closeModal, deletePost } = this.props.actions

    const modalIsOpen = postModal.isOpenModal
    const {id, author, title, body, category, isEditable } = this.state

    return (
      <div>
        <button className="PostModal__Add" onClick={() => openModal()}>
          <PlusIcon size={30} />
        </button>
        <Modal
          id="Post-modal"
          className="PostModal"
          isOpen={modalIsOpen}
          onRequestClose={() => closeModal()}
          contentLabel="Post-modal"
        >
        <div className="PostModal__Header">
          <h2 >Posts</h2>
          <button
            className="PostModal__Close"
            onClick={() => closeModal()}
          >
           <CloseIcon size={30}/>
          </button>
        </div>
        <div>
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
        </div>
        </Modal>
      </div>
    )
  }
}

PostModal.propTypes = {
  categories: PropTypes.array,
  isLoading: PropTypes.bool,
  actions: PropTypes.object,
  openModal: PropTypes.func,
  closeModal: PropTypes.func,
  postModal: PropTypes.object,
  posts: PropTypes.array
}

PostModal.defaultProps = {
  categories: [],
  isLoading: false,
  actions: {},
  openModal: () => {},
  closeModal: () => {},
  postModal: {},
  posts: []
}
