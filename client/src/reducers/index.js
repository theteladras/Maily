import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import surveyReducer from './surveyReducer';

export default combineReducers({
  auth: authReducer,
  survey: surveyReducer,
  form: reduxForm
});