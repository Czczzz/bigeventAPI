co // 引入 express
const express = require('express');

// 创建路由对象
const router = express.Router();


// 导入用户路由处理函数处理模块
const userHandler = require('../router_handler/user')



// 注册新用户
router.post('/reguser', userHandler.regUser)

router.post('/login', userHandler.login)

module.exports = router

