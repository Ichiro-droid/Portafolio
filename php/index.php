<?php

$destino = "ka8959342@gmail.com";
//Esto es al correo que se enviarÃ¡ el mensaje

$nombre = $_POST['name']; 
$email = $_POST['email'];
$asunto = $_POST['subject'];
$mensaje = $_POST['body'];

$header = "Enviado desde formulario de contacto en localhost";
$mensajeCompleto = "\n Nombre: " . $nombre . "\n" . "Mensaje :" . $mensaje;
mail($destino, $asunto, $mensajeCompleto, $header);
header('Location: index.html');

?>