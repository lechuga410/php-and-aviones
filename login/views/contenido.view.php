<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    
</head>
<body>
    <div class="contenedor">
        <h1>Contenido exclusivo</h1>
        <p><strong>Usuario:</strong> <?php echo htmlspecialchars($_SESSION['usuario']); ?></p>
        <p><strong>Correo:</strong> <?php echo htmlspecialchars($_SESSION['correo']); ?></p>
        <a href="cerrar.php">Cerrar sesión</a>
    </div>
    
</body>
</html>