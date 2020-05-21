const db = require('../index');

let aboutSchema = db.Schema({
  name: {
    type: String,
    default: ''
  },
  id: {
    type: String,
    default: ''
  },
  avatar: {
    type: Object,
    default: Object
  },
  birthday: {
    type: Date,
    default: Date.now
  },
  sign: {
    type: String,
    default: ''
  },
  url: {
    type: String,
    default: ''
  },
  hobby: {
    type: String,
    default: ''
  },
  dream: {
    type: String,
    default: ''
  },
  base: {
    type: String,
    default: ''
  },
  belief: {
    type: String,
    default: ''
  },
  age: {
    type: Number,
    default: 0
  },
  major: Array,
  intro: {
    type: String,
    default: ''
  },
  status: {
    type: String,
    default: true
  },
})

module.exports = db.model('about', aboutSchema);