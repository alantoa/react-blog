const db = require("../index");

let skillsSchema = db.Schema({
  type:String,
  level:Number,
  background:String,
  color:Object,
  sort:Number,
  status:Number,
  createTime: {
    type: Date,
    default: Date.now
  },
});

module.exports = db.model("skills", skillsSchema);
