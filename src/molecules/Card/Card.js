import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import './Card.css'
import Vote from '../../atoms/Vote/Vote.container'
import ExcludeIcon from 'react-icons/lib/fa/close'
import CommentIcon from 'react-icons/lib/fa/comments'
import { Link } from 'react-router-dom';

export default class Card extends PureComponent {
  formatDate(date, moment) {
    return moment(date).format('DD/MM/YYYY')
  }

  render() {
    const { postId, author, title, body, category, timestamp, voteScore
    } = this.props

    const { openCommentModal, deletePost } = this.props.actions

    return (
      <div id={timestamp} className="Card">
      <div className="Card__Head">
        <p className="Card__Head-title">
          <Link to={`/${category}/${postId}`}>
            <h4>{ title }</h4>
          </Link>
          <span onClick={() => deletePost()}><ExcludeIcon size={20} /></span>
        </p>
      </div>
      <div className="Card__Content">
        <div className="Card__Content--category col-md-4"><span>Category: </span>{ category }</div>
        <div className="Card__Content-body col-md-6">
        { body }
        </div>
      </div>
      <div className="Card__Footer">
        <div className="Card__Footer-author"><span>Author: </span>{ author }</div>
        <div onClick={() => openCommentModal(postId)}><CommentIcon size={20}/> Comment</div>
        <div className="Card__Footer-end">
          <span className="Card__Foote-date">{ this.formatDate(timestamp, moment) }</span>
          <Vote
            postId={postId}
            voteScore={voteScore}
          />
        </div>
      </div>
    </div>
    )
  }
}

Card.propTypes = {
  postId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  author: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  category: PropTypes.string,
  timestamp: PropTypes.number,
  voteScore: PropTypes.number,
  actions: PropTypes.object
}

Card.defaultProps = {
  postId: '',
  author: '',
  title: '',
  body: '',
  category: '',
  timestamp: 0,
  voteScore: 0,
  actions: {}
}
