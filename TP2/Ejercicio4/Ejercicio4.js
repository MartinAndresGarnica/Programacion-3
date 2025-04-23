const formulario = document.getElementById("formulario");
const input = document.getElementById("txtTarea");
const lista = document.getElementById("listaTarea");

formulario.addEventListener("submit", (event) =>{
    event.preventDefault();

    const tarea = input.value;
    if (tarea !== ""){
        const li = document.createElement("li");
        li.textContent = tarea;

        li.addEventListener("click", () =>{
            li.classList.toggle("completado")
        });

        lista.appendChild(li);
    }
})