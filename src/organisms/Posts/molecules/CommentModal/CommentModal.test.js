import React from 'react'
import { mount } from 'enzyme'
import CommentModal from './CommentModal'

describe('CommentModal component', () => {
  test('should render', () => {
    const wrapper = mount(<CommentModal />)
    expect(wrapper).toBeTruthy()
  })

  test('should render with props', () => {
    const props = {
      actions: {
        closeModal: () => {},
        deleteComment: () => {},
        editComment: () => {},
        createComment: () => {}
      },
      commentModal: {
        comments: [],
        isOpenModal: false,
        isLoading: false,
        postId: ''
      },
    }

    const wrapper = mount(
      <CommentModal
        actions={props.actions}
        commentModal={props.commentModal}
      />
    )

    expect(wrapper).toBeTruthy()
    expect(wrapper.props().actions).toBe(props.actions)
    expect(wrapper.props().commentModal).toEqual(props.commentModal)
  })
})
