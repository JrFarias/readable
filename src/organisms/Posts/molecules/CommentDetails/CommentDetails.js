import React, { PureComponent } from 'react'
import { Button, ControlLabel, FormControl, Grid, Row, Col, Form, ButtonGroup } from 'react-bootstrap'
import EditIcon from 'react-icons/lib/fa/edit'
import ExcludeIcon from 'react-icons/lib/fa/close'
import Vote from '../../../../molecules/Vote/Vote.container'
import PropTypes from 'prop-types'
import './CommentDetails.css'

export default class CommentDetails extends PureComponent {
  state = {
    id: `${Math.floor((Math.random() * 10000))}`,
    parentId: '',
    timestamp: Date.now(),
    body: '',
    author: '',
    voteScore: 0,
    deleted: false,
    parentDeleted: false,
    isEditable: false,
  }

  componentWillMount() {
    this.props.actions.getComments(this.props.postId)
    this.setState({ parentId: this.props.postId })
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
    const { id, body, author, timestamp, voteScore,
      parentDeleted, parentId, deleted } = this.props.commentDetails.comments
        .find(comment => comment.id === commentId)

    if (!this.state.isEditable) {
      return this.setState({ id, body, author, timestamp, voteScore,
        parentDeleted, parentId, deleted, isEditable: true })
    }
  }

  deleteComment(commentId) {
    this.props.actions.deleteComment(commentId)
  }

  render() {
    const { author, body } = this.state
    const { comments } = this.props.commentDetails;

    return (
      <Grid>
      {comments.length === 0
        ? <div><p>Sem comentátios</p></div>
        : comments.map(comment => (
          <div key={comment.id}  className="CommentDetails__Messages">
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
                  />
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={12} md={12}>
                <ButtonGroup className="CommentDetails__ButtonGroup">
                  <Button bsSize="small" onClick={() => this.edit(comment.id)}>
                    <EditIcon size={10} />
                  </Button>
                  <Button bsSize="small" onClick={() => this.deleteComment(comment.id)}>
                    <ExcludeIcon size={10} color="red" />
                  </Button>
                  <Vote
                    commentId={comment.id}
                    voteScore={comment.voteScore}
                  />
                </ButtonGroup>
              </Col>
            </Row>
        </div>
        ))
      }
      <Row>
        <Form inline id="CommentForm" className="col-md-12" name="CommentForm" onSubmit={(e) => this.submit(e)}>
          <Row>
          <Col xs={6} sm={6} md={6}>
              <ControlLabel bsStyle="primary" htmlFor="commentBody">Message:</ControlLabel>
                <FormControl
                  id='commentBody'
                  name='body'
                  bsSize="small"
                  type="text"
                  value={body}
                  onChange={(e) => this.onChangeHandler(e, 'body')}
                />
              </Col>
            <Col xs={6} sm={6} md={4}>
              <ControlLabel bsStyle="primary" htmlFor="commentAuthor">Author:</ControlLabel>
                <FormControl
                  id='commentAuthor'
                  name='author'
                  type="text"
                  bsSize="small"
                  value={author}
                  onChange={(e) => this.onChangeHandler(e, 'author')}
                />
            </Col>
            <Col xs={12} sm={12} md={2} className="CommentDetails__Button">
              <Button bsStyle="primary" block type="submit">Enviar</Button>
            </Col>
          </Row>
        </Form>
      </Row>
    </Grid>
    )
  }
}
CommentDetails.propTypes = {
  actions: PropTypes.object,
  commentDetails: PropTypes.object,
  comments: PropTypes.array,
  postId: PropTypes.string
}
