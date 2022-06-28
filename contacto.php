<?php  

// Llamando a los campos
$name = $_POST['name'];
$email = $_POST['email'];
$asunto = $_POST['subject'];
$mensaje = $_POST['message'];

// Datos para el correo
$destinatario = "Ka8959342@gmail.com";
$asunto1 = "Contacto desde nuestra web";

$carta = "De: $name \n";
$carta .= "Correo: $email \n";
$carta .= "Asunto: $asunto \n";
$carta .= "Mensaje: $menssaje";

// Enviando Mensaje
if(mail($destinatario, $asunto1, $carta)){
	echo "mail enviado";
}else{
	echo "uyuyuyuyuy";
}
?>