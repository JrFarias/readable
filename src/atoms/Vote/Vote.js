import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './Vote.css'
import Like from 'react-icons/lib/fa/thumbs-up'
import DontLike from 'react-icons/lib/fa/thumbs-down'

export default class Vote extends PureComponent {
  render() {
    const { voteScore, postId } = this.props
    const { upVote, downVote } = this.props.actions

    const NEGATIVE_NUMBER = -1;
    let voteValue = 0;

    if (Math.sign(voteScore) === NEGATIVE_NUMBER) {
      return (
        <div className="Vote">
          <button
            className="Vote__positive"
            onClick={() => upVote(postId)}
          >
          <Like size={10} />
            {voteValue}
          </button>
          <button
            className="Vote__negative"
            onClick={() => downVote(postId)}
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
          onClick={() => upVote(postId)}
        >
        <Like size={10} />
          {voteScore}
        </button>
        <button
          className="Vote__negative"
          onClick={() => downVote(postId)}
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
  actions: PropTypes.object
}

Vote.defaultProps = {
  voteScore: 0,
  postId: '',
  actions: {}
}

