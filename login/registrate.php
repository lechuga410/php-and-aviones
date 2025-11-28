<?php
session_start();

require 'conexion.php';

if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $usuario = filter_var(strtolower($_POST['usuario']), FILTER_SANITIZE_STRING);
    $correo = filter_var($_POST['correo'], FILTER_SANITIZE_EMAIL);
    $password = $_POST['password'];
    $password2 = $_POST['password2'];

    $errores = '';
    if(empty($usuario) or empty($correo) or empty($password) or empty($password2)){
        $errores .= '<li>Por favor rellena todos los datos correctamente</li>';
    } else {
        $statement = $conexion->prepare('SELECT * FROM usuarios WHERE usuario = :usuario LIMIT 1');
        $statement->execute(array(':usuario' => $usuario));
        $resultado = $statement->fetch();

      if($resultado != false){
          $errores .= '<li>El nombre de usuario ya existe</li>';
      }

        if($password != $password2){
            $errores .= '<li>Las contraseñas no son iguales</li>';
        }
    }

if($errores == ''){
    $password = hash('sha512', $password);

    $statement = $conexion->prepare('INSERT INTO usuarios (id, usuario, correo, pass) VALUES (null, :usuario, :correo, :pass)');
    $statement->execute(array(
        ':usuario' => $usuario,
        ':correo' => $correo,
        ':pass' => $password
    ));
    header('Location: login.php');
}
}   
require 'views/registrate.view.php';
?>