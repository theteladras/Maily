import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { withRouter } from 'react-router-dom';
import formFields from './formFields';
import * as actions from '../../actions';


const SurveyReview = ({ onCancel, formValues, submitSurvey, history }) => {

  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label className="survey-label confirm-label">{label}:</label>
        <div className="confirm-values">{formValues[name]}</div>
      </div>
    );
  });

  return (
    <div className="container">
      <h5 className="review-title">Please confirm enteries!</h5>
      {reviewFields}
      <button className="red darken-6 btn-large btn-flat white-text" onClick={onCancel}>Back</button>
      <button 
        className="green btn-large btn-flat right"
        onClick={() => submitSurvey(formValues, history)}
      >
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyReview));