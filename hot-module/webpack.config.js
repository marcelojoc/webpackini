const webpack = require('webpack');

module.exports={
    entry:{
        app: './index.js',
    },
    output:{

        filename:'[name].bundle.js',
    },

    module:{

        rules:[

            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]


    }

}