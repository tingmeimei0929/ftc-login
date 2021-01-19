'use strict'
const webpack = require('webpack')
const path = require('path')
const {VueLoaderPlugin} = require('vue-loader')
module.exports = {
    publicPath: "./",
    // publicPath: process.env.NODE_ENV === 'production'
    // ? '/newScreen/' // 打包后发布文件名
    // : '/' , // 开发环境相对路径
    outputDir: "dist",
    assetsDir: "assets",
    indexPath: "./public/index.html",
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
        open: true,
        host: 'localhost',
        port: 8082,
        https: false,
        proxy: {
            '/api': {
                target: 'http://10.99.10.11', //接口
                changeOrigin: true, //允许跨域
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
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