import { CHANGE_TAG, ADD_TAG, REMOVE_TAG,LOAD_QUESTIONS, CHANGE_PAGE, CHANGE_FILTER, UPDATE_QUESTIONS } from './action'


const initialState = {
  tag: '',
  tags: [],
  questions: [],
  page: 1,
  filter: {
    order: 'desc',
    sort: 'activity',
    fromdate: '1554076800',
    todate: '1559174400',
  },
}

export const mainPageReducer = (state = initialState, action) => {
  switch(action.type) {
    case CHANGE_TAG:
      return { ...state, tag: action.payload};
    case ADD_TAG:
      return { ...state, tags: [ ...state.tags, action.payload]}
    case REMOVE_TAG:
      const array = state.tags.filter(function(e) {
        return e !== action.payload;
      })
      return { ...state, tags: array};
    case LOAD_QUESTIONS:
      return { ...state, questions: action.payload};
    case UPDATE_QUESTIONS:
      // add new data to our list of questions
      for(let key in action.payload) {
        state.questions =  [ ...state.questions, action.payload[key]]
      }
      return { ...state};
    case CHANGE_PAGE:
      return { ...state, page: state.page + 1};
    case CHANGE_FILTER:
      return { ...state, filter: action.payload};
    default: 
      return state;
  }
}

