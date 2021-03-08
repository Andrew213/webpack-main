const miniCssExcteractPlugin = require('mini-css-extract-plugin');

let mode = 'development';
let target = "web";
if(process.env.NODE_ENV === 'production'){
    mode = 'production';
    target = "browserslist"
};



module.exports = {
    mode: mode,
    target: target,
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [miniCssExcteractPlugin.loader, 
                    "css-loader", 
                    "postcss-loader", 
                    "sass-loader"
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            },
        ],
    },

    plugins: [new miniCssExcteractPlugin()],

    devtool: "source-map",
    devServer: {
        contentBase: "./dist",
        open: true,
        hot: true,
    }
}