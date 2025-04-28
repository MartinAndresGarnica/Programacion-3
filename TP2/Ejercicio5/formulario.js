const form = document.getElementById("formulario")

form.addEventListener("submit", function (event) {
    event.preventDefault(); 

   
    document.getElementById("ernombre").textContent = "";
    document.getElementById("eremail").textContent = "";
    document.getElementById("eredad").textContent = "";

   
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const edad = document.getElementById("edad").value.trim();

    let hayErrores = false;

   
    if (nombre === "") {
        document.getElementById("ernombre").textContent = "Por favor ingresa nombre valido";
        hayErrores = true;
    }

   
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        document.getElementById("eremail").textContent = "Por favor ingresa email valido";
        hayErrores = true;
    } else if (!emailValido.test(email)) {
        document.getElementById("eremail").textContent = "El formato del email no es válido";
        hayErrores = true;
    }

    
    if (edad === "") {
        document.getElementById("eredad").textContent = "Por favor ingresa tu edad.";
        hayErrores = true;
    } else if (edad < 18) {
        document.getElementById("eredad").textContent = "Debes tener más de 18 años.";
        hayErrores = true;
    }

    if (!hayErrores) {
        console.log("Formulario válido. Enviar datos");
        alert("Formulario enviado correctamente");
    }
});