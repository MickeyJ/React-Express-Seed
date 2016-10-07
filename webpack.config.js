const webpack = require('webpack');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

const DEV = process.env.NODE_ENV==='development';
// const ip = require('ip').address();
// const host = ip === '127.0.0.1' ? 'localhost' : ip;
const host = 'localhost';

const config = {
  entry: './client/src',
  output: {
    path:'./public',
    filename: 'bundle.js'
  },
  devServer: {
    host: host,
    contentBase: 'public',
    historyApiFallback: {
      index: '/index.html'
    }
  },
  devtool: DEV ? "#inline-source-map" : 'source-map',
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.EnvironmentPlugin(["NODE_ENV"]),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-0', 'react-hmre']
        }
      },
      {
        test: /\.scss/,
        exclude: /node_modules/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.css/,
        exclude: /node_modules/,
        loader: 'style!css!',
      },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader:"url?limit=10000&mimetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file" }
    ]
  }
};

if(DEV){
  config.plugins.push(
    new OpenBrowserPlugin({ url: `http://${host}:8080` })
  )
} else {
  config.module.loaders[0].query.presets.pop();
  console.log(config.module.loaders[0].query.presets);
  config.plugins.push(
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      mangle: false,
      compressor: {
        drop_console: true,
        warnings: true
      }
    })
  );
}

module.exports = config;