var path = require('path');
var webpack = require('webpack');
module.exports={
    entry:'./server.js',
    output:{
        path:path.resolve(__dirname,'build'),
        filename:'app.bundle.js' 
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                loader:'babel-loader',
                query:{
                    presets:['es2015']
                }
            }
        ]
    },
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