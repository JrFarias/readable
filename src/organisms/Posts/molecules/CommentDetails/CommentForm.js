import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Button, ControlLabel, FormControl, Row, Col, Form } from 'react-bootstrap'

export default class CommentForm extends PureComponent {
  constructor(props) {
    super(props)
  }


  render() {
    const { author, body, onChangeHandler, submit } = this.props

    return (
      <Form inline id="CommentModalForm" name="CommentModalForm" onSubmit={(e) => submit(e)}>
        <Row>
          <Col xs={6} sm={6} md={5}>
        <ControlLabel bsStyle="primary" htmlFor="commentModalAuthor">Author:</ControlLabel>
          <FormControl
            id='commentModalAuthor'
            name='author'
            type="text"
            bsSize="small"
            value={author}
            onChange={(e) => onChangeHandler(e, 'author')}
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
              onChange={(e) => onChangeHandler(e, 'body')}
            />
          </Col>
          <Col xs={12} sm={12} md={2}>
          <Button bsStyle="primary" block type="submit">Enviar</Button>
          </Col>
        </Row>
      </Form>
    )
  }
}

CommentForm.propTypes = {
  author: PropTypes.string,
  body: PropTypes.string,
  onChangeHandler: PropTypes.func,
  submit: PropTypes.func
}
