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
        proxy: {
            '/api': {
                target: 'https://9090', //接口
                changeOrigin: true,
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