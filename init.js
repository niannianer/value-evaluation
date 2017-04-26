/**
 * Created by hekk on 2017/4/26.
 */

const knex = require('./knexAction');
const initData = require('./initData');
const {User, MainTitle, SubTitle} = initData;
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


knex('sub_title').truncate()
        .then(() => {
          return knex.insert(SubTitle).into('sub_title')
        })
        .catch(err => {
          console.log(err)
        })





