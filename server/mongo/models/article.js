const db = require('../index');

let articleSchema = db.Schema({
  id:String,
  type: String,
  title: String,
  cover:String,
  desc: String,
  html: String,
  markdown: String,
  level: Number,
  github: String,
  source: Number,
  isVisible: Boolean,
  toc:String,
  tag:Array,
  releaseTime: {
    type: Date,
    default: Date.now
  },
  createTime: {
    type: Date,
    default: Date.now
  }
})

module.exports = db.model('article', articleSchema);