import React, { Component } from 'react';
import { getCategories } from '../../util/Api'
import Loading from 'react-loading'
import './Aside.css'

export default class Aside extends Component {

  state = {
    isLoading: true,
    categories: []
  }

  componentDidMount() {
    getCategories()
    .then(categories => {
      this.setState({
        isLoading: false,
        categories
      })}
    )
  }

  render() {
    const { categories, isLoading } = this.state;

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
