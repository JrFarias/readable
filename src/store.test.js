import React from 'react'
import { shallow } from 'enzyme'
import store from './store'

describe('store', () => {
  test('should render', () => {
    const wrapper = shallow(<store />)
    expect(wrapper).toBeTruthy()
  })
})
