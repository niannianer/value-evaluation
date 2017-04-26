const express = require('express');
const router = express.Router();

const knex = require('../knexAction');

/* GET users listing. */
router.get('/', function (req, res, next) {


  knex.select('*').from('user').limit(10)
          .then(data => {
            console.log(data)
            res.render('users', {users: data})

          }).catch(err => {
    res.render('error');

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
  console.log(param);
  let {user_name, password} = param;
  knex('user').insert({
    user_name,
    password
  }).then((data) => {
    res.send({
      code: 200,
      data,
      msg: 'ok'
    })
  }).catch((err) => {
    console.log(err);
    res.send({
      code: -2,
      msg: 'catch error'
    })
  })


});

module.exports = router;
