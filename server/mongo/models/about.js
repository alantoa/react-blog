const db = require("../index");

let aboutSchema = db.Schema({
  name: String,
  userId:String,
  avatar: {
    type: String,
    default: 'http://qdcz1fgum.bkt.clouddn.com/logo.svg',
  },
  birthday: {
    type: Date,
    default: Date.now,
  },
  sign: {
    type: String,
    default: "IN GOD WE TRUST",
  },
  url: String,
  hobby: String,
  dream: String,
  base: String,
  belief: String,
  age: String,
  major: String,
  intro:String,
  status: String,
  createTime: {
    type: Date,
    default: Date.now,
  },
});

module.exports = db.model("about", aboutSchema);
