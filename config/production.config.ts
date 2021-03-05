import * as path from 'path';
import * as fs from 'fs';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import * as webpack from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
//import CompressionPlugin from 'compression-webpack-plugin';
const banner = fs.readFileSync(path.resolve(__dirname, '..', 'LICENSE')).toString();
const config: webpack.Configuration = {
    mode: 'production',
    entry: {base: './src/base.ts'},
    output: {
        path: path.resolve(__dirname, '..', 'dist'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    externals: ['chart.js'],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'minify-lit-html-loader'
                    },
                    {
                        loader: 'ts-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin(banner),
        new CleanWebpackPlugin(),
        new BundleAnalyzerPlugin()
        //new CompressionPlugin()
    ]
};
module.exports = config;
