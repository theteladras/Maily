import axios from 'axios';
import { FETCH_USER, EMAIL_HANDLER, FETCH_SURVEYS } from './types';


export const fetchUser = () => async (dispatch) => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const tokenHandler = (token) => async dispatch => {
  const res = await axios.post('/api/stripe', token);
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const emailListHandler = (email) => {
  return ({
    type: EMAIL_HANDLER,
    payload: email
  });
};

export const submitSurvey = (values, history) => async dispatch => {
  const res = await axios.post('/api/surveys', values);
  history.push('/surveys');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchSurveys = () => async dispatch => {
  const res = await axios.get('/api/surveys');

  dispatch({ 
    type: FETCH_SURVEYS,
    payload: res.data
   });
};