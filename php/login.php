<?php

 include('conexion.php');

$usu 	= $_POST["email"];
$pass 	= $_POST["password"];
$rol 	= $_POST["rol"];



$queryusuario = mysqli_query($conn,"SELECT * FROM login WHERE usuario ='$usu' and pass = '$pass' and rol = '$rol'");
$nr 		= mysqli_num_rows($queryusuario);  
	
if ($nr == 1 )  
	{ 
		if($rol=="Usuario")
			{	
				header("Location: index.html");
			}
		else if ($rol=="Admin")
			{
				header("Location: 404.html");
			}
	}
else
	{
	echo "<script> alert('Usuario, contraseña o rol incorrecto.');window.location= '404.html' </script>";
	}

/*VaidrollTeam*/
?>