import * as path from 'path';
import * as fs from 'fs';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import * as webpack from 'webpack';

const banner = fs.readFileSync(path.resolve(__dirname, '..', 'LICENSE')).toString();
const config: webpack.Configuration = {
    mode: 'production',
    entry: {
        'base-demo': './demo/demo.ts'
    },
    output: {
        path: path.resolve(__dirname, '..', 'live-demo'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
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
        new CleanWebpackPlugin()
    ]
};
module.exports = config;
