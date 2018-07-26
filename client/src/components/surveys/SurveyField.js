import React from 'react';

export default ({ input, label, meta: { error, touched }, meta }) => {
  return (
    <div className="input-container">
      <label className="survey-label">{label}</label>
      <input {...input} className="input"/>
      <div className="err">{touched && error}</div>
    </div>
  );
};