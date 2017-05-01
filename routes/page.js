const express = require('express');
const router = express.Router();
const path = require('path');
const Promise = require('bluebird');
const knex = require('../knexAction');
const {version, checkSign} = require('../config');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.redirect('/login');
});
// login page
router.get('/login', (req, res, next) => {
  res.render('login', {version});
});

/*middleware login request*/
router.use((req, res, next) => {
  let sesstion = req.session;
  if (sesstion && sesstion.user) {
    next();
  } else {
    // 记住当前链接 ，登录后重定向
    let originalUrl = req.originalUrl;
    req.session = req.session || {};
    req.session.redirectUrl = originalUrl;
    res.redirect('/login');
  }

});

router.get('/questionnaire/:account/:sign', (req, res, next) => {

  let {account, sign} = req.params;
  /*sign is error*/
  if (!checkSign(account, sign)) {
    return res.send('sgin is error');

  }
  let result = {};
  let p1 = knex('user')
          .select()
          .where({account})
          .then(data => {
            if (data.length === 0) {
              let err = new Error('user Not Found');
              throw err;
            } else {
              result.user = data[0];
            }
          });

  let p2 = knex('questionnaire')
          .select()
          .where({'id': 1})
          .then((data) => {
            if (data.length === 0) {
              let err = new Error('no  questionnaire');
              throw err;
              return false;
            }
            data.map((el) => {
              el.question_ids = JSON.parse(el.question_ids);
            });
            let {question_ids} = data[0];
            result.questionnaire = data[0];
            return knex('question')
                    .select()
                    .whereIn('id', question_ids);
          })
          .then(data => {
            data.map((el) => {
              el.content = JSON.parse(el.content);
            });
            result.question_list = data;
          });
  Promise.all([p1, p2])
          .then(() => {
            res.render('questionnaire', {result});
          })
          .catch(err => {
            res.render('error', {msg: err.message||'not found'});
          });

})
module.exports = router;
