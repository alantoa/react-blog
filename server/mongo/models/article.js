const db = require('../index');

let articleSchema = db.Schema({
  type: Array,
  title: String,
  desc: String,
  html: String,
  markdown: String,
  level: Number,
  github: String,
  source: Number,
  isVisible: Boolean,
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