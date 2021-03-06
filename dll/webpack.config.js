const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');


module.exports={                // exporto el modulo de configuracion
    entry: {
      vendor: ['react','react-dom'],
      home: path.resolve(__dirname, 'src/js/index.js'),
      contact: path.resolve(__dirname, 'src/js/contact.js')

    },  // archivo de entrada
    output:{
        path: path.resolve(__dirname, 'dist'),   // archivo de salida  directorio de destino y nombre de compilacion al final
        filename: 'js/[name].js',
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
                // test: que tipo de archivo quiero reconocer,
                // use: que loader se va a encargar del archivo
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                  // ['style-loader','css-loader']
                  // fallback: 'style-loader',
                  use: [
                    {
                      loader: 'css-loader',
                      options: {
                        modules: true,
                        importLoaders: 1
                      }
                    },
                    'postcss-loader'
                  ]
                }),
              },
            {
                test: /\.scss$/,
                // use: [
                //   { loader: "style-loader" }, // Agrega el css al DOM en un <style>
                //   { loader: "css-loader" }, // interpreta los archivos css en js via import
                // ]
                use: ExtractTextPlugin.extract({
                  fallback: "style-loader",
                  use: ["css-loader", "sass-loader"]
                })
              },
              {
                test: /\.less$/,
                // use: [
                //   { loader: "style-loader" }, // Agrega el css al DOM en un <style>
                //   { loader: "css-loader" }, // interpreta los archivos css en js via import
                // ]
                use: ExtractTextPlugin.extract({
                  fallback: "style-loader",
                  use: ["css-loader", "less-loader"]
                })
              },              
              {
                // test: que tipo de archivo quiero reconocer,
                // use: que loader se va a encargar del archivo
                test: /\.styl$/,
                use: ExtractTextPlugin.extract({
                  // ['style-loader','css-loader']
                  // fallback: 'style-loader',
                  use: [
                    "css-loader",
                    {
                      loader: 'stylus-loader',
                      options: {
                        use: [
                          require('nib'),
                          require('rupture')
                        ],
                        import: [
                          '~nib/lib/nib/index.styl',
                          '~rupture/rupture/index.styl'
                        ]
                      }
                    }
                  ]
                }),
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
    // aquí van los plugins
    new ExtractTextPlugin("css/[name].css"),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor',
    //   minChunks:Infinity
    // })
    new webpack.DllReferencePlugin({
      manifest: require('./modules-manifest.json')
    })
  ]

}