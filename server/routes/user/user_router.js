var router = require('koa-router')();

var userRouter = require('../../controllers/user/user_controller');

router.get('/center/getUserInfo', userRouter.getUserInfo);

module.exports = router;