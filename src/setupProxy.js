if (process.env.NODE_ENV === 'development') {
  const { createProxyMiddleware } = require('http-proxy-middleware')

  module.exports = function (app) {
    app.use(
      createProxyMiddleware('/api/', {
        target: 'http://localhost:3001/',
        pathRewrite: {
          '^/api': '/', 
        },
        changeOrigin: true // 虚拟站点
      })
    )
  }
}
