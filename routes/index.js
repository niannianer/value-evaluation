const page = require('./page');
const user = require('./users');
const question = require('./question');
const questionnaire = require('./questionnaire');
const answer = require('./answer');


const init = (app) => {

  app.use('/api/user', user);
  app.use('/api/question', question);
  app.use('/api/questionnaire', questionnaire);
  app.use('/api/answer', answer);
  app.use('/', page);

};
module.exports = {
  init
};
