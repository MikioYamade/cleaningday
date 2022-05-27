const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WriteFilePluign = require('write-file-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const outputPath = path.resolve(__dirname, 'dist');

module.exports = {
  //mode: 'production',
  entry: './_src/assets/js/script.js',
  // developmentモードでビルドした時だけソースマップを出力する
  //devtool: IS_DEVELOPMENT ? 'source-map' : 'none',
  devtool: 'eval',
  output: {
    filename: 'assets/js/script.js',
    path: outputPath,
  },
  externals: {
    jquery: '$',
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        exclude: /node_modules/,
        // loader: 'eslint-loader',
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
              presets: [ //IE11で動作させるために必要
                  '@babel/preset-env',
              ]
          }
        }]
      },
      {
        test: /\.(sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
                url: false // url()を変換しない
            }
          },
          // PostCSSのための設定
          {
            loader: "postcss-loader",
            options: {
              // PostCSS側でもソースマップを有効にする
              sourceMap: true,
              plugins: [
                // Autoprefixerを有効化
                // ベンダープレフィックスを自動付与する
                require("autoprefixer")({
                  // ☆IEは11以上、Androidは4.4以上
                  // その他は最新2バージョンで必要なベンダープレフィックスを付与する設定
                  // browsers: ["last 2 versions", "ie >= 11", "Android >= 4"]
                }),
              ]
            }
          },
          // 'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(jpe?g|png|svg|ico)$/i,
        loader: 'url-loader',
        options: {
          limit: 2048,
          name: 'assets/images/[name].[ext]',
          // name: '[path][name].[ext]',
        },
      },
      /*
      {
        test: /\.(jpe?g|png|svg|ico)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: './images/[name].[ext]',
            },
          },
        ]
      },
      */
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
    ],
  },
  devServer: {
    contentBase: outputPath,
    host: '0.0.0.0',
    port: 3000,
    disableHostCheck: true,
    useLocalIp: true,
  },
  plugins: [
    new CopyWebpackPlugin(
      [
        {
          from: './',
          to: './',
          ignore: [
            'index.html',//バンドルされるので除外
            '!*.html'//html以外
          ]
        },
      ],
      { context: '_src' }
    ),
    new CopyWebpackPlugin(
      [
        {
          from: './',
          to: './assets/images/'
        },
      ],
      { context: '_src/assets/images' }
    ),
    new CopyWebpackPlugin(
      [
        {
          from: './',
          to: './assets/webfonts/'
        },
      ],
      { context: '_src/assets/webfonts' }
    ),
    new WriteFilePluign(),
    new CleanWebpackPlugin(
      [outputPath],
      {
        // 除外するファイルやディレクトリを指定
        // exclude: ['images']
      }
    ),
    new HtmlWebPackPlugin(
      {
        template: './_src/index.html',
        filename: './index.html',
      }
    ),
    new MiniCssExtractPlugin(
      {
        // filename: '[name].[hash].css',
        filename: 'assets/css/style.css',
      }
    ),
    /*
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.$': 'jquery',
    }),
    */
  ],
  optimization: {
    minimizer: [
      /*
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            drop_console: true
          },
          output: {
            comments: false
          }
        }
      }),
      */
      new TerserPlugin({
        terserOptions: {
          //ecma: 6,
          compress: {
            // errorとwarn以外のコンソールを削除する
            drop_console: true
          },
          output: {
            // コメント類を削除
            //comments: false,
            // コードを見やすくする
            beautify: false,
          },
          extractComments: 'all',
        }
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
  
};
