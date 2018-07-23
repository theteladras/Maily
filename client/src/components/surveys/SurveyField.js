import React, { Component } from 'react';

class SurveyField extends Component {
  render() {
    const { input } = this.props;
    return (
      <div>
        <input {...input}/>
      </div>
    );
  }
}

export default SurveyField;