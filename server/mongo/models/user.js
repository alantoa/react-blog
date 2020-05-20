const db = require('../index');

let userSchema = db.Schema({
    username: String,
    pwd: String,
    name: String,
    avatar: String,
    roles: Array,
    createTime: { type: Date, default: Date.now},
    loginTime: Date
})

module.exports = db.model('user', userSchema);
