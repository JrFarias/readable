import React from 'react'
import Proptypes from 'prop-types'
import './Vote.css'

const votes = ({
  voteScore
}) => {
  const NEGATIVE_NUMBER = -1;
  let voteValue = 0;

  if (Math.sign(voteScore) === NEGATIVE_NUMBER) {
    return (
      <div className="Vote">
        <button className="Vote__positive">
          {voteValue}
        </button>
        <button className="Vote__negative">
          {voteScore}
        </button>
     </div>
    )
  }

  return (
    <div className="Vote">
      <button className="Vote__positive">
        {voteScore}
      </button>
      <button className="Vote__negative">
        {voteValue}
      </button>
    </div>
  )
}

votes.propTypes = {
  voteScore: Proptypes.number
}

votes.defaultProps = {
  voteScore: 0
}

export default votes
