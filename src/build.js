import "./scss/main.scss";
import "./js/app.js"

var context = require.context("./views", true, /\.html$/);
context.keys().forEach(function (key) {
    context(key);
});

context = require.context("./img", true, /\.(png|jpg|gif|svg)$/);
context.keys().forEach(function (key) {
    context(key);
});