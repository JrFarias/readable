import React from 'react'
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header component', () => {

  test('should render', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper).toBeTruthy()
  })
})
