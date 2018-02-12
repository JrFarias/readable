import reducer, {
  initialState,
  getPostsSaga,
  upVoteSaga,
  downVoteSaga
} from './PostReducer';

describe('Post Ducks', () => {
  describe('Post Reducer', () => {
    describe('getPost', () => {
      test('should return the initial state', () => {
        const state = reducer(initialState);

        expect(state).toEqual(initialState);
      });

      test('should set to loading when getPost starts', () => {
        const action = {
          type: 'GET_POSTS_START',
        };
        const state = reducer(initialState, action);

        expect(state.isLoading).toBeTruthy();
      });

      test('should set to not loading when getPost completes', () => {
        const action = {
          type: 'GET_POSTS_COMPLETED',
          payload: [],
        };
        const state = reducer(initialState, action);

        expect(state.loading).toBeFalsy();
      });

      test('should return the post when getPost completes', () => {
        const expectedPayload = [{ name: 'react' }];
        const action = {
          type: 'GET_POSTS_COMPLETED',
          payload: expectedPayload,
        };
        const state = reducer(initialState, action);

        expect(state.posts.length).toEqual(expectedPayload.length);
        expect(state.posts[0].constructor.name).toEqual('Object');
      });
    });
  });

  describe('Action Creators', () => {
    describe('getPostsSaga', () => {
      test('should build a GET_POSTS_START & GET_POSTS_COMPLETED action', async () => {
        const payload = {};
        const getPostAPI = () => [{ name: 'react' }]
        const gen = getPostsSaga({ payload }, getPostAPI);

        expect(gen.next().value).toEqual({
          '@@redux-saga/IO': true,
          PUT: {
            action: { payload, type: 'GET_POSTS_START' },
            channel: null,
          },
        });

        gen.next();

        expect(gen.next([]).value).toEqual({
          '@@redux-saga/IO': true,
          PUT: {
            action: { payload: [], type: 'GET_POSTS_COMPLETED' },
            channel: null,
          },
        });

        expect(gen.next().done).toEqual(true);
      });
    });

    describe('upVoteSaga', () => {
      test('should build a UP_VOTE & UP_VOTE_COMPLETED action', async () => {
        const postId = 123;
        const voteAPI = () => [{ name: 'react' }]
        const gen = upVoteSaga({ postId }, voteAPI);
        gen.next();

        expect(gen.next().value).toEqual({
          '@@redux-saga/IO': true,
          PUT: {
            action: { postId, type: 'UP_VOTE_COMPLETED' },
            channel: null,
          },
        });
      });
    });

    describe('downVoteSaga', () => {
      test('should build a DOWN_VOTE & DOWN_VOTE_COMPLETED action', async () => {
        const postId = 123;
        const voteAPI = () => [{ name: 'react' }]
        const gen = downVoteSaga({ postId }, voteAPI);
        gen.next();

        expect(gen.next().value).toEqual({
          '@@redux-saga/IO': true,
          PUT: {
            action: { postId, type: 'DOWN_VOTE_COMPLETED' },
            channel: null,
          },
        });
      });
    });


  });
});
