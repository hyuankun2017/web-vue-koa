var ApiErrorNames = require('../error/apiErrorNames');
var ApiError = require('../error/apiError');

// 获取用户信息
exports.getUserInfo = async (ctx, next) => {
    // if(ctx.query.id != 1){
    //     throw new ApiError(ApiErrorNames.USER_NOT_EXITS);
    // }
    ctx.body = {
        age: 28,
        username: 'hello koa'
    }
}