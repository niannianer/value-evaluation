const express = require('express');
const router = express.Router();
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
router.post('/evaluation',(req, res, next)=>{
  let param = req.body;

});
module.exports = router;