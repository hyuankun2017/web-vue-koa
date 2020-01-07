var dev = require('./dev.env'),
    test = require('./test.env'),
    prod = require('./prod.env');

// 根据不同的环境配置，获取相应的配置参数，默认得到development
module.exports = {
    development: dev,
    testing: test,
    production: prod
}[process.env.NODE_ENV || 'production']