const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://the-burger-builder-9bfe3.firebaseio.com/',
      secure: false,
      changeOrigin: true,
    })
  );


   app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://the-burger-builder-9bfe3.firebaseio.com/',
      secure: false,
      changeOrigin: true,
    })
  );


};