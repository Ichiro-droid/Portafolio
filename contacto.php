<?php 
	$nombre = $_POST['name'];
	$asunto = $_POST['subject'];
	$email = $_POST['email'];
	$mensaje = $_POST['message'];

	echo $nombre. "ha dicho <br/>".$mensaje;
	if(mail('ka8959342@gmail.com', $asunto, $mensaje,$email)){
		echo "mail enviado";
	}else{
		echo "uyuyuyuyuy";
	}
 ?>