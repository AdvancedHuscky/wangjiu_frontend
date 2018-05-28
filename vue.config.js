module.exports = {
  devServer: {
    proxy: {
      '/home/carousel': {
        target: 'http://localhost:3000',
        ws: true,
        changeOrigin: true
      },
      '/goods': {
        target: 'http://localhost:3000',
        ws: true,
        changeOrigin: true
      }
    }
  }
}
