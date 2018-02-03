import React from 'react'
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer component', () => {

  test('should render', () => {
    const wrapper = shallow(<Footer />)
    expect(wrapper).toBeTruthy()
  })
})
