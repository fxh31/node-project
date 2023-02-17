const mysql = require('mysql2');

// 创建一个连接池（每当我们运行一个查询语句时能随时访问它，然后从管理的多个连接池中获取一个新连接。这样就可以同时运行多个查询，因为每个查询都需要自己连接，并且一次查询完成后连接会交还到连接池中用于新的查询；最后在应用程序关闭时完成连接池） 
const pool = mysql.createPool({
  host: 'localhost', // 连接的数据库服务器的IP地址
  user: 'root', // 数据库用户
  database: 'node-complete', // 连接的具体数据库
  password: '159638', // 安装时填写的密码
});

module.exports = pool.promise();