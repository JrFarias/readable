import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-modal'
import CommentDetails from '../CommentDetails/CommentDetails.container'
import './CommentModal.css'

const CommentModal = ({ commentModal }) => {
  Modal.setAppElement('body');

  return (
    <Modal
      id="CommentModalId"
      className="CommentModal"
      isOpen={commentModal.isOpenModal}
      onRequestClose={() => closeModal()}
      contentLabel="Post-modal"
    >
      <CommentDetails />
    </Modal>
  )
}

CommentModal.propTypes = {
  commentModal: PropTypes.shape({
    isOpenModal: PropTypes.bool,
  }),
}

CommentModal.defaultProps = {
  commentModal: {
    isOpenModal: false,
  },
}

export default CommentModal;
