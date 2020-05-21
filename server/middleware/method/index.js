const get_Info_func = require('./get_info')
const db_func = require('./db')
const file_func = require('./file')
module.exports = () => {
  const func = Object.assign({}, get_Info_func, db_func, file_func)
  return async (ctx, next) => {
    for (let v in func) {
      if (func.hasOwnProperty(v)) ctx[v] = func[v];
    }
    await next()
  }
}