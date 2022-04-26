/*
 * @Author: juvia
 * @Date: 2022-04-25 15:20:11
 * @LastEditors: juvia
 * @LastEditTime: 2022-04-25 15:25:59
 * @FilePath: \Vignette-master\service\log.js
 * @Description: 
 * 
 * Copyright (c) 2022 by juvia, All Rights Reserved. 
 */
var log4js = require('log4js');//引入刚刚下载的log4js日志模板

log4js.configure({
  appenders: {
    console: { type: 'console' },
    file: {
      type: 'file',
      filename: 'all.log',
      layout: {
        type: 'pattern',
        pattern: '%d{yyyyMMdd hh:mm:ss} {%p} %m'
      }
    }
  },
  categories: {
    default: {
      appenders: ['console', 'file'],
      level: 'debug'
    }
  }
})


module.exports = log4js.getLogger();//暴露log4js模板，其他功能点才能应用
