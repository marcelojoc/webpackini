//console.log('Hola  tu viejaaaaa, a ver si funciona');
import './estilos.css';
import message from './message.js';

const $container = document.getElementById('container');

const element = document.createElement('p');
$container.appendChild(element);


element.textContent = message();

if (module.hot  == true){
    module.hot.accept('./message.js', ()=>{

        console.log('hemos cambiado algooo');
    })
}

