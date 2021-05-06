const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
    console.log(app);
    app.use(
        "/api",
        createProxyMiddleware({
            target: "http://localhost:4000",
            pathRewrite: {
                "^/api/": "/",
            },
        })
    );
    app.use(
        "/veikkausapi",
        createProxyMiddleware({
            target: "https://www.veikkaus.fi/api/sport-open-games/v1/",
            changeOrigin: true,
            pathRewrite: {
                "^/veikkausapi/": "/",
            },
        })
    );
};