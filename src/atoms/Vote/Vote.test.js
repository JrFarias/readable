import React from 'react'
import { shallow, mount } from 'enzyme'
import Vote from './Vote'

describe('Vote component', () => {
  test('should render', () => {
    const wrapper = shallow(<Vote />)
    expect(wrapper).toBeTruthy()
  })

  test('should render with props', () => {
    const props = {
      voteScore: 5,
      postId: '123',
      actions: {
        upVote: () => {},
        downVote: () => {}
      }
    }

    const wrapper = mount(
      <Vote
        postId={props.postId}
        voteScore={props.voteScore}
        actions={props.actions}
      />
    )

    expect(wrapper).toBeTruthy()
    expect(wrapper.props().postId).toEqual(props.postId)
    expect(wrapper.props().voteScore).toEqual(props.voteScore)
    expect(wrapper.props().actions).toEqual(props.actions)
  })

  test('should render with prop commentId', () => {
    const props = {
      voteScore: 5,
      commentId: '123',
      actions: {
        upVoteComment: () => {},
        downVoteComment: () => {}
      }
    }

    const wrapper = mount(
      <Vote
        commentId={props.commentId}
        voteScore={props.voteScore}
        actions={props.actions}
      />
    )

    expect(wrapper).toBeTruthy()
    expect(wrapper.props().commentId).toEqual(props.commentId)
    expect(wrapper.props().voteScore).toEqual(props.voteScore)
    expect(wrapper.props().actions).toEqual(props.actions)
  })
})
