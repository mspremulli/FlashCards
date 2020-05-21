export const initCards = (_) => (dispatch) => {
  dispatch({
    type: 'INIT',
    payload: _
  });
};

export const counter = (num) => (dispatch) => {
  dispatch({
    type:'COUNT',
    payload: num+1
  });
};