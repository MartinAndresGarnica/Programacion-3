let titulo = document.getElementById("tituloPrincipal");
titulo.textContent = "Título modificado con JS"

let parrafos = document.getElementsByClassName("parrafo");

for (let i = 0; i < parrafos.length; i++){
    parrafos[i].style.color = "blue";
}

let items = document.querySelectorAll("li");

items.forEach(function(item, index){
    item.textContent += " (modificado)";
});