/*
 * @Author: juvia
 * @Date: 2022-04-25 15:20:03
 * @LastEditors: juvia
 * @LastEditTime: 2022-04-25 15:26:13
 * @FilePath: \Vignette-master\service\index.js
 * @Description: 
 * 
 * Copyright (c) 2022 by juvia, All Rights Reserved. 
 */
const userApi = require('./api/userApi');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();


// 采用设置所有均可访问的方法解决跨域问题
app.all('*', function (req, res, next) {
  // 设置允许跨域的域名，*代表允许任意域名跨域
  res.header('Access-Control-Allow-Origin', '*');
  // 允许的header类型
  res.header('Access-Control-Allow-Headers', 'content-type');
  // 跨域允许的请求方式
  res.header('Access-Control-Allow-Methods', 'DELETE,PUT,POST,GET,OPTIONS');
  if (req.method.toLowerCase() === 'options') {
      res.sendStatus(200);
  } else {
    next();
  }
});
app.use(bodyParser.json()); // 以json格式返回出去
app.use(bodyParser.urlencoded({ extended: true }));

// 后端api路由
app.use('/api', userApi);

// 监听端口
app.listen(3000);
console.log(`success listen at port:3000......`);
