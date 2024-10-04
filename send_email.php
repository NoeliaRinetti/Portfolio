<?php
if($_SERVER["REQUEST_METHOD"] == "POST"){
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $mensaje = $_POST['mensaje'];

    $to = "nrinetti.comunicacion@gmail.com"; 
    $subject = "Mensaje desde el formulario de contacto";
    $body = "Nombre: $nombre\nCorreo: $email\nMensaje:\n$mensaje";

    $headers = "From: $email";

    // Enviar el correo
    if(mail($to, $subject, $body, $headers)){
        echo "Mensaje enviado correctamente.";
    } else {
        echo "Hubo un error al enviar el mensaje.";
    }
}
?>
