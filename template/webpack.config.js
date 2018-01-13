const resolve = require('path').resolve; // eslint-disable-line
// resolve to absolute path where "npm test" is running from
const root = resolve('.')
// Minimal Webpack config to supply to Eslint.
// This is not actually used by Nuxt but instead mirrors
// the resolve and loader rules.
module.exports = {
  resolve: {
    modules: [resolve(__dirname, 'lib'), 'node_modules'],
    extensions: ['.js', '.vue'],
    alias: {
      '~': __dirname,
      '@': __dirname,
      // your aliases go here.
      'static': root + '/static', // use in template with <img src="~static/nuxt.png" />
      '~static': root + '/static',
      'assets': root + '/assets', // use in template with <img src="~static/nuxt.png" />
      '~assets': root + '/assets',
      '~plugins': root + '/plugins',
      '~store': root + '/.nuxt/store',
      '~router': root + '/.nuxt/router',
      '~pages': root + '/pages',
      '~components': root + '/components'
    }
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'url-loader',
        query: {
          limit: 1000, // 1KO
          name: 'img/[name].[hash:7].[ext]'
        }
      }
    ]
  }
}
