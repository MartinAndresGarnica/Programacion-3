const btnResaltado = document.getElementById("btnResaltado");
const btnOculto = document.getElementById("btnOculto");
const parrafos = document.getElementsByClassName("parrafo");


btnResaltado.addEventListener("click",() =>{
    for (let i = 0; i < parrafos.length; i++) {
        parrafos[i].classList.add("resaltado");
    }
})

btnOculto.addEventListener("click", () =>{
    for (let i = 0; i < parrafos.length; i++) {
        parrafos[i].classList.toggle("oculto");
        
    }
})