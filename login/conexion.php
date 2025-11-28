<?php
// Archivo centralizado para conexión a base de datos

try {
    $conexion = new PDO('mysql:host=localhost;port=3307;dbname=login', 'root', '');
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    die('Error de conexión: ' . $e->getMessage());
}
?>
