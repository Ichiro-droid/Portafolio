<?php  

// Llamando a los campos
$name = $_POST['name'];
$email = $_POST['email'];
$asunto = $_POST['subject'];
$mensaje = $_POST['menmessagesaje'];

// Datos para el correo
$destinatario = "codytron.info@gmail.com";
$asunto = "Contacto desde nuestra web";

$carta = "De: $nombre \n";
$carta .= "Correo: $correo \n";
$carta .= "Telefono: $telefono \n";
$carta .= "Mensaje: $mensaje";

// Enviando Mensaje
mail($destinatario, $asunto, $carta);
header('Location:mensaje-de-envio.html');

?>