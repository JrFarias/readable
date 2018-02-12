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
    expect(wrapper.find('.Vote__positive').simulate('click').length).toEqual(1)
    expect(wrapper.find('.Vote__negative').simulate('click').length).toEqual(1)
  })

  test('should render with voteScore negative', () => {
    const props = {
      voteScore: -5,
      postId: '123',
      actions: {
        upVote: () => {},
        downVote: () => {}
      }
    }
    const defaultVoteScore = '0';

    const wrapper = mount(
      <Vote
        voteScore={props.voteScore}
        postId={props.postId}
        actions={props.actions}
      />
    )

    expect(wrapper).toBeTruthy()
    expect(wrapper.props().voteScore).toEqual(props.voteScore)
    expect(wrapper.props().postId).toEqual(props.postId)
    expect(wrapper.find('.Vote__positive').text()).toEqual(defaultVoteScore)
    expect(wrapper.find('.Vote__negative').text()).toEqual(`${props.voteScore}`)

  })

  test('should render with voteScore positive', () => {
    const props = {
      voteScore: 5,
      postId: '123',
      actions: {
        upVote: () => {},
        downVote: () => {}
      }
    }
    const defaultVoteScore = '0';

    const wrapper = mount(
      <Vote
        voteScore={props.voteScore}
        postId={props.postId}
        actions={props.actions}
      />
    )

    expect(wrapper).toBeTruthy()
    expect(wrapper.props().voteScore).toEqual(props.voteScore)
    expect(wrapper.props().postId).toEqual(props.postId)
    expect(wrapper.find('.Vote__positive').text()).toEqual(`${props.voteScore}`)
    expect(wrapper.find('.Vote__negative').text()).toEqual(defaultVoteScore)

  })
})
