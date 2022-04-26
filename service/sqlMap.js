/*
 * @Author: juvia
 * @Date: 2022-04-25 15:20:59
 * @LastEditors: juvia
 * @LastEditTime: 2022-04-25 15:27:33
 * @FilePath: \Vignette-master\service\sqlMap.js
 * @Description: 
 * 
 * Copyright (c) 2022 by juvia, All Rights Reserved. 
 */
const sqlMap = {
    // 用户
    user: {
      add: 'insert into user(name,age) values(?,?)'
    }
  }
  
  module.exports = sqlMap;
  