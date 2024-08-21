const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  publicPath: '/static/',

  outputDir: '../static/vue-games/dist',

  indexPath: '../templates/_base_vue.html',

  configureWebpack: {
    devServer: {
      devMiddleware: {
        writeToDisk: true 
      }
    }
  }
});
