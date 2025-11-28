<?php
session_start();

require 'conexion.php';

if(isset($_SESSION['usuario'])){
    header('Location: http://localhost:5000');
}

$errores = '';

if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $usuario = filter_var(strtolower($_POST['usuario']), FILTER_SANITIZE_STRING);
    $password = $_POST['password'];
    $password = hash('sha512', $password);

    $statement = $conexion->prepare('SELECT * FROM usuarios WHERE usuario = :usuario AND pass = :password');
    $statement->execute(array(
        ':usuario' => $usuario,
        ':password' => $password
    ));

    $resultado = $statement->fetch();

    if($resultado !== false){
        $_SESSION['usuario'] = $usuario;
        $_SESSION['correo'] = $resultado['correo'];
        $_SESSION['pass'] = $password;
        header('Location: http://localhost:5000');
    }else{
        $errores .= '<li>Datos incorrectos</li>';
    }
}
require 'views/login.view.php';
?>