export const MODAL_IS_OPEN = 'MODAL_IS_OPEN'
export const MODAL_IS_CLOSE = 'MODAL_IS_CLOSE'

export const openModal = (post) => {
  return {
  type: MODAL_IS_OPEN,
  payload: post
}}

export const closeModal = () => {
  return {
  type: MODAL_IS_CLOSE
}}

export const initialState = {
  isOpenModal: false,
  post: {}
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case MODAL_IS_OPEN :
      return {
        ...state,
        isOpenModal: true,
        post: action.payload
      };
    case MODAL_IS_CLOSE :
      return {
        ...state,
        isOpenModal: false,
      };
    default :
      return state
  }
}
