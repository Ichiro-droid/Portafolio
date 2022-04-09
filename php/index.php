<?php 
	$nombre = $_POST['name'];
	$asunto = $_POST['subject'];
	$mensaje = $_POST['message'];

	echo $nombre. "ha dicho <br/>".$mensaje;
	if(mail('Ka8959342@gmail.com', $asunto, $mensaje)){
		echo "mail enviado";
	}else{
		echo "Error";
	}
 ?>