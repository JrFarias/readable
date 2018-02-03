import React from 'react'
import { shallow } from 'enzyme';
import Aside from './Aside';

describe('Aside component', () => {

  test('should render', () => {
    const wrapper = shallow(<Aside />)
    expect(wrapper).toBeTruthy()
  })
})
