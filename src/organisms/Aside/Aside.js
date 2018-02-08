import React, { Component } from 'react'
import Loading from 'react-loading'
import PropTypes from 'prop-types'
import './Aside.css'

export default class Aside extends Component {
  componentDidMount() {
    this.props.actions.getCategories();
  }

  render() {
    const { categories, isLoading } = this.props;

    return (
      <ul className="Aside_Menu">
        {isLoading === true && categories.length === 0
        ? <Loading delay={200} type='spin' color='#222' className='loading' />
        : categories.map(category => (
          <li key={category.path} className="Aside_Item">
            <p>{ category.name }</p>
          </li>
        ))}
      </ul>
    )
  }
}

Aside.propTypes = {
  actions: PropTypes.object,
  categories: PropTypes.array,
  isLoading: PropTypes.bool
}

Aside.defaultProps = {
  categories: [],
  isLoading: false,
  actions: {
    getCategories: () => {}
  }
}


