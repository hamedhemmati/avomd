const withLess = require("@zeit/next-less");
const withCSS = require("@zeit/next-css");
module.exports = withLess({
  lessLoaderOptions: {
    javascriptEnabled: true
  }
});
