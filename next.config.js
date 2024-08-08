const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix: isProd ? '/petitude-project/' : '',
  basePath: isProd ? '/petitude-project/' : '',
}
