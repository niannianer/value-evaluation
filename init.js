/**
 * Created by hekk on 2017/4/26.
 */
const Promise = require('bluebird');
const knex = require('./knexAction');
const initData = require('./initData');
const {User, MainTitle, SubTitle, Question, Questionnaire} = initData;
[].map.call(Question, (el) => {
  el.content = JSON.stringify(el.content);
});
[].map.call(Questionnaire, (el) => {
  el.question_ids = JSON.stringify(el.question_ids);
});
const p1 = knex('user').truncate()
        .then(() => {
          return knex.insert(User).into('user')
        })


const p2 = knex('main_title').truncate()
        .then(() => {
          return knex.insert(MainTitle).into('main_title');
        })


const p3 = knex('sub_title').truncate()
        .then(() => {
          return knex.insert(SubTitle).into('sub_title');
        })


const p4 = knex('question').truncate()
        .then(() => {
          return knex.insert(Question).into('question')
        })

const p5 = knex('questionnaire').truncate()
        .then(() => {
          return knex.insert(Questionnaire).into('questionnaire')
        })


Promise.all([p1, p2, p3, p4, p5])
        .then(() => {
          console.log('ok');
          process.exit(0);
          return 0;
        })
        .catch(err => {
          console.log('--->error', err);
          process.exit(0)
        })




