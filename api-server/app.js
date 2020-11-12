const // 引入 express
const express = require('express');

// 创建服务器对象
const app = express();

// 配置跨域
// 导入cors中间件
const cors = require('cors')
// 将cors注册为全局中间件
app.use(cors())

// 配置解析表单数据的中间件
app.use(express.urlencoded({ extended: false }))

// 导入并注册用户路由模板
const userRouter = require('./router/user')
app.use('/api', userRouter)

// TODO:

// 监听端口
app.listen(3007, () => console.log('Server running on http://127.0.0.1:3007'));
