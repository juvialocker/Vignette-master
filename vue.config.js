/*
 * @Author: juvia
 * @Date: 2022-04-07 10:47:04
 * @LastEditors: juvia
 * @LastEditTime: 2022-04-08 17:18:10
 * @FilePath: \Vignette-master\vue.config.js
 * @Description: 
 * 
 * Copyright (c) 2022 by juvia, All Rights Reserved. 
 */
module.exports = {
  devServer: {
    disableHostCheck: false,
  },
  assetsDir: 'static/',
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true, //允许链式调用的换行
      },
      // postcss: {
      //   plugins: [
      //     require("postcss-pxtorem")({
      //       // 把px单位换算成rem单位
      //       rootValue: 120, // 换算的基数(设计图375的根字体为37.5)
      //       // selectorBlackList: ['weui', 'mu'], // 忽略转换正则匹配项
      //       propList: ["*"],
      //     }),
      //   ],
      // },
    },
  },
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === "production") {
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
    }
  },
};
