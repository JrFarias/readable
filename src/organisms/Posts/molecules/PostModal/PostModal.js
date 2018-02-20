import React, { PureComponent } from 'react';
import Modal from 'react-modal'
import PropTypes from 'prop-types'
import PlusIcon from 'react-icons/lib/fa/plus-circle'
import CloseIcon from 'react-icons/lib/fa/times-circle'
import './PostModal.css'
import PostDetails from '../PostDetails/PostDetails.container'

export default class PostModal extends PureComponent {
  componentWillMount() {
    Modal.setAppElement('body');
  }

  render() {
    const { postModal } = this.props
    const {openModal, closeModal } = this.props.actions

    const modalIsOpen = postModal.isOpenModal

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
        <PostDetails />
        </Modal>
      </div>
    )
  }
}

PostModal.propTypes = {
  actions: PropTypes.object,
  openModal: PropTypes.func,
  closeModal: PropTypes.func,
  postModal: PropTypes.object,
}

PostModal.defaultProps = {
  categories: [],
  actions: {},
  openModal: () => {},
  closeModal: () => {},
  postModal: {},
}
