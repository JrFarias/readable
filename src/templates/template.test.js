import React from 'react'
import { shallow, mount } from 'enzyme';
import Template from './index';

describe('Template component', () => {

  test('should render', () => {
    const wrapper = shallow(<Template />)
    expect(wrapper).toBeTruthy()
  })

  test('should render with props', () => {
    const header = () => {}
    const content = () => {}
    const aside = () => {}
    const footer = () => {}

    const wrapper = mount(
      <Template
        header={<header />}
        content={<content />}
        aside={<aside />}
        footer={<footer />}
      />
    )
    expect(wrapper.props().header).toEqual(<header />)
    expect(wrapper.props().content).toEqual(<content />)
    expect(wrapper.props().aside).toEqual(<aside />)
    expect(wrapper.props().footer).toEqual(<footer />)
  });
})
