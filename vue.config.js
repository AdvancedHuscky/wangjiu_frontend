module.exports = {
  devServer: {
    proxy: {
      '/goods': {
        target: 'http://localhost:3000',
        ws: true,
        changeOrigin: true
      },
    }
  }
}
