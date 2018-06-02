const path = require('path');   // libreria nativa de node  para manejar rutas absolutas
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports={                // exporto el modulo de configuracion
    entry: {

        home:path.resolve(__dirname, 'src/js/index.js'),  // archivo de entrada
        contacto: path.resolve(__dirname, 'src/js/contacto.js'),  // archivo de entrada
        precios:path.resolve(__dirname, 'src/js/precios.js'),  // archivo de entrada

    },
    
    output:{
        path: path.resolve(__dirname, 'dist'),   // archivo de salida  directorio de destino y nombre de compilacion al final
        filename: 'js/[name].js'
    },

    module: {
        rules: [
          {
            test: /\.css$/,
            // use: [
            //   { loader: "style-loader" }, // Agrega el css al DOM en un <style>
            //   { loader: "css-loader" }, // interpreta los archivos css en js via import
            // ]
            use: ExtractTextPlugin.extract({
              fallback: "style-loader",
              use: "css-loader"
            })
          }
        ]
      },
      plugins: [
        // new ExtractTextPlugin("styles.css")
        new ExtractTextPlugin("css/[name].css")
      ]

}