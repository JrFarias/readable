import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './Vote.css'
import Like from 'react-icons/lib/fa/thumbs-up'
import DontLike from 'react-icons/lib/fa/thumbs-down'

export default class Vote extends PureComponent {
  upVote(id) {
    this.props.postId
    ? this.props.actions.upVote(id)
    : this.props.actions.upVoteComment(id)
  }

  downVote(id) {
    this.props.postId
    ? this.props.actions.downVote(id)
    : this.props.actions.downVoteComment(id)
  }

  render() {
    const { voteScore, postId, commentId } = this.props
    const id = postId || commentId;

    const NEGATIVE_NUMBER = -1;
    let voteValue = 0;

    if (Math.sign(voteScore) === NEGATIVE_NUMBER) {
      return (
        <div className="Vote">
          <button
            className="Vote__positive"
            onClick={() => this.upVote(id)}
          >
          <Like size={10} />
            {voteValue}
          </button>
          <button
            className="Vote__negative"
            onClick={() => this.downVote(id)}
          >
          <DontLike size={10}/>
            {Math.abs(voteScore)}
          </button>
        </div>
      )
    }

    return (
      <div className="Vote">
        <button
          className="Vote__positive"
          onClick={() => this.upVote(id)}
        >
        <Like size={10} />
          {voteScore}
        </button>
        <button
          className="Vote__negative"
          onClick={() => this.downVote(id)}
        >
        <DontLike size={10}/>
          {Math.abs(voteValue)}
        </button>
      </div>
    )
  }
}

Vote.propTypes = {
  voteScore: PropTypes.number,
  postId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  commentId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  actions: PropTypes.object
}

Vote.defaultProps = {
  voteScore: 0,
  postId: '',
  commentId: '',
  actions: {}
}

