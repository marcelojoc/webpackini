const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');



module.exports={                // exporto el modulo de configuracion
    entry: path.resolve(__dirname, 'src/js/index.js'),  // archivo de entrada
    output:{
        path: path.resolve(__dirname, 'dist'),   // archivo de salida  directorio de destino y nombre de compilacion al final
        filename: 'js/bundle.js',
        publicPath: "./dist/",
    },

    module:{    // are a de plugins y loaders

        rules:[
            
            // aqui se colocan los loaders
            {
                // test:  que tipo de archivo quiero reconocer
                // use:  que loader se va a encargar del archivo
                test: /\.js$/,
                //Loader to use
                exclude: /(node_modules)/,
                use: {
                    loader:'babel-loader',
                    options:{
                        presets:['es2015', 'react']
                    }

                }
                
            },
            {
                // test:  que tipo de archivo quiero reconocer
                // use:  que loader se va a encargar del archivo
                test: /\.css$/,
                //Loader to use
                use: ExtractTextPlugin.extract({        
                  fallback: 'style-loader',
                  use: 'css-loader'
                })
                
            },
            {

                test:/\.(png|jpg|gif|woff|eot|ttf|svg)$/,
                use:{
                    loader:'url-loader',
                    options:{
                        limit: 100000,   // hasta que limite de

                    }
                }

            },
            { // para soportar archivos json   OJO webpack 4  ya viene con el soporte json incluido
                test:/\.json$/,
                use:{
                    loader:'json-loader'
                }

            }
        ]
    },

    plugins: [
        //Call plugins here
        new ExtractTextPlugin("css/[name].css") //name permite uusar el nombre original del entrypoint
      ]

}