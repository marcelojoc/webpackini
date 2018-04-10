const path = require('path');   // libreria nativa de node  para manejar rutas absolutas


module.exports={                // exporto el modulo de configuracion
    entry: path.resolve(__dirname, 'index.js'),  // archivo de entrada
    output:{
        path: path.resolve(__dirname, 'dist'),   // archivo de salida  directorio de destino y nombre de compilacion al final
        filename: 'bundle.js'
    },

    module:{    // are a de plugins y loaders

        rules:[
            
            // aqui se colocan los loaders
            {
                // test:  que tipo de archivo quiero reconocer
                // use:  que loader se va a encargar del archivo
                test: /\.css$/,
                use: ['style-loader','css-loader']

            }


        ]
    }

}