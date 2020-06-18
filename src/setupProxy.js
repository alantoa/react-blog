const {createProxyMiddleware} = require("http-proxy-middleware");

const isProd = process.env.NODE_ENV === 'production' ? true : false;
console.log('************************',isProd)
module.exports = function(app) {
    app.use(
        createProxyMiddleware("/admin_api/", {
            target: isProd?'https://api.toa.monster/':'http://localhost:3001/',
            changeOrigin: false
        })
    );
    app.use(
        createProxyMiddleware("/client_api/", {
            target: isProd?'https://api.toa.monster/':'http://localhost:3001/',
            changeOrigin: false
        })
    );
};