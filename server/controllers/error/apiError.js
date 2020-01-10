var apiErrorNames = require('./apiErrorNames');

/**
 * 自定义api 异常
 */

class ApiError extends Error{
    // 构造方法
    constructor(errorName){
        super();
        var errorInfo = apiErrorNames.getErrorInfo(errorName);

        this.name = errorName;
        this.code = errorI.code;
        this.message = errorInfo.message;
    }
}

module.exports = ApiError;