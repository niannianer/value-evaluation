const express = require('express');
const router = express.Router();
/*middleware login request*/
router.use((req, res, next) => {
  let sesstion = req.session;
  if (sesstion && sesstion.user) {
    next();
  } else {
    res.render('login');
  }

});
module.exports = router;