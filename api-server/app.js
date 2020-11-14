const // 引入 express
const express = require('express');

// 创建服务器对象
const app = express();

// 配置跨域
// 导入cors中间件
const cors = require('cors')
// 将cors注册为全局中间件
app.use(cors())

const joi = require('@hapi/joi')

app.use(function (err, req, res, next) {
    // 数据验证失败
    if (err instanceof joi.ValidationError) return res.cc(err)
    // 未知错误
    res.cc(err)
})

// 响应数据的中间件
app.use(function (req, res, next) {
    // status = 0 为成功； status = 1 为失败； 默认将 status 的值设置为 1，方便处理失败的情况
    res.cc = function (err, status = 1) {
        res.send({
            // 状态
            status,
            // 状态描述，判断 err 是 错误对象 还是 字符串
            message: err instanceof Error ? err.message : err,
        })
    }
    next()
})

// 配置解析表单数据的中间件
app.use(express.urlencoded({ extended: false }))

// 导入并注册用户路由模板
const userRouter = require('./router/user');
app.use('/api', userRouter)
// 导入并使用用户信息的路由模板
const userinfoRouter = require('./router/userinfo');
app.use('/my', userinfoRouter)



// TODO:

// 监听端口
app.listen(3007, () => console.log('Server running on http://127.0.0.1:3007'));
