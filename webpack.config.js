const path        = require('path');
const dotenv      = require('dotenv');
const webpack     = require('webpack');

var env = dotenv.config({path: __dirname + '/.env'}).parsed;

var envKeys = Object.keys(env).reduce( ( prev, next ) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

const DotenvPlugin = new webpack.DefinePlugin(envKeys)
const ReactPlugin  = new webpack.ProvidePlugin({ "React": "react"});

module.exports = {
    entry: "./src/index.tsx",
    output: {
        path: path.resolve( __dirname, "dist" ),
        filename: "bundle.js"
    },
    module:{
        rules: [
            {
                test: /\.js?x$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react'],
                    }
                }
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.png/,
                type: 'asset/resource'
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [ ReactPlugin, DotenvPlugin ],
    devServer: {
        contentBase: 'dist',
        compress: true,
        port: 3000,
     },
}