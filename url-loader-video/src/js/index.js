import '../css/estilos.css';
import message from './message.js';
import element from './element.js';
import platzi from '../img/platzi.jpg';   // importo la imagen
import videoPlatzi from '../video/que-es-core.mp4';   // importo la imagen

document.write(message.firstmessage);
// message.save();


// document.body.appendChild(element.createDiv());

document.body.appendChild(element.createElement('HOLA pifia'));

let midiv= element.createDiv();
console.log(midiv);
document.body.appendChild(midiv);

const img = document.createElement('img');
img.setAttribute('src', platzi);
document.body.appendChild(img);

const video = document.createElement('video');
video.setAttribute('src', videoPlatzi);
video.setAttribute('width', 500);
video.setAttribute('autoplay', true);
video.setAttribute('controls', true);
document.body.appendChild(video);

 

console.log('estilos desde loader');