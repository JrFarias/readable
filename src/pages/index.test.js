import React from 'react'
import { shallow } from 'enzyme';
import Page from './index';

describe('Page component', () => {

  test('should render', () => {
    const wrapper = shallow(<Page />)
    expect(wrapper).toBeTruthy()
  })
})
