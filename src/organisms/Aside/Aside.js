import React, { PureComponent } from 'react'
import Loading from 'react-loading'
import PropTypes from 'prop-types'
import './Aside.css'
import { NavLink } from 'react-router-dom'

export default class Aside extends PureComponent {
  componentDidMount() {
    this.props.actions.getCategories();
  }

  render() {
    const { categories, isLoading } = this.props;
    const { getPosts, getPostByCategory } = this.props.actions;

    return (
      <ul className="Aside_Menu">
        <li
          className="Aside_Item"
          onClick={() => getPosts()}
        >
          <p>Home</p>
        </li>
        {isLoading === true && categories.length === 0
        ? <Loading delay={200} type='spin' color='#222' className='loading' />
        : categories.map(category => (
          <li
            key={category.path}
            className="Aside_Item"
          >
          <NavLink
            className="Aside_Item-NavLink"
            to={category.path}
            onClick={() => getPostByCategory(`${category.path}`)}
          >
            <p>{ category.name }</p>
          </NavLink>
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


