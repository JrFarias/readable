import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import './Card.css'
import Votes from '../../atoms/Vote/Vote'

const formatDate = (date, moment) => moment(date).format('DD/MM/YYYY')


const Card = ({
  author,
  title,
  body,
  category,
  timestamp,
  voteScore,
}) => (
  <div className="Card">
    <div className="Card__Head">
      <p className="Card__Head-title">{ title }</p>
    </div>
    <div className="Card__Content">
      <div className="Card__Content--category col-md-2"><span>Category: </span>{ category }</div>
      <div className="Card__Content-body col-md-10">
      { body }
      </div>
    </div>
    <div className="Card__Footer">
      <div className="Card__Footer-author"><span>Author: </span>{ author }</div>
      <div className="Card__Footer-end">
        <span className="Card__Foote-date">{ formatDate(timestamp, moment) }</span>
        <Votes voteScore={voteScore} />
      </div>
    </div>
  </div>
)

Card.propTypes = {
  author: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  category: PropTypes.string,
  timestamp: PropTypes.number,
  voteScore: PropTypes.number,
}

Card.defaultProps = {
  author: '',
  title: '',
  body: '',
  category: '',
  timestamp: 0,
  voteScore: 0,
}

export default Card
