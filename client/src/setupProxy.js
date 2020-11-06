const proxy = require("http-proxy-middleware");
const { createProxyMiddleware } = require("http-proxy-middleware");

console.log(proxy);
module.exports = function (app) {
  app.use(
    createProxyMiddleware("/auth/google", {
      target: "http://localhost:5000/",
    })
  );
  app.use(
    createProxyMiddleware("/api/current_user", {
      target: "http://localhost:5000/",
    })
  );
};
