// 导入mysql模块
const mysql = require('mysql')
// 连接数据库
const db = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "root",
    database: "my_db-01",
})
// 向外共享数据库连接对象
module.express = db