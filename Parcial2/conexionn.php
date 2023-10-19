<?php

    $server = "localhost";
    $user = "root";
    $password = "";
    $basededatos = "cetis";

    $conexionn = new mysqli($server, $user, $password, $basededatos);

    if($conexionn->connect_error){
        die("Fallo la conexión" . $coneccionn);
    }

?>