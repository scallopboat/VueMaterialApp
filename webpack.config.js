var path = require('path')
var webpack = require('webpack')
var IconsPlugin = require('icons-loader/IconsPlugin')

const RUN_TIMESTAMP = Math.round(Date.now() / 1000)

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue',
        options: {
          // vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      { 
        test: /\.(jpe?g|png|gif|svg|eot|woff|ttf|svg|woff2)$/, 
        loader: "file?name=[name].[ext]" 
      },
    ]
  },
  plugins: [
    new IconsPlugin({
      fontName: 'icons',
      timestamp: RUN_TIMESTAMP,
      normalize: true,
      formats: ['ttf', 'eot', 'woff', 'svg']
    }),
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
