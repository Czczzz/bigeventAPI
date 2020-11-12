// 导入数据库操作模块
const db = require('../db/index')

// 导入bcryptjs 加密模板
const bcrypt = require('bcryptjs')

// 定义sql语句:
const sql = `select * from ev_users where username=?`

// 执行sql语句并根据结果判断用户名是否被占用
db.query(sql, [userinfo.username], function (err, reluts) {
    // 执行sql语句失败
    if (err) {
        return res.send({ status: 1, message: err.message })
    }
    // 用户名占用
    if (err) {
        return res.send({ status: 1, message: "用户名占用,请更换" })
    }
    // 否则,用户名可用
    // 对用户的密码,进行加密,返回值是加密之后的密码字符串
    userinfo.password = bcrypt.hashSync(userinfo.password, 10)

    // 定义插入用户的sql语句
    const sql = 'insert into ev_users set?'
    db.query(sql, { username: userinfo.username, password: userinfo.password }, function (err, results) {
        // 执行 SQL 语句失败
        if (err) return res.send({ status: 1, message: err.message })
        // SQL 语句执行成功，但影响行数不为 1
        if (results.affectedRows !== 1) {
            return res.send({ status: 1, message: '注册用户失败，请稍后再试！' })
        }
        // 注册成功
        res.send({ status: 0, message: '注册成功！' })
    })
})

// 注册用户的处理函数
exports.regUser = (req, res) => {
    res.send('reguser ok')
}
// 登录的处理函数
exports.login = (req, res) => {
    res.send('login ok')
}