
<?php
$conn = new mysqli("localhost","id19186562_max","@#Kevin261020","id19186562_web");
	
	if($conn->connect_errno)
	{
		echo "No hay conexión: (" . $conn->connect_errno . ") " . $conn->connect_error;
	}
?>