import React, { PureComponent } from 'react'
import Proptypes from 'prop-types'
import './Vote.css'

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
            {voteValue}
          </button>
          <button
            className="Vote__negative"
            onClick={() => downVote(postId)}
          >
            {voteScore}
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
          {voteScore}
        </button>
        <button
          className="Vote__negative"
          onClick={() => downVote(postId)}
        >
          {voteValue}
        </button>
      </div>
    )
  }
}

Vote.propTypes = {
  voteScore: Proptypes.number,
  postId: Proptypes.string,
  actions: Proptypes.object
}

Vote.defaultProps = {
  voteScore: 0,
  postId: '',
  actions: {}
}

