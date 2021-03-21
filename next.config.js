const withLess = require("@zeit/next-less");
module.exports = withLess({
  lessLoaderOptions: {
    javascriptEnabled: true
  },
  env: {
    api_key: "1234567890"
  }
});
