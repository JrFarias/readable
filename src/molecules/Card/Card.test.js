import React from 'react'
import { shallow } from 'enzyme'
import Card from './Card'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

const initialState = {};
const mockStore = configureStore();

describe('Card component', () => {
  test('should render', () => {
    const wrapper = shallow(<Card />)
    expect(wrapper).toBeTruthy()
  })

  test('should render with props', () => {
    const store = mockStore(initialState)
    const props = {
      postId: 'test',
      author: 'test',
      title: 'test',
      body: 'test',
      category: 'test',
      timestamp: 2,
      voteScore: 2,
    }

    const wrapper = shallow(
      <Provider store={store}>
        <Card
          postId={props.postId}
          author={props.author}
          title={props.title}
          body={props.body}
          category={props.category}
          timestamp={props.timestamp}
          voteScore={props.voteScore}
        />
      </Provider>
    );


    expect(wrapper).toBeTruthy()
    expect(wrapper.props().postId).toEqual(props.postId)
    expect(wrapper.props().author).toEqual(props.author)
    expect(wrapper.props().title).toEqual(props.title)
    expect(wrapper.props().body).toEqual(props.body)
    expect(wrapper.props().category).toEqual(props.category)
    expect(wrapper.props().timestamp).toEqual(props.timestamp)
    expect(wrapper.props().voteScore).toEqual(props.voteScore)
  })
})
