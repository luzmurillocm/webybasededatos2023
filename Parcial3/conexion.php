<?php

    $server = "localhost";
    $user = "root";
    $password = "";
    $basededatos = "cetis107";

    $conexion = new mysqli($server, $user, $password, $basededatos);

    if($conexion->connect_error){
        die("Fallo la conexión" . $conexion);
    }

?>