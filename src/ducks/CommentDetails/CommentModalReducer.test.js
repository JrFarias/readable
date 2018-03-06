import reducer, {
  initialState,
  CREATE_COMMENT_START,
  EDIT_COMMENT_START,
  DELETE_COMMENT_START,
  getCommentsByPostSaga,
  createCommentSaga,
  editCommentSaga,
  upVoteCommentSaga,
  downVoteCommentSaga,
  createComment,
  editComment,
  closeModal,
  openModal,
  deleteComment
} from './CommentDetailsReducer'

describe('CommentModal Ducks', () => {
  describe('CommentModal Reducer', () => {
    describe('createComment', () => {
      test('should return the initial state', () => {
        const state = reducer(initialState)

        expect(state).toEqual(initialState)
      })

      test('should set to loading when createComment starts', () => {
        const action = {
          type: `${CREATE_COMMENT_START}`
        }
        const state = reducer(initialState, action)

        expect(state.isLoading).toBeTruthy()
      })

      test('should set to not loading when createComment completes', () => {
        const action = {
          type: 'CREATE_COMMENT_COMPLETED',
          payload: []
        }
        const state = reducer(initialState, action)

        expect(state.isLoading).toBeFalsy()
        expect(state.isOpenModal).toBeFalsy()
      })

      test('should return the comments when createComment completes', () => {
        const expectedPayload = [
          {
            name: 'react'
          }
        ]
        const action = {
          type: 'CREATE_COMMENT_COMPLETED',
          payload: expectedPayload
        }
        const state = reducer(initialState, action)
        expect(state.comments.length).toEqual(expectedPayload.length)
        expect(state.comments[0].constructor.name).toEqual('Array')
      })
    })

    describe('editComment', () => {
      test('should set to loading when editComment starts', () => {
        const action = {
          type: `${EDIT_COMMENT_START}`
        }
        const state = reducer(initialState, action)

        expect(state.isLoading).toBeTruthy()
      })

      test('should set to not loading when editComment completes', () => {
        const action = {
          type: 'EDIT_COMMENT_COMPLETED',
          payload: [
            {
              id: 'react'
            }
          ]
        }
        const state = reducer(initialState, action)

        expect(state.isLoading).toBeFalsy()
        expect(state.isOpenModal).toBeFalsy()
      })

      test('should return the comments when editComment completes', () => {
        const expectedPayload = [
          {
            id: 'react'
          }
        ]
        const action = {
          type: 'EDIT_COMMENT_COMPLETED',
          payload: expectedPayload
        }

        initialState
          .comments
          .push(expectedPayload)
        const state = reducer(initialState, action)

        expect(state.comments.length).toEqual(expectedPayload.length)
        expect(state.comments[0].constructor.name).toEqual('Array')
      })
    })

    describe('deleteComment', () => {
      test('should set to loading when deleteComment starts', () => {
        const action = {
          type: `${DELETE_COMMENT_START}`
        }
        const state = reducer(initialState, action)

        expect(state.isLoading).toBeTruthy()
      })

      test('should set to not loading when deleteComment completes', () => {
        const action = {
          type: 'DELETE_COMMENT_COMPLETED',
          payload: [
            {
              id: 'react'
            }
          ]
        }
        const state = reducer(initialState, action)

        expect(state.isLoading).toBeFalsy()
        expect(state.isOpenModal).toBeFalsy()
      })

      test('should return the comments when deleteComment completes', () => {
        const expectedPayload = []
        const action = {
          type: 'DELETE_COMMENT_COMPLETED',
          payload: expectedPayload
        }

        initialState
          .comments
          .push(expectedPayload)
        const state = reducer(initialState, action)
        expect(state.comments.length).toEqual(expectedPayload.length)
      })
    })

  })

  describe('Action Creators', () => {
    describe('createComment', () => {
      test('should call createComment', () => {
        const olar = 'olar'
        expect(createComment(olar)).toEqual({
          type: `${CREATE_COMMENT_START}`,
          payload: olar
        })
      })
    })

    describe('editComment', () => {
      test('should call editComment', () => {
        const olar = 'olar'
        expect(editComment(olar)).toEqual({
          type: `${EDIT_COMMENT_START}`,
          payload: olar
        })
      })
    })

    describe('deleteComment', () => {
      test('should call deleteComment', () => {
        const olar = 'olar'
        expect(deleteComment(olar)).toEqual({
          type: `${DELETE_COMMENT_START}`,
          commentId: olar
        })
      })
    })


    describe('closeModal', () => {
      test('should call closeModal', () => {
        const olar = 'olar'
        expect(closeModal(olar)).toEqual({
          type: 'COMMENT_MODAL_IS_CLOSE',
        })
      })
    })

    describe('openModal', () => {
      test('should call openModal', () => {
        const olar = 'olar'
        expect(openModal(olar)).toEqual({
          type: 'COMMENT_MODAL_IS_OPEN',
          postId: olar
        })
      })
    })

    deleteComment

    describe('getCommentsByPostSaga', () => {
      test('should build a GET_COMMENTS_COMPLETED action', () => {
        const postId = ''
        const getCommentsByPostAPI = () => [
          {
            name: 'react'
          }
        ]
        const gen = getCommentsByPostSaga({
          postId
        }, getCommentsByPostAPI)
        gen.next()

        expect(gen.next().value).toEqual({
          '@@redux-saga/IO': true,
          PUT: {
            action: {
              type: 'GET_COMMENTS_COMPLETED'
            },
            channel: null
          }
        })
        expect(gen.next().done).toEqual(true)
      })
    })

    describe('createCommentSaga', () => {
      test('should build a CREATE_COMMENT_COMPLETED action', () => {
        const payload = ''
        const createCommentAPI = () => [
          {
            name: 'react'
          }
        ]
        const gen = createCommentSaga({
          payload
        }, createCommentAPI)
        gen.next()

        expect(gen.next().value).toEqual({
          '@@redux-saga/IO': true,
          PUT: {
            action: {
              type: 'CREATE_COMMENT_COMPLETED'
            },
            channel: null
          }
        })
        expect(gen.next().done).toEqual(true)
      })
    })

    describe('editCommentSaga', () => {
      test('should build a EDIT_COMMENT_COMPLETED action', () => {
        const payload = ''
        const editCommentAPI = () => [
          {
            name: 'react'
          }
        ]
        const gen = editCommentSaga({
          payload
        }, editCommentAPI)
        gen.next()

        expect(gen.next().value).toEqual({
          '@@redux-saga/IO': true,
          PUT: {
            action: {
              type: 'EDIT_COMMENT_COMPLETED'
            },
            channel: null
          }
        })
        expect(gen.next().done).toEqual(true)
      })
    })

    describe('upVoteCommentSaga', () => {
      test('should build a UP_VOTE_COMMENT_COMPLETED action', () => {
        const payload = ''
        const voteCommentAPI = () => [
          {
            name: 'react'
          }
        ]
        const gen = upVoteCommentSaga({
          payload
        }, voteCommentAPI)
        gen.next()

        expect(gen.next().value).toEqual({
          '@@redux-saga/IO': true,
          PUT: {
            action: {
              type: 'UP_VOTE_COMMENT_COMPLETED'
            },
            channel: null
          }
        })
        expect(gen.next().done).toEqual(true)
      })
    })

    describe('downVoteCommentSaga', () => {
      test('should build a DOWN_VOTE_COMMENT_COMPLETED action', () => {
        const payload = ''
        const voteCommentAPI = () => [
          {
            name: 'react'
          }
        ]
        const gen = downVoteCommentSaga({
          payload
        }, voteCommentAPI)
        gen.next()

        expect(gen.next().value).toEqual({
          '@@redux-saga/IO': true,
          PUT: {
            action: {
              type: 'DOWN_VOTE_COMMENT_COMPLETED'
            },
            channel: null
          }
        })
        expect(gen.next().done).toEqual(true)
      })
    })
  })
})
