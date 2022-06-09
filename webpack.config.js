
 /* will generate an HTML5 file for you that includes all your webpack bundles in the body using script tags. */
 const HtmlWebpackPlugin = require('html-webpack-plugin')
/* Set module.exports to be an object that will hold all the configuration necessary for Webpack to 
 properly process file assets into a bundle. */
 const path = require('path');
 module.exports = {
  /* This means that we are creating a minified and uglified production bundle, 
  which compresses the codebase so that a client visiting our website can get the code delivered faster */
  mode:  process.env.NODE_ENV,
  /* Set the client/index.js file as the entry. This is the initial file that Webpack parses through to make a dependency graph of all file assets to be bundled together, 
  including your entire frontend React code, imported node modules, imported CSS and image files, etc. */
  entry: './client/index.js',
  /* After the Webpack build process runs, it will make a file in the build folder called bundle.js.*/
  output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js',
  },
  /* Enables live-reloading */
  /* Modify the directory from which we're serving files and the publicPath on which Webpack output is served. */
  /* webpack-dev-server keeps the bundle in memory rather than on disk so there should not be a bundle.js folder in build */
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'build'),
      publicPath: '/build'
    },
    port: 8080,
    hot: true,
    proxy: {
      '/api': 'http://localhost:3000'
    }
  },
  module: {
    rules: [
      { 
        test: /\.jsx?/, 
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.(s(a|c)ss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg|jpg|png)$/,
        use: {
          loader: 'url-loader',
        },
      },
    ]
  },
  plugins: [new HtmlWebpackPlugin(
    {
      title: 'development',
      template: 'index.html'
    }
  )]
};
