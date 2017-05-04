const express = require('express');
const router = express.Router();
const knex = require('../knexAction');
/*middleware login request*/
router.use((req, res, next) => {
  let sesstion = req.session;
  if (sesstion && sesstion.user) {
    next();
  } else {
    res.status(401)
    res.send({
      code: 401,
      msg: 'need login'
    });
  }

});
// evaluation
router.post('/evaluation', (req, res, next) => {
  let param = req.body;
  let {answer_to, result, questionnaire_id, type} = param;
  let answer_by = req.session.user.id;
  if (!answer_to || !result || !questionnaire_id || !type) {
    res.status(400);
    res.send({
      code: 400,
      msg: 'bad request'
    });
  }
  let insertAnswer = {answer_to, answer_by, questionnaire_id, type};
  insertAnswer.result = JSON.stringify(result);
  knex('answer')
          .select()
          .where({answer_to, answer_by})
          .then(data => {
            if (data && data.length) {
              insertAnswer.update_at = knex.fn.now();
              return knex('answer')
                      .where({answer_to, answer_by})
                      .update(insertAnswer)
            } else {
              return knex('answer')
                      .insert(insertAnswer);
            }

          })
          .then((data) => {
            res.send({
              code: 200,
              msg: 'ok',
              data
            });
          })
          .catch(err => {
            res.status(500);
            res.send({
              code: 500,
              msg: 'error',
              err
            })
          });


});
// get answer by user id
router.get('/get/:id', (req, res, next) => {
  let {id} = req.params;
  let sesstion = req.session;
  let {user} = sesstion;
//  permission deny
  if (user.type != 2) {
    return res.send({
      code: 403,
      msg: 'permission deny'
    });
  }
  return knex.select('answer.*', 'user.name')
          .from('answer')
          .innerJoin('user', 'answer.answer_by', 'user.id')
          .where('answer.answer_to', id)
          .then(data => {
            data.map(el => {
              el.result = JSON.parse(el.result);
            });
            res.send({
              code: 200,
              msg: 'ok',
              data
            })
          })
          .catch(err => {
            return res.send({
              code: -1,
              msg: err.message || 'sql error'
            });
          })
});
module.exports = router;