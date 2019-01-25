const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(proxy('/posts', { target: `https://react-vk-blog.herokuapp.com/` }));
};