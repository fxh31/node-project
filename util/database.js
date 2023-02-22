const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', '159638', { // 数据库的库名，用户名，密码以及其他配置
  dialect: 'mysql', // 数据库语言
  host: 'localhost', // 连接服务器
});

module.exports = sequelize;