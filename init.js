/**
 * Created by hekk on 2017/4/26.
 */

const knex = require('./knexAction');
const initData = require('./initData');
const {User, MainTitle, Question, Questionnaire} = initData;
[].map.call(Question, (el) => {
  el.content = JSON.stringify(el.content);
});
[].map.call(Questionnaire, (el) => {
  el.question_ids = JSON.stringify(el.question_ids);
});
knex('user').truncate()
        .then(() => {
          return knex.insert(User).into('user')
        })
        .then((data) => {
          console.log(data)
        })
        .catch(err => {
          console.log(err)
        });

knex('main_title').truncate()
        .then(() => {
          return knex.insert(MainTitle).into('main_title');
        })
        .then(() => {
        })
        .catch(err => {
          console.log(err)
        });


knex('question').truncate()
        .then(() => {
          return knex.insert(Question).into('question')
        })
        .catch(err => {
          console.log(err)
        });
knex('questionnaire').truncate()
        .then(() => {
          return knex.insert(Questionnaire).into('questionnaire')
        })
        .catch(err => {
          console.log(err)
        });






