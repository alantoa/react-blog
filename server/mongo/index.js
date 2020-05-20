
const mongoose = require("mongoose");
const conf = require('./config')
// Mongoose 做异步操作时，为了向后兼容，Mongoose 4 默认使用mpromise 作为返回值。mpromise已被废弃，推荐使用 ES6风格的 promises库或者ES6原生的Promise库
// ES6原生的Promise库
const DB_URL = `mongodb://${conf.mongodb.username}:${conf.mongodb.pwd}@${conf.mongodb.address}/${conf.mongodb.db}`; // 账号登陆
mongoose.Promise = global.Promise;
mongoose.connect(DB_URL,  err => {
    if (err) {
        console.log("数据库连接失败！")
    }else{
        console.log("数据库连接成功！")
    }
})

module.exports = mongoose


