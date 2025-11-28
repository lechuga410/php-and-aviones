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

        <h1 class="titulo">registrate</h1>

        <hr class="border">

        <form action="/login/registrate.php" method="POST" class="formulario" name="login">

            <div class="form-group">
            <i class="icono izquierda fa fa-user"></i>
                <input type="text" name="usuario" class="usuario" placeholder="usuario">
            </div>

            <div class="form-group">
            <i class="icono izquierda fa fa-envelope"></i>
                <input type="email" name="correo" class="correo" placeholder="correo electrónico">
            </div>

            <div class="form-group">
            <i class="icono izquierda fa fa-lock"></i>
                <input type="password" name="password" class="password" placeholder="contraseña">
            </div>

            <div class="form-group">
            <i class="icono izquierda fa fa-lock"></i>
            <input type="password" name="password2" class="password_btn" placeholder="repetir contraseña">
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
            ¿Ya tienes cuenta?
            <a href="login.view.php">Iniciar sesión</a>
        </p>
     </div>
</body>
</html>