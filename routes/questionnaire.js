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
module.exports = router;