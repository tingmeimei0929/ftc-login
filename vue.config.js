'use strict'
const webpack = require('webpack')
const path = require('path')
const {VueLoaderPlugin} = require('vue-loader')
const TimeStamp = new Date().getTime()
module.exports = {
    publicPath: "./",
    // publicPath: process.env.NODE_ENV === 'production'
    // ? '/newScreen/' // 打包后发布文件名
    // : '/' , // 开发环境相对路径
    outputDir: "webroot",
    // assetsDir: "static",
    indexPath: "login.html",
    lintOnSave: true,
    configureWebpack: {
        output: {
            // 输出重构 打包编译后 文件名称 
            filename: `javascript/[name].${TimeStamp}.js`,
            chunkFilename: `javascript/[name].${TimeStamp}.js`
        }
    },
    productionSourceMap: true,
    css: {
        requireModuleExtension: true,
        extract: true,
        sourceMap: false,
        loaderOptions: {
            sass: {
                prependData: `
                    @import "/src/assets/scss/common.scss";
                    @import "/src/assets/scss/mixin.scss";
                `
            }
        }
    },
    devServer: {
        // proxy: {
        //     '/api': {
        //         // target: 'http://10.99.10.11', //接口
        //         target: 'http://www.ftchinese.com',
        //         changeOrigin: true, //允许跨域
        //         ws: true,
        //         pathRewrite: {
        //             '^/api': ''
        //         },
        //         productionSourceMap:false //打包时不会生产.map文件,加快打包速度

        //     }
        // }
        proxy: 'http://www.ftchinese.com',
        port: 8085
    },
    // 第三方插件配置
    pluginOptions: {
        
    },
    chainWebpack: config => {
        const oneOfsMap = config.module.rule('scss').oneOfs.store;
        oneOfsMap.forEach(item => {
            item
                .use('sass-resources-loader')
                .loader('sass-resources-loader')
                .options({
                    // 全局变量资源路径
                    resources: './src/assets/scss/mixin.scss'
                })
                .end()
        })
    }
}