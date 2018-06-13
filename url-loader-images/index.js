import './estilos.css';
import message from './message.js';
import element from './element.js';
import platzi from './platzi.jpg'   // importo la imagen

document.write(message.firstmessage);
// message.save();


// document.body.appendChild(element.createDiv());

document.body.appendChild(element.createElement('HOLA TAROLA'));

let midiv= element.createDiv();
console.log(midiv);
document.body.appendChild(midiv);

const img = document.createElement('img');
img.setAttribute('src', platzi);
document.body.appendChild(img);
 

console.log('estilos desde loader');