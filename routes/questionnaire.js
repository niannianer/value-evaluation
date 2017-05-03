const express = require('express');
const router = express.Router();
const knex = require('../knexAction');
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
    res.status(401);
    res.send({
      code: 401,
      msg: 'need login'
    });
  }

});
// get answer by answer_to
router.get('/:answer_to', (req, res, next) => {
  let {answer_to} = req.params;
  let answer_by = req.session.user.id;
  if (isNaN(answer_to)) {
    res.status(400);
    return res.send({
      code: 400,
      msg: 'bad request'
    });
  }
  knex('answer')
          .select('answer_by', 'answer_to', 'type', 'result')
          .where({answer_by, answer_to})
          .then(data => {
            let result = data[0] || {};
            result.result = JSON.parse(result.result)
            res.send({
              code: 200,
              msg: 'ok',
              data: result
            })
          })
          .catch(err => {
            res.status(500);
            res.send({
              code: 500,
              msg: err.message||'error'

            })
          });

});
module.exports = router;