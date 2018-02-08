import reducer, {
  initialState,
  getCategoriesSaga
} from './CategoriesReducer';

describe('Categories Ducks', () => {
  describe('Categories Reducer', () => {
    describe('getCategories', () => {
      it('should return the initial state', () => {
        const state = reducer(initialState);

        expect(state).toEqual(initialState);
      });

      it('should set to loading when getCategories starts', () => {
        const action = {
          type: 'GET_CATEGORIES_START',
        };
        const state = reducer(initialState, action);

        expect(state.isLoading).toBeTruthy();
      });

      it('should set to not loading when getCurrencies fails', () => {
        const action = {
          type: 'beecambio/currency/GET_CURRENCIES_FAILED',
          payload: [],
        };
        const state = reducer(initialState, action);

        expect(state.loading).toBeFalsy();
      });

      it('should set to not loading when getCategories completes', () => {
        const action = {
          type: 'GET_CATEGORIES_COMPLETED',
          payload: [],
        };
        const state = reducer(initialState, action);

        expect(state.loading).toBeFalsy();
      });

      it('should return the currencies when getCurrencies completes', () => {
        const expectedPayload = [{ name: 'react' }];
        const action = {
          type: 'GET_CATEGORIES_COMPLETED',
          payload: expectedPayload,
        };
        const state = reducer(initialState, action);

        expect(state.categories.length).toEqual(expectedPayload.length);
        expect(state.categories[0].constructor.name).toEqual('Object');
      });
    });
  });

  describe('Action Creators', () => {
    describe('getCategoriesSaga', () => {
      it('should build a GET_CATEGORIES_START & GET_CATEGORIES_COMPLETED action', async () => {
        const payload = {};
        const getCategoriesAPI = () => [{ name: 'react' }]
        const gen = getCategoriesSaga({ payload }, getCategoriesAPI);

        expect(gen.next().value).toEqual({
          '@@redux-saga/IO': true,
          PUT: {
            action: { payload, type: 'GET_CATEGORIES_START' },
            channel: null,
          },
        });

        gen.next();

        expect(gen.next([]).value).toEqual({
          '@@redux-saga/IO': true,
          PUT: {
            action: { payload: [], type: 'GET_CATEGORIES_COMPLETED' },
            channel: null,
          },
        });

        expect(gen.next().done).toEqual(true);
      });
    });
  });
});
