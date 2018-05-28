module.exports = {
  devServer: {
    proxy: {
      '/home/carousel': {
        target: 'http://localhost:3000',
        ws: true,
        changeOrigin: true
      },
      '/home/iconList': {
        target: 'http://localhost:3000',
        ws: true,
        changeOrigin: true
      },
      '/home/flashSalesList': {
        target: 'http://localhost:3000',
        ws: true,
        changeOrigin: true
      },
      '/home/grandCruList': {
        target: 'http://localhost:3000',
        ws: true,
        changeOrigin: true
      },
      '/home/specials': {
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
