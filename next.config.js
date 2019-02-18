module.exports = {
  exportPathMap: function () {
    return {
      '/': { page: '/' }
    }
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://davidnguyen179.github.io/react-paginating-demo' : '',
}