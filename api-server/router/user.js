co // 引入 express
const express = require('express');

// 创建路由对象
const router = express.Router();


// 导入用户路由处理函数处理模块
const userHandler = require('../router_handler/user')

// 导入验证表单数据的中间件
const userHandler = require('../router_handler/user')

// 导入需要验证的规则对象
const { reg_login_schema } = require('../schame/user')

// 登录
router.post('/login', expressJoi(reg_login_schema), userHandler.login)

module.express = router










// 注册新用户
router.post('/reguser', userHandler.regUser)

router.post('/login', userHandler.login)

module.exports = router

