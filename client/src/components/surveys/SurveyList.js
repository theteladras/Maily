import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';

class SurveyList extends Component {

  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    console.log(this.props.surveys);
    return this.props.surveyRecords.reverse().map(survey => {
      return (
        <div className="card #e8eaf6 indigo lighten-3" key={survey._id}>
          <div className="card-content">
            <span className="card-title">{survey.title}</span>
            <p>
              {survey.body}
            </p>
            <p className="right">
              Sent On:{new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className="card-action" style={{borderColor: '#e8aae6', display: 'flex', flex: 1, justifyContent: 'space-around'}}>
            <a style={{ fontSize: 20, fontWeight: 'bold' }}>Yes: {survey.yes}</a>
            <a style={{ fontSize: 20, fontWeight: 'bold' }}>No: {survey.no}</a>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        {this.props.surveyRecords !== undefined ? this.renderSurveys() : <div style={{ textAlign: 'center', fontSize: 26, marginTop: '25%' }}>There are no surveys sent yeth. To send a survey click the bottom right button.</div>}
      </div>
    );
  }
}

function mapStateToProps({ surveys }) {
  const { surveyRecords } = surveys;
  return { surveyRecords };
}

export default connect( mapStateToProps, { fetchSurveys } )(SurveyList);