const keys = require('../../config/keys');

module.exports = (survey) => {
  return `
    <html>
      <body>
        <div style="text-align: center; border-style: solid; border-width: 5px; padding: 20px;" class="container">
          <h3>Give us Your feedback</h3>
          <p>Please answer the following question:</p>
          <p>${survey.body}</p>
          <div>
            <a href="${keys.redirectDomain}/api/surveys/${survey.id}/yes" style="margin: 0px 20px">Yes</a>
            <a href="${keys.redirectDomain}/api/${survey.id}/no" style="margin: 0px 20px">No</a>
          </div>
        </div>
      </body>
    </html>
  `;
};