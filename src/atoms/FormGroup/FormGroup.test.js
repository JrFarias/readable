import React from 'react'
import { shallow, mount } from 'enzyme'
import FormGroup from './FormGroup'

describe('FormGroup component', () => {
  test('should render', () => {
    const wrapper = shallow(<FormGroup />)
    expect(wrapper).toBeTruthy()
  })

  test('should render with props', () => {
    const props = {
      value: 'olar',
      label: 'olar',
      type: 'text',
      disabled: 'false',
    }

    const wrapper = mount(
      <FormGroup
        value={props.value}
        label={props.label}
        type={props.type}
        disabled={props.disabled}
      />
    )

    expect(wrapper).toBeTruthy()
    expect(wrapper.props().value).toEqual(props.value)
    expect(wrapper.props().label).toEqual(props.label)
    expect(wrapper.props().type).toEqual(props.type)
    expect(wrapper.props().disabled).toEqual(props.disabled)
  })
})
