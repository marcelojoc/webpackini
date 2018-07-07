import '../css/estilos.css';
import message from './message.js';
import element from './element.js';
import renderToDOM from './render-to-dom.js';
import platzi from '../img/platzi.jpg';   // importo la imagen
import data from './personas.json';
// importo react y react dom
import React, {Component} from 'react';
import {render} from 'react-dom';


console.log(data);
document.write(message.firstmessage);




let x;
for (x in data) {
    
    let li= document.createElement('li');   
    li.innerHTML=data[x].name;
    renderToDOM(li);
}


let midiv= element.createDiv();
renderToDOM(midiv);



const img = document.createElement('img');
img.setAttribute('src', platzi);
document.body.appendChild(img);
 
