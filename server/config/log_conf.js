/**
 * log4js 配置文件
 * 
 * 日志等级由低到高
 * ALL TRACE DEBUG INFO WARN ERROR FATAL OFF. 
 * 
 * 关于log4js的appenders的配置说明
 * https://github.com/nomiddlename/log4js-node/wiki/Appenders
 */

var path = require('path');

//日志根目录
var baseLogPath = path.resolve(__dirname, '../logs')

//错误日志目录
var errorPath = "/error";
//错误日志文件名
var errorFileName = "error";
//错误日志输出完整路径
var errorLogPath = baseLogPath + errorPath + "/" + errorFileName;
// var errorLogPath = path.resolve(__dirname, "../logs/error/error");

//请求日志目录
var requestPath = "/request";
//请求日志文件名
var requestFileName = "request";
//请求日志输出完整路径
var requestLogPath = baseLogPath + requestPath + "/" + requestFileName;

//响应日志目录
var responsePath = "/response";
//响应日志文件名
var responseFileName = "response";
//响应日志输出完整路径
var responseLogPath = baseLogPath + responsePath + "/" + responseFileName;

module.exports = {
    "appenders": {
        console: {
            type: 'console'
        },
        errorLogger: { //error log
            type: 'dateFile',  // 日志类型
            filename: errorLogPath,
            pattern: "-yyyy-MM-dd-hh.log", 
            alwaysIncludePattern: true,
            encoding: 'utf-8',
            path: errorPath,                   //自定义属性，日志的根目录
            maxLogSize: 5000,
            layout: {
                type: 'basic'
            }
        },
        http: {
            type: 'dateFile', 
            filename: requestLogPath,            //日志输出位置
            pattern: "-yyyy-MM-dd-hh.log",        //后缀，每小时创建一个新的日志文件
            alwaysIncludePattern: true,           //是否总是有后缀名
            encoding: 'utf-8',
            path: requestPath,                   //自定义属性，日志的根目录
            maxLogSize: 5000,
            layout: {
                type: 'basic'
            }
        },
        resLogger: { // response logs
            type: 'dateFile', 
            filename: responseLogPath,            //日志输出位置
            pattern: "-yyyy-MM-dd-hh.log",        //后缀，每小时创建一个新的日志文件
            alwaysIncludePattern: true,           //是否总是有后缀名
            encoding: 'utf-8',
            path: responsePath,                   //自定义属性，日志的根目录
            maxLogSize: 5000,
            layout: {
                type: 'basic'
            }
        }
    },
    categories: {// 供外部调用的名称和对应设置定义
        default: {
            appenders: ['console'], level: 'all'
        },
        resLogger: {
            appenders: ['resLogger'], level: 'info'
        },
        errorLogger: {
            appenders: ['errorLogger'], level: 'error'
        },
        http: {
            appenders: ['http'], level: 'info'
        }
    },
    baseLogPath                //logs根目录
    // replaceConsole: true
}