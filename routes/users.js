const express = require('express');
const router = express.Router();
const knex = require('../knexAction');

// user login
router.post('/login', (req, res, next) => {
  let param = req.body;
  if (!param.account || !param.password) {
    return res.send({
      code: -1,
      msg: 'account && password is required'
    })
  }
  let {account, password} = param;
  console.log(param);
  knex('user').where({account, password})
          .select()
          .then(data => {
            if (data && data.length) {
              req.session = req.session || {};
              req.session.user = data[0];
              let {redirectUrl} = req.session;
              return res.send({
                code: 200,
                msg: 'ok',
                data: data[0],
                redirectUrl
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

module.exports = router;
