import { LOAD_QUESTION } from './action'

const initialState = {
  question: {},
}

export const questionPageReducer = (state = initialState,  action) => {
  switch(action.type) {
    case LOAD_QUESTION: 
      return  { ...state, question: action.payload }
    default:
      return state 
  }
}