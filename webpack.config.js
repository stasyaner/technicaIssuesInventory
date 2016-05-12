var webpack = require('webpack');

module.exports = {
  //devtool: 'eval-source-map',
  entry:  './index',
  output: {
    publicPath: '/static/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel?cacheDirectory']
      },
      {
        test: /\.css?$/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.less?$/,
        loaders: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&minetype=application/font-woff'
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      }
    ]
  },
  resolve:{
    extensions: ['', '.js', '.jsx', '.less', '.css']
  },
  devServer: {
    // contentBase: "./public",
    // colors: true,
    historyApiFallback: true, // !!this is rly needed for HTML5 history api and react router
    // inline: true,
    proxy: {
      '/xlsxImport': {
        target: 'http://localhost:3000',
        secure: false,
        ws: false
      },
    },
  }
}

/*
 * If bundling for production, optimize output
 */
if (process.env.NODE_ENV === 'production') {
  config.devtool = false;
  config.plugins = [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({comments: false}),
    new webpack.DefinePlugin({
      'process.env': {NODE_ENV: JSON.stringify('production')}
    })
  ];
};
