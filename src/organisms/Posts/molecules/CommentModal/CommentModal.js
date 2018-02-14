import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-modal'
import CloseIcon from 'react-icons/lib/fa/times-circle'
import EditIcon from 'react-icons/lib/fa/edit'
import ExcludeIcon from 'react-icons/lib/fa/close'
import Loading from 'react-loading'
import Vote from '../../../../atoms/Vote/Vote.container'
import './CommentModal.css'

export default class CommentModal extends PureComponent {
  componentWillReceiveProps(nextProps) {
    if(nextProps.commentModal.postId) {
      this.setState({
        id: `${Math.floor((Math.random() * 10000))}`,
        parentId: nextProps.commentModal.postId,
        timestamp: Date.now()
      })
    }
  }

  state = {
    id: '',
    parentId: '',
    timestamp: '',
    body: '',
    author: '',
    voteScore: 0,
    deleted: false,
    parentDeleted: false,
    isEditable: false,
  }

  onChangeHandler(e, stateField) {
    return this.setState({
      [stateField]: e.target.value
    })
  }

  submit(e) {
    e.preventDefault()

    if(this.state.isEditable) {
      this.props.actions.editComment(this.state)
    } else {
      this.props.actions.createComment(this.state)
    }
    this.setState({
      body: '',
      author: ''
    })
  }

  edit(commentId) {
    const { comments } = this.props.commentModal
    const oldComment = comments.filter(comment => comment.id === commentId)[0]
    const newState = Object.assign({}, oldComment, { isEditable: true })
    this.setState(newState)
  }


  render() {
    const { isLoading, isOpenModal, comments } = this.props.commentModal
    const { closeModal, deleteComment } = this.props.actions
    const { author, body } = this.state

    return (
      <Modal
        id="CommentsModal"
        className="CommentsModal"
        isOpen={isOpenModal}
        onRequestClose={() => closeModal()}
        contentLabel="Post-modal"
      >
      <div className="CommentModal__Header">
        <h2>Comments</h2>
        <button
          className="CommentModal__Close"
          onClick={() => closeModal()}
        >
         <CloseIcon size={30}/>
        </button>
      </div>

      <div className="CommentModal__Content">
      {isLoading === true && comments.length === 0
       ? <Loading delay={200} type='spin' color='#222' className='loading' />
       : comments.map(comment => (
         <div id={comment.id} key={comment.id} className="CommentModal__Content-Item">
          <div className="CommentModal__Content-Body">
            <p><span>Message:</span>
              <input
                type="text"
                value={comment.body}
                disabled={true}
              />
              <EditIcon size={20} onClick={() => this.edit(comment.id)} />
              <ExcludeIcon size={20} onClick={() => deleteComment(comment.id)} />
            </p>
          </div>
          <div className="CommentModal__Content-Author">
            <span>Author:
              <input
                type="text"
                value={comment.author}
                disabled={true}
                onChange={(e) => this.onChangeHandler(e, 'author')}
              />
            </span>
            <Vote
              commentId={comment.id}
              voteScore={comment.voteScore}
            />
          </div>
         </div>
        ))
      }

      </div>
      <div className="CommentModal__Footer">
        <form id="CommentModalForm" name="CommentModalForm" className="container" onSubmit={(e) => this.submit(e)}>
          <div className=" row">
            <label htmlFor="commentModalAuthor" className="col-sm-2 col-md-2">Author:</label>
            <input
              className="col-sm-2 col-md-2"
              id='commentModalAuthor'
              name='author'
              type="text"
              value={author}
              onChange={(e) => this.onChangeHandler(e, 'author')}
            />

            <label htmlFor="commentModalBody" className="col-sm-2 col-md-2">Message:</label>
              <input
                className="col-sm-4 col-md-4"
                id='commentModalBody'
                name='body'
                type="text"
                value={body}
                onChange={(e) => this.onChangeHandler(e, 'body')}
              />
            <button className="col-sm-2 col-md-2" type="submit">Enviar</button>
          </div>
        </form>
      </div>
      </Modal>
    )
  }
}

CommentModal.propTypes = {
  actions: PropTypes.object,
  commentModal: PropTypes.object,
  isLoading: PropTypes.bool
}


// author
// :
// "thingtwo"
// body
// :
// "Hi there! I am a COMMENT."
// deleted
// :
// false
// id
// :
// "894tuq4ut84ut8v4t8wun89g"
// parentDeleted
// :
// false
// parentId
// :
// "8xf0y6ziyjabvozdd253nd"
// timestamp
// :
// 1468166872634
// voteScore
// :
// 6
