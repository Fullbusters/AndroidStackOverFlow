import { combineReducers } from 'redux';
import { mainPageReducer } from './mainPage/reducer';
import { questionPageReducer } from './questionPage/reducer';


export const rootReducer = combineReducers({
  mainPageReducer,
  questionPageReducer
});