module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://192.168.1.12:3000",
        pathRewrite: { "^/api": "" }
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        'components': '@/components',
        'content': 'components/content',
        'common': 'components/common',
        'assets': '@/assets',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}
