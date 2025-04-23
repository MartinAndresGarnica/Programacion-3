const boton = document.getElementById("btn");
const input = document.getElementById("txtInput");
const lista = document.getElementById("lista");

boton.addEventListener("click", () =>{
    const texto = input.value;

    const li = document.createElement("li");
    li.textContent = texto;

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.className = "eliminarButton"

    btnEliminar.addEventListener("click", () =>{
        li.remove();
    })

    li.append(btnEliminar);
    lista.appendChild(li);
    
})