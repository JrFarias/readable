import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import CloseIcon from 'react-icons/lib/fa/times-circle'
import EditIcon from 'react-icons/lib/fa/edit'
import ExcludeIcon from 'react-icons/lib/fa/close'
import Loading from 'react-loading'
import { Button, Panel, ControlLabel, FormControl, Grid, Row, Col, ButtonGroup, Form } from 'react-bootstrap'
import Vote from '../../../../atoms/Vote/Vote.container'
import './CommentDetails.css'

export default class CommentDetails extends PureComponent {
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
    const { isLoading, comments } = this.props.commentModal
    const { closeModal, deleteComment } = this.props.actions
    const { author, body } = this.state

    return (
      <Panel bsStyle="primary">
        <Panel.Heading className="CommentDetails__Header">
          <Panel.Title componentClass="h3"> Comments</Panel.Title>
          <CloseIcon size={20} onClick={() => closeModal()}/>
        </Panel.Heading>
      <Panel.Body >
      {isLoading === true && comments.length === 0
      ? <Loading delay={200} type='spin' color='#222' className='loading' />
      : comments.map(comment => (
        <Grid id={comment.id} key={comment.id} >
          <Row color="primary">
            <Col xs={8} sm={8} md={8}>
              <ControlLabel bsStyle="primary">Message:</ControlLabel>
            </Col>
            <Col xs={4} sm={4} md={4}>
              <ControlLabel bsStyle="primary">Author:</ControlLabel>
            </Col>
          </Row>
          <Row>
            <Col xs={8} sm={8} md={8}>
              <FormControl
                bsSize="small"
                type="text"
                value={comment.body}
                disabled={true}
              />
            </Col>
            <Col xs={4} sm={4} md={4}>
              <FormControl
                  type="text"
                  bsSize="small"
                  value={comment.author}
                  disabled={true}
                  onChange={(e) => this.onChangeHandler(e, 'author')}
                />
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={12} md={12}>
              <ButtonGroup className="CommentDetails__ButtonGroup">
                <Button bsSize="small" onClick={() => this.edit(comment.id)}>
                  <EditIcon size={10} />
                </Button>
                <Button bsSize="small" onClick={() => deleteComment(comment.id)}>
                  <ExcludeIcon size={10} color="red" />
                </Button>
                <Vote
                  commentId={comment.id}
                  voteScore={comment.voteScore}
                />
              </ButtonGroup>
            </Col>
          </Row>
        </Grid>
        ))
      }
      </Panel.Body>
        <Panel.Footer>
          <Form inline id="CommentDetailsForm" name="CommentDetailsForm" onSubmit={(e) => this.submit(e)}>
            <Row>
              <Col xs={6} sm={6} md={5}>
                <ControlLabel bsStyle="primary" htmlFor="commentModalAuthor">Author:</ControlLabel>
                <FormControl
                  id='commentModalAuthor'
                  name='author'
                  type="text"
                  bsSize="small"
                  value={author}
                  onChange={(e) => this.onChangeHandler(e, 'author')}
                />
              </Col>
              <Col xs={6} sm={6} md={5}>
                <ControlLabel bsStyle="primary" htmlFor="commentModalBody">Message:</ControlLabel>
                  <FormControl
                    id='commentModalBody'
                    name='body'
                    bsSize="small"
                    type="text"
                    value={body}
                    onChange={(e) => this.onChangeHandler(e, 'body')}
                  />
              </Col>
              <Col xs={12} sm={12} md={2}>
                <Button bsStyle="primary" block type="submit">Enviar</Button>
              </Col>
            </Row>
          </Form>
        </Panel.Footer>
      </Panel>
    )
  }
}

CommentDetails.propTypes = {
  actions: PropTypes.shape({
    closeModal: PropTypes.func,
    deleteComment: PropTypes.func,
    editComment: PropTypes.func,
    createComment: PropTypes.func
  }),
  commentModal: PropTypes.shape({
    comments: PropTypes.array,
    isLoading: PropTypes.bool,
    postId: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ])
  }),
}

CommentDetails.defaultProps = {
  actions: {
    closeModal: () => {},
    deleteComment: () => {},
    editComment: () => {},
    createComment: () => {},
  },
  commentModal: {
    comments: [],
    isLoading: false,
    postId: ''
  },
}
