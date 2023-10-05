<?php

    $Server = "localhost";
    $user = "root";
    $password = "";

    //conexion
    $conexion = new mysql($Server, $user, $password);

    //Revisar conexion
    if($conexion->connect_error){
        die("Fallo la conexion". $conexion->connect_error);
    }
?>