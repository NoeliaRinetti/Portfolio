document.getElementById('contactoForm').addEventListener('submit', function(event) {
    // Evita que el formulario se envíe por defecto
    event.preventDefault();

    // Obtener los valores de los campos
    let nombre = document.getElementById('nombre').value.trim();
    let email = document.getElementById('email').value.trim();
    let mensaje = document.getElementById('mensaje').value.trim();

    // Validar los campos
    let errores = [];

    // Validar que el nombre no esté vacío
    if (nombre === "") {
        errores.push("El campo de nombre no puede estar vacío.");
    }

    // Validar el email usando una expresión regular simple
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errores.push("Por favor, ingresa un correo electrónico válido.");
    }

    // Validar que el mensaje no esté vacío
    if (mensaje === "") {
        errores.push("El campo de mensaje no puede estar vacío.");
    }

    // Mostrar los errores o enviar el formulario
    if (errores.length > 0) {
        alert(errores.join("\n"));
    } else {
        alert("Formulario enviado correctamente.");
        // Aquí puedes agregar la funcionalidad para enviar los datos
        // Por ejemplo, enviarlos a un servidor con fetch o AJAX
        // this.submit(); // Si quieres que el formulario se envíe realmente
        
        // Limpiar el formulario
        this.reset();
    
    }
});

