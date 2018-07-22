import '../css/estilos.css';
// import '../css/personas.scss';
 import '../css/personas.styl';
// import '../css/personas.less';

import message from './message.js';
import element from './element.js';
import renderToDOM from './render-to-dom.js';
import platzi from '../img/platzi.jpg';   // importo la imagen
import data from './personas.json';
import React from 'React';
import edom from 'react-dom';


console.log(data);
document.write(message.firstmessage);

const $buton = document.getElementById('dynamic-imports');  // selecciono el boton creado
$buton.addEventListener('click', async ()=> {       // añado un evento click al boton

    const {default:alerta} = await import('./alerta.js');
    alerta();
});


let x;
for (x in data) {
    
    let li= document.createElement('li');   
    li.innerHTML=data[x].name;
    li.setAttribute("class", "Persona");
    renderToDOM(li);
}


let midiv= element.createDiv();
renderToDOM(midiv);
// 


const img = document.createElement('img');
img.setAttribute('src', platzi);
img.setAttribute("class", "logo");
document.body.appendChild(img);
 
