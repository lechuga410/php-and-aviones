<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="/login/css/estilos.css">
</head>
<body>
     <div class="contenedor">
        <h1 class="titulo">iniciar secion</h1>
        <hr class="border">
        <form action="/login/login.php" method="POST" class="formulario" name="login">
            <div class="form-group">
            <i class="icono izquierda fa fa-user"></i>
            <input type="text" name="usuario" class="usuario" placeholder="usuario">
            </div>

            <div class="form-group">
            <i class="icono izquierda fa fa-lock"></i>
            <input type="password" name="password" class="password" placeholder="contraseña">
            </div> 

            <div class="form-group">
              <i class="submit-btn fa fa-arrow-right" onclick="login.submit()"></i>
            </div> 

            <?php if(!empty($errores)): ?>
                <div class="error">
                    <ul>
                        <?php echo $errores; ?>
                    </ul>
                </div>
            <?php endif; ?>
        </form>

        <p class="texto-registrate">
            ¿ya te registraste?
            <a href="registrate.view.php">regístrate aquí</a>
        </p>
     </div>
</body>
</html>