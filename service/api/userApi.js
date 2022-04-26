/*
 * @Author: juvia
 * @Date: 2022-04-25 15:22:47
 * @LastEditors: juvia
 * @LastEditTime: 2022-04-26 16:00:44
 * @FilePath: \Vignette-master\service\api\userApi.js
 * @Description:
 *
 * Copyright (c) 2022 by juvia, All Rights Reserved.
 */
var conn = require("../mysql");
var express = require("express");
var router = express.Router();
var mysql = require("mysql");
var $sql = require("../sqlMap").default;
const { json } = require("body-parser");

// 注册接口
router.post("/addUser", (req, res) => {
  let id = new Date().getTime().toString();
  let created_time = new Date();
  let sql =
    "INSERT INTO interviewee(id, username,password,time) VALUES(?,?,?,?)";
  let addSql = [id, req.body.username, req.body.password, created_time];
  conn.query(sql, addSql, function(err, result) {
    if (err) {
      //返回接口内容
      let datas = {
        code: 500,
        msg: err.sqlMessage || "后台服务异常,请稍后再试",
      };
      res.end(JSON.stringify(datas));
      return;
    } else {
      //返回接口内容
      res.end(JSON.stringify(data));
      return;
    }
  });
});
// 登录接口
router.get("/login", (req, res) => {
  //1.获取前端传递来的用户名与密码
  let { username } = req.body;
  let sql = "SELECT * FROM juvia_user WHERE USERNAME = ?";
  conn.query(sql, [username], function(err, result) {
    if (err) {
      //返回接口内容
      let datas = {
        code: 500,
        msg: err.sqlMessage || "后台服务异常,请稍后再试",
      };
      res.end(JSON.stringify(datas));
      return;
    } else {
      //返回接口内容
      res.end(JSON.stringify(data));
      return;
    }
  });
});
// 查询单词分类接口
router.get("/get_word_type", (req, res) => {
  let sql = 'SELECT * FROM juvia_word';
  conn.query(sql, function(err, result) {
    if (err) {
      //返回接口内容
      let datas = {
        code: 500,
        msg: err.sqlMessage || "后台服务异常,请稍后再试",
      };
      res.end(JSON.stringify(datas));
      return;
    } else {
      //返回接口内容
      console.log(data);
      res.end(JSON.stringify(data));
      return;
    }
  });
});
// 查询具体单词类别中的单词
router.get("/get_word", (req, res) => {
  let sql = "SELECT * FROM juvia_user WHERE type = ?";
  conn.query(sql, [username], function(err, result) {
    if (err) {
      //返回接口内容
      let datas = {
        code: 500,
        msg: err.sqlMessage || "后台服务异常,请稍后再试",
      };
      res.end(JSON.stringify(datas));
      return;
    } else {
      //返回接口内容
      res.end(JSON.stringify(data));
      return;
    }
  });
});
module.exports = router;
