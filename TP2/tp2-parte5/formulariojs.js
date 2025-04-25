document.getElementById("formulario").addEventListener("submit", function (event) {
    event.preventDefault();

   
    document.getElementById("error-nombre").textContent = "";
    document.getElementById("error-email").textContent = "";
    document.getElementById("error-edad").textContent = "";

   
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const edad = parseInt(document.getElementById("edad").value.trim());

    let hayErrores = false;

  
    if (nombre === "") {
        document.getElementById("error-nombre").textContent = "Por favor ingresa tu nombre.";
        hayErrores = true;
    }

   
    function validarEmailSimple(email) {
        const posicionArroba = email.indexOf("@");
        const posicionPunto = email.lastIndexOf(".");
    
        return (
            posicionArroba > 0 &&
            posicionPunto > posicionArroba + 1 &&
            posicionPunto < email.length - 1
        );
    }
    if (email === "") {
        document.getElementById("error-email").textContent = "Por favor ingresa tu email.";
        hayErrores = true;
    } else if (!validarEmailSimple(email)) {
        document.getElementById("error-email").textContent = "El formato del email no parece válido.";
        hayErrores = true;
    }

 
    if (isNaN(edad)) {
        document.getElementById("error-edad").textContent = "Por favor ingresa tu edad.";
        hayErrores = true;
    } else if (edad <= 18) {
        document.getElementById("error-edad").textContent = "Debes tener más de 18 años.";
        hayErrores = true;
    }

    if (!hayErrores) {
        console.log("Formulario válido. Enviar datos...");
        alert("Formulario enviado correctamente 🎉");
    }
});