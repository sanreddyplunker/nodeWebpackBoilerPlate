var path = require('path');
var webpack = require('webpack');
var DIST_DIR   = path.join(__dirname, "dist"),
CLIENT_DIR = path.join(__dirname, "src");

module.exports={
    context:CLIENT_DIR,
    entry:'./server',
    output:{
        path:DIST_DIR,
        filename:'bundle.js' 
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use: [
                  {
                    loader: "babel-loader",
                    options: {
                      "presets": [["es2015", {"modules": false}]]
                    }
                  }
                ]
            }
        ]
    },
    target:'node',
    node: {
        fs: "empty",
        net:"empty"
     }
    /*devServer: {
        host: 'localhost',
        port: 3000,
        contentBase: './build',
        hot: true,
        open: true,
        openPage: '', // <== Add this
      },*/
}