import React from 'react'
import { mount } from 'enzyme'
import Post from './Post'

describe('Post component', () => {
  test('should render', () => {
    const wrapper = mount(<Post />)
    expect(wrapper).toBeTruthy()
  })

  test('should render with props', () => {
    const props = {
      posts: [],
      isLoading: true,
      actions: {
        getPosts: () => {}
      }
    }

    const wrapper = mount(
      <Post
      posts={props.posts}
      isLoading={props.isLoading}
      actions={props.actions}
      />
    )

    expect(wrapper).toBeTruthy()
    expect(wrapper.props().posts).toEqual(props.posts)
    expect(wrapper.props().isLoading).toEqual(props.isLoading)
    expect(wrapper.props().actions).toBe(props.actions)
    expect(wrapper.find('Loading').length).toBe(1)
  })

  test('should render component', () => {
    const props = {
      posts: [],
      isLoading: false,
      actions: {
        getPosts: () => {}
      }
    }

    const wrapper = mount(
      <Post
      posts={props.posts}
      isLoading={props.isLoading}
      actions={props.actions}
      />
    )

    expect(wrapper).toBeTruthy()
    expect(wrapper.props().posts).toEqual(props.posts)
    expect(wrapper.props().isLoading).toEqual(props.isLoading)
    expect(wrapper.props().actions).toBe(props.actions)
    expect(wrapper.find('Post').length).toBe(1)
  })
})
