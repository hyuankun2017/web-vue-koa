/**
 * API 错误信息
 */

var apiErrorNames = {};

apiErrorNames.UNKOWN_ERROR = 'unkownError';
apiErrorNames.USER_NOT_EXITS = 'userNotExits';

/**
 * API 错误名称对应的错误信息
 */

var errorMap = new Map();

errorMap.set(apiErrorNames.UNKOWN_ERROR, { code: -1, message: '未知错误' });
errorMap.set(apiErrorNames.USER_NOT_EXITS, { code: 101, message: '用户不存在' });

// 根据报错名称来获取相应的错误信息

apiErrorNames.getErrorInfo = (errorName) => {
    var errorInfo;
    if(errorName){
        errorInfo = errorMap.get(errorName);
    }
    //如果没有错误信息，则默认为'未知错误';
    if(!errorInfo){
        errorName = apiErrorNames.UNKOWN_ERROR;
        errorInfo = errorMap.get(errorName);
    }

    return errorInfo;
}

module.exports = apiErrorNames;