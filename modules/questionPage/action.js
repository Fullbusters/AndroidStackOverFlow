export const LOAD_QUESTION = 'LOAD_QUESTION';


export const loadQuestion = (value) => {
  return {
    type: LOAD_QUESTION,
    payload: value
  };
};

// load 1 question from server
export const getQuestions = (query) => (dispatch) => {
  return fetch('https://api.stackexchange.com/2.2/questions/' + query + '?order=desc&sort=activity&site=stackoverflow&filter=!9Z(-wwYGT')
    .then(res => res.json())
    .then(
      (result) => {
        dispatch(loadQuestion(result.items))
      }
    );
};