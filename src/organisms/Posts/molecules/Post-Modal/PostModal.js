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

  state = {
    modalIsOpen: false,
    id: Math.floor((Math.random() * 10000)),
    author: '',
    title: '',
    body: '',
    category: 'react',
    timestamp: Date.now()
  };

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  onChangeHandler(e, stateField) {
    return this.setState({
      [stateField]: e.target.value
    })
  }

  submit(e) {
    e.preventDefault()
    this.props.actions.createPost(this.state)
    this.closeModal()
  }

  render() {
    const { categories, isLoading } = this.props
    const { modalIsOpen, author, title, body, category } = this.state

    return (
      <div>
        <button className="PostModal__Add" onClick={() => this.openModal()}>
          <PlusIcon size={30} />
        </button>
        <Modal
          id="Post-modal"
          className="PostModal"
          isOpen={modalIsOpen}
          onRequestClose={() => this.closeModal()}
          contentLabel="Post-modal"
        >
        <div className="PostModal__Header">
          <h2 >Posts</h2>
          <button
            className="PostModal__Close"
            onClick={() => this.closeModal()}
          >
           <CloseIcon size={30}/>
          </button>
        </div>
        <div className="PostModal__Content">
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

            <button type="submit">Submit</button>
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
  actions: PropTypes.object
}

PostModal.defaultProps = {
  categories: [],
  isLoading: false,
  actions: {}
}


// id - UUID should be fine, but any unique id will work
// timestamp - timestamp in whatever format you like, you can use Date.now() if you like
// title - String
// body - String
// author - String
// category: Any of the categories listed in categories.js. Feel free to extend this list as you desire.
