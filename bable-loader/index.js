import './estilos.css';
import message from './message.js';
import element from './element.js';

document.write(message.firstmessage);
// message.save();


// document.body.appendChild(element.createDiv());

document.body.appendChild(element.createElement('HOLA TAROLA'));

let midiv= element.createDiv();
console.log(midiv);
document.body.appendChild(midiv);


 

console.log('estilos desde loader');