const express = require('express');
const router = express.Router();
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
    res.status(401)
    res.send({
      code: 401,
      msg: 'need login'
    });
  }

});
module.exports = router;