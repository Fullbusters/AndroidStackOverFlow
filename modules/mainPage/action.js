export const CHANGE_TAG = 'CHANGE_TAG';
export const ADD_TAG = 'ADD_TAG';
export const REMOVE_TAG = 'REMOVE_TAG';
export const LOAD_QUESTIONS = 'LOAD_QUESTIONS'; 
export const CHANGE_PAGE = 'CHANGE_PAGE';
export const CHANGE_FILTER = 'CHANGE_FILTER';
export const UPDATE_QUESTIONS = 'UPDATE_QUESTIONS';


// updated when user change TextInput in Header
export const changeTag = (value) => {
  return {
    type: CHANGE_TAG,
    payload: value 
  };
};

export const addTag = (value) =>  {
  return {
    type: ADD_TAG,
    payload: value
  };
};

// when user scroll to bottom on the page update value page for update our list of questions 
export const changePage = (value) => {
  return {
    type: CHANGE_PAGE,
    payload: value
  };
};

// changed when user close modal window whit filter values
export const changeFilter = (value) => {
  return {
    type: CHANGE_FILTER,
    payload: value,
  };
};

export const removeTag = (value) => {
  return {
    type: REMOVE_TAG,
    payload: value
  };
};

// save new massive to state
export const loadQuestions = (value) => { 
  return { 
    type: LOAD_QUESTIONS,
    payload: value
  };
};

// add new elements to massive with questions
export const updateQuestions = (value) => { 
  return { 
    type: UPDATE_QUESTIONS,
    payload: value
  };
};


export const changeFilterAndSearch  = (value) => (dispatch) => {
  dispatch(changeFilter(value))
  dispatch(search())
}

export const changePageAndReload = (value) => (dispatch) => {
  dispatch(changePage(value))
  dispatch(search(false))
}

export const addTagAndSearch = (value) => (dispatch, ) => {
  dispatch(addTag(value))
  dispatch(search())
};

export const removeAndSearchTag = (value) => (dispatch) => {
  dispatch(removeTag(value))
  dispatch(search())
}


// load data from stackOverFlow 
export const search = (isUpdate = true ) => (dispatch, getState) => {
  const state = getState()
  const { tags, page, filter } = state.mainPageReducer;
  seacrhValue = generateSearchTagsValue(tags);
  return fetch('https://api.stackexchange.com/2.2/questions?page=' + page + '&pagesize=20&fromdate=1556668800&todate=1559088000&order=' + filter.order + '&sort=' + filter.sort + seacrhValue + '&site=stackoverflow')
    .then(res => res.json())
    .then(
      (result) => {
        console.log(result)
        if ( isUpdate){
          dispatch(loadQuestions(result.items))
        } else {
          dispatch(updateQuestions(result.items))
        }
      }
    );
};

// generate value for request to stack Over Flow
const generateSearchTagsValue = (query) => {
  let seacrhValue = '';
  if( query.length === 0) {
    seacrhValue = '';
  } else if( query.length === 1) {
    seacrhValue = '&tagged=' + query[0];
  } else {
    seacrhValue = '&tagged=' + query.join(';');
  }
  return seacrhValue;
}