/*
 * @Author: juvia
 * @Date: 2022-04-25 15:20:19
 * @LastEditors: juvia
 * @LastEditTime: 2022-04-26 15:42:23
 * @FilePath: \Vignette-master\service\mysql.js
 * @Description: 
 * 
 * Copyright (c) 2022 by juvia, All Rights Reserved. 
 */
var logger=require('./log.js'); //引入日志文件模块
var mysql = require('mysql');
var connection = {
  host: "127.0.0.1",
  user: "root",
  password: '641023',
  port: "3306",
  database: "juvia",
}

// 用于保存数据连接实例
var db = null;
var pingInterval;
// 如果数据连接出错，则重新连接
function handleError(err) {
  connect();
}

// 建立数据库连接
function connect() {
  if (db !== null) {
    db.destroy();
    db = null;
  }

  db = mysql.createConnection(connection);
  db.connect(function (err) {
    if (err) {
      logger.info("连接数据库的错误"+err);
      setTimeout(connect, 2000);
    }
  });
  db.on("error", handleError);

  // 每半个小时ping一次数据库，保持数据库连接状态
  clearInterval(pingInterval);
  pingInterval = setInterval(() => {
    db.ping((err) => {
      if (err) {
        logger.info("数据库发生的错误"+err);
        console.log('ping error: ' + JSON.stringify(err));
      }
    });
  }, 1800000);
}

module.exports = db;
