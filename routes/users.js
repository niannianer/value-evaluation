const express = require('express');
const router = express.Router();
const knex = require('../knexAction');

// user login
router.post('/login', (req, res, next) => {
  var param = req.body;
  if (!param.account || !param.password) {
    return res.send({
      code: -1,
      msg: 'account && password is required'
    })
  }
  let {account, password} = param;
  knex('user').where({account, password})
          .select('id', 'name')
          .then(data => {
            if (data && data.length) {
              req.session = req.session || {};
              req.session.user_id = data[0].id;
              res.send({
                code: 200,
                msg: 'ok',
                data: data[0]
              })
            }
            res.send({
              code: 1,
              msg: 'password or user err',
              data: {}
            })

          })
          .catch(err => {
            res.send({
              code: -1,
              msg: 'err',
              err
            })
          });
});
/*middleware login request*/
router.use((req, res, next) => {
  let {sesstion} = req;
  if (sesstion && sesstion.user_id) {
    next();
  } else {
    res.render('login');
  }

});

/* GET users listing. */
router.get('/getUsers', function (req, res, next) {
  knex.select('*').from('user').limit(10)
          .then(data => {
            console.log(data)
            res.render('users', {users: data})
          })
          .catch(err => {
            res.render('error', {err});

          });
});
/*save user info*/
router.post('/save', function (req, res, next) {
  var param = req.body;
  if (!param.user_name || !param.password) {
    return res.send({
      code: -1,
      msg: 'user_name && password is required'
    })
  }
  let {user_name, password} = param;
  knex('user').insert({user_name, password})
          .then((data) => {
            res.send({
              code: 200,
              data,
              msg: 'ok'
            })
          })
          .catch((err) => {
            res.send({
              code: -2,
              msg: 'catch error',
              err
            })
          })


});

module.exports = router;
