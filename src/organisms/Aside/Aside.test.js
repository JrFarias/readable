import React from 'react'
import { shallow, mount } from 'enzyme'
import Aside from './Aside'
import { Route, BrowserRouter } from 'react-router-dom'

describe('Aside component', () => {
  test('should render', () => {
    const wrapper = shallow(<Aside />)
    expect(wrapper).toBeTruthy()
  })

  test('should render with props', () => {
    const props = {
      categories: [],
      isLoading: false,
      actions: {
        getCategories: () => {}
      }
    }

    const wrapper = mount(
      <BrowserRouter>
        <Route
        path="/"
        render={() =>
          <Aside
            categories={props.categories}
            isLoading={props.isLoading}
            actions={props.actions}
          />}
        />
      </BrowserRouter>
    ).children().children().children()

    expect(wrapper).toBeTruthy()
    expect(wrapper.props().categories).toEqual(props.categories)
    expect(wrapper.props().isLoading).toEqual(props.isLoading)
    expect(wrapper.props().actions).toEqual(props.actions)
  })
})
