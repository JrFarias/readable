import reducer, {
  initialState,
  getPostsSaga,
  upVoteSaga,
  downVoteSaga,
  createPostSaga,
  editPostSaga,
  deletePostSaga,
  getPostByCategorySaga,
  upVote,
  downVote,
  getPostByCategory,
  createPost,
  editPost,
  deletePost,
  GET_POSTS_START,
  UP_VOTE,
  DOWN_VOTE,
  GET_POST_BY_CATEGORY,
  CREATE_POST_START,
  EDIT_POST_START,
  DELETE_POST_START
} from './PostReducer'

describe('Post Ducks', () => {
  describe('Post Reducer', () => {
    describe('getPost', () => {
      test('should return the initial state', () => {
        const state = reducer(initialState)

        expect(state).toEqual(initialState)
      })

      test('should set to loading when getPost starts', () => {
        const action = {
          type: `${GET_POSTS_START}`,
        }
        const state = reducer(initialState, action)

        expect(state.isLoading).toBeTruthy()
      })

      test('should set to not loading when getPost completes', () => {
        const action = {
          type: 'GET_POSTS_COMPLETED',
          payload: [],
        }
        const state = reducer(initialState, action)

        expect(state.loading).toBeFalsy()
      })

      test('should return the post when getPost completes', () => {
        const expectedPayload = [{
          name: 'react'
        }]
        const action = {
          type: 'GET_POSTS_COMPLETED',
          payload: expectedPayload,
        }
        const state = reducer(initialState, action)

        expect(state.posts.length).toEqual(expectedPayload.length)
        expect(state.posts[0].constructor.name).toEqual('Object')
      })

      test('should call upVote', () => {
        const postId = 123
        expect(upVote(postId)).toEqual({
          type: `${UP_VOTE}`,
          postId
        })
      })

      test('should call downVote', () => {
        const postId = 123
        expect(downVote(postId)).toEqual({
          type: `${DOWN_VOTE}`,
          postId
        })
      })

      test('should call getPostByCategory', () => {
        const payload = 123
        expect(getPostByCategory(payload)).toEqual({
          type: `${GET_POST_BY_CATEGORY}`,
          payload
        })
      })

      test('should call createPost', () => {
        const payload = 123
        expect(createPost(payload)).toEqual({
          type: `${CREATE_POST_START}`,
          payload
        })
      })

      test('should call editPost', () => {
        const payload = 123
        expect(editPost(payload)).toEqual({
          type: `${EDIT_POST_START}`,
          payload
        })
      })

      test('should call deletePost', () => {
        const postId = 123
        expect(deletePost(postId)).toEqual({
          type: `${DELETE_POST_START}`,
          postId
        })
      })

    })
  })

  describe('Action Creators', () => {
    describe('getPostsSaga', () => {
      test('should build a GET_POSTS_START & GET_POSTS_COMPLETED action', () => {
        const payload = {}
        const getPostAPI = () => [{
          name: 'react'
        }]
        const gen = getPostsSaga({
          payload
        }, getPostAPI)

        expect(gen.next().value).toEqual({
          '@@redux-saga/IO': true,
          PUT: {
            action: {
              payload,
              type: 'GET_POSTS_START'
            },
            channel: null,
          },
        })

        gen.next()

        expect(gen.next([]).value).toEqual({
          '@@redux-saga/IO': true,
          PUT: {
            action: {
              payload: [],
              type: 'GET_POSTS_COMPLETED'
            },
            channel: null,
          },
        })

        expect(gen.next().done).toEqual(true)
      })
    })

    describe('createPostSaga', () => {
      test('should build a  CREATE_POST_COMPLETED action', () => {
        const payload = {}
        const createPostAPI = () => [{
          name: 'react'
        }]
        const gen = createPostSaga({
          payload
        }, createPostAPI)
        gen.next()

        expect(gen.next([]).value).toEqual({
          '@@redux-saga/IO': true,
          PUT: {
            action: {
              payload: [],
              type: 'CREATE_POST_COMPLETED'
            },
            channel: null,
          },
        })

        expect(gen.next().done).toEqual(true)
      })
    })

    describe('editPostSaga', () => {
      test('should build a  EDIT_POST_COMPLETED action', () => {
        const payload = {}
        const editPostAPI = () => [{
          name: 'react'
        }]
        const gen = editPostSaga({
          payload
        }, editPostAPI)
        gen.next()

        expect(gen.next([]).value).toEqual({
          '@@redux-saga/IO': true,
          PUT: {
            action: {
              payload: [],
              type: 'EDIT_POST_COMPLETED'
            },
            channel: null,
          },
        })

        expect(gen.next().done).toEqual(true)
      })
    })

    describe('deletePostSaga', () => {
      test('should build a  DELETE_POST_COMPLETED action', () => {
        const postId = {}
        const deletePostAPI = () => [{
          name: 'react'
        }]
        const gen = deletePostSaga({
          postId
        }, deletePostAPI)
        gen.next()

        expect(gen.next([]).value).toEqual({
          '@@redux-saga/IO': true,
          PUT: {
            action: {
              type: 'DELETE_POST_COMPLETED'
            },
            channel: null,
          },
        })

        expect(gen.next().done).toEqual(true)
      })
    })

    describe('getPostByCategorySaga', () => {
      test('should build a  GET_POST_BY_CATEGORY_COMPLETED action', () => {
        const payload = {}
        const getPostByCategoryAPI = () => [{
          name: 'react'
        }]
        const gen = getPostByCategorySaga({
          payload
        }, getPostByCategoryAPI)
        gen.next()

        expect(gen.next([]).value).toEqual({
          '@@redux-saga/IO': true,
          PUT: {
            action: {
              payload: [],
              type: 'GET_POST_BY_CATEGORY_COMPLETED'
            },
            channel: null,
          },
        })

        expect(gen.next().done).toEqual(true)
      })
    })

    describe('upVoteSaga', () => {
      test('should build a UP_VOTE & UP_VOTE_COMPLETED action', async () => {
        const postId = 123
        const voteAPI = () => [{
          name: 'react'
        }]
        const gen = upVoteSaga({
          postId
        }, voteAPI)
        gen.next()

        expect(gen.next().value).toEqual({
          '@@redux-saga/IO': true,
          PUT: {
            action: {
              postId,
              type: 'UP_VOTE_COMPLETED'
            },
            channel: null,
          },
        })
      })
    })

    describe('downVoteSaga', () => {
      test('should build a DOWN_VOTE & DOWN_VOTE_COMPLETED action', async () => {
        const postId = 123
        const voteAPI = () => [{
          name: 'react'
        }]
        const gen = downVoteSaga({
          postId
        }, voteAPI)
        gen.next()

        expect(gen.next().value).toEqual({
          '@@redux-saga/IO': true,
          PUT: {
            action: {
              postId,
              type: 'DOWN_VOTE_COMPLETED'
            },
            channel: null,
          },
        })
      })
    })
  })
})
