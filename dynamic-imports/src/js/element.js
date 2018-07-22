module.exports= {

name: "elemento creado",
salto:"/n",

createElement: function(texto){

    let h1 = document.createElement("h1");
    h1.innerHTML = texto;
    return h1;

},

createDiv: function(){

    let newDiv = document.createElement("div"); 
    let newContent = document.createTextNode('tu viejaaaaaaa'); 
    return newDiv.appendChild(newContent); //añade texto al div creado. 

}


}