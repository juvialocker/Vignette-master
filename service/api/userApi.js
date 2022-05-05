/*
 * @Author: juvia
 * @Date: 2022-04-25 15:22:47
 * @LastEditors: juvia
 * @LastEditTime: 2022-05-05 17:59:26
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
  let { username } = req.body;
  let created_time = new Date();
  let check_sql = "SELECT * FROM juvia_user WHERE USERNAME = ?";
  conn.query(check_sql, [username], function(err, result) {
    if (result.length > 0) {
      if (result[0].username == username) {
        data = {
          code: 201, //账号已存在
          data: "fail",
        };
        res.end(JSON.stringify(data));
      }
    } else {
      let sql =
        "INSERT INTO juvia_user(id, username,password,time) VALUES(?,?,?,?)";
      let addSql = [id, req.body.username, req.body.password, created_time];
      conn.query(sql, addSql, function(err, result) {
        let data = {};
        if (err) {
          //返回接口内容
          data = {
            code: 500,
            msg: err.sqlMessage || "后台服务异常,请稍后再试",
          };
          res.end(JSON.stringify(data));
          return;
        } else {
          data = {
            code: 200,
            data: "success",
          };
          res.end(JSON.stringify(data));

          return;
        }
      });
    }
  });
});
// 登录接口
router.post("/login", (req, res) => {
  //1.获取前端传递来的用户名与密码
  let { username, password } = req.body;
  let sql = "SELECT * FROM juvia_user WHERE USERNAME = ?";
  conn.query(sql, [username], function(err, result) {
    let data = {};

    if (err) {
      //返回接口内容
      let data = {
        code: 500,
        data: "fail",
      };
      res.end(JSON.stringify(data));
      return;
    } else {
      if (result.length > 0) {
        if (result[0].username == username && result[0].password == password) {
          data = {
            code: 200,
            data: "success",
          };
        } else {
          data = {
            code: 500,
            data: "fail",
          };
        }
      } else {
        data = {
          code: 500,
          data: "fail",
        };
      }
      //返回接口内容
      res.end(JSON.stringify(data));
      return;
    }
  });
});
// 查询单词分类接口
router.post("/get_word_type", (req, res) => {
  let sql = "SELECT * FROM juvia_word_type";
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
      let data = {
        code: 200,
        data: result,
      };
      res.end(JSON.stringify(data));
      return;
    }
  });
});
// 查询情景会话接口
router.post("/conversation_content", (req, res) => {
  let { conversation_type_id } = req.body;
  let sql =
    "SELECT * FROM juvia_conversation_content WHERE conversation_type_id = ?";
  conn.query(sql, [conversation_type_id], function(err, result) {
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
      let data = {
        code: 200,
        data: result,
      };
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
      // res.end(JSON.stringify(datas));
      return;
    }
  });
});
// 发布帖子接口
router.post("/post", (req, res) => {
  let {
    id,
    article_time,
    article_title,
    article_content,
    article_user,
    article_userid,
  } = req.body;
  let sql =
    "INSERT INTO juvia_post(id, article_time,article_title,article_content,article_user,article_userid) VALUES(?,?,?,?,?,?)";
  let addSql = [
    id,
    article_time,
    article_title,
    article_content,
    article_user,
    article_userid,
  ];
  conn.query(sql, addSql, function(err, result) {
    let data = {};
    if (err) {
      //返回接口内容
      data = {
        code: 500,
        msg: err.sqlMessage || "后台服务异常,请稍后再试",
      };
      res.end(JSON.stringify(data));
      return;
    } else {
      data = {
        code: 200,
        data: "success",
      };
      res.end(JSON.stringify(data));

      return;
    }
  });
});
// 查询帖子接口
router.post("/get_post", (req, res) => {
  let sql = "SELECT * FROM juvia_post";
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
      let data = {
        code: 200,
        data: result,
      };
      res.end(JSON.stringify(data));
      return;
    }
  });
});
// 查询帖子详情接口
router.post("/get_post_detail", (req, res) => {
  let { id,article_userid } = req.body;
  let sql = "SELECT * FROM juvia_post WHERE id = ?";
  conn.query(sql, [id], function(err, result) {
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
      let data = {
        code: 200,
        data: result[0],
      };
      res.end(JSON.stringify(data));
      return;
    }
  });
});

// 删除帖子接口
router.post("/delete_post", (req, res) => {
  let review_authorID = req.body;
  let sql = "SELECT * FROM juvia_post WHERE review_authorID = ?";
  conn.query(sql, [review_authorID], function(err, result) {
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
      let data = {
        code: 200,
        data: result,
      };
      res.end(JSON.stringify(data));
      return;
    }
  });
});
// 发布评论接口
router.post("/post_review", (req, res) => {
  let {
    id,
    review_sdTime,
    review_articleID,
    review_content,
    review_masterID,
    review_authorID,
  } = req.body;
  let sql =
    "INSERT INTO juvia_post_review(id, review_sdTime,review_articleID,review_content,review_masterID,review_authorID) VALUES(?,?,?,?,?,?)";
  let addSql = [
    id,
    review_sdTime,
    review_articleID,
    review_content,
    review_masterID,
    review_authorID,
  ];
  conn.query(sql, addSql, function(err, result) {
    let data = {};
    if (err) {
      //返回接口内容
      data = {
        code: 500,
        msg: err.sqlMessage || "后台服务异常,请稍后再试",
      };
      res.end(JSON.stringify(data));
      return;
    } else {
      data = {
        code: 200,
        data: "success",
      };
      res.end(JSON.stringify(data));

      return;
    }
  });
});
// 查询评论接口
router.post("/get_post_review", (req, res) => {
  let { review_articleID } = req.body;
  let sql = "SELECT * FROM juvia_post_review WHERE review_articleID = ?";
  conn.query(sql, [review_articleID], function(err, result) {
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
      let data = {
        code: 200,
        data: result,
      };
      res.end(JSON.stringify(data));
      return;
    }
  });
});
// 删除评论接口
router.post("/delete_post_review", (req, res) => {
  let review_authorID = req.body;
  let sql = "SELECT * FROM juvia_post_review WHERE review_authorID = ?";
  conn.query(sql, [review_authorID], function(err, result) {
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
      let data = {
        code: 200,
        data: result,
      };
      res.end(JSON.stringify(data));
      return;
    }
  });
});
module.exports = router;
