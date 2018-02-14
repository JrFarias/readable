import React from 'react'
import { mount } from 'enzyme'
import PostModal from './PostModal'

describe('PostModal component', () => {
  test('should render', () => {
    const wrapper = mount(<PostModal />)
    expect(wrapper).toBeTruthy()
  })

  test('should render with props', () => {
    const props = {
      categories: [],
      isLoading: false,
      actions: {},
      openModal: () => {},
      closeModal: () => {},
      postModal: {},
      posts: []
    }

    const wrapper = mount(
      <PostModal
        categories={props.categories}
        isLoading={props.isLoading}
        actions={props.actions}
        postModal={props.postModal}
        posts={props.posts}
      />
    )

    expect(wrapper).toBeTruthy()
    expect(wrapper.props().categories).toEqual(props.categories)
    expect(wrapper.props().isLoading).toEqual(props.isLoading)
    expect(wrapper.props().actions).toBe(props.actions)
    expect(wrapper.props().postModal).toEqual(props.postModal)
    expect(wrapper.props().posts).toEqual(props.posts)
  })
})
