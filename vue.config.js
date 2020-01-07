/**
 * config.resolve.alias: 自定义引用路径 config.resolve.alias.set('@', resolve('src'))
 * publicPath: 与以前旧版的output.publicPath使用规格一样，但是在新版有在其他地方用到
 * assetsDir: 放置打包生成的的静态文件
 * UglifyJsPlugin: 去除console.log
*/

const path = require('path');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin"); // 引入插件

module.exports = {
    publicPath: './',
    assetsDir: 'static',
    chainWebpack: config => {
        config.entry('polyfill').add('@babel/polyfill');
        config.resolve.alias
            .set('@', resolve('src'))
            .set('@V', resolve('src/views'))
            .set('@A', resolve('src/assets'))
            .set('@Com', resolve('src/common'))
    },
    configureWebpack: {
        optimization: {
            minimizer: [
                new UglifyJsPlugin({
                    uglifyOptions: {
                        compress: {
                            warnings: false,
                            drop_console: true, //console
                            drop_debugger: false,
                            pure_funcs: ["console.log"] //移除console
                        }
                    }
                })
            ]
        }
    }
}

function resolve(dir){
    return path.join(__dirname, dir)
}