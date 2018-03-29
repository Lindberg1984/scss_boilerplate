module.exports = {
  plugins: [
    require("postcss-import"),
    require("postcss-url"),
    require("postcss-cssnext", {
      autoprefixer: {
        browsers: ["last 2 versions", "iOS >= 8"]
      }
    })
  ]
};
