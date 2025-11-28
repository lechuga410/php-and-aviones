<?php
session_start();
if(isset($_SESSION['usuario'])){
    header('Location: http://localhost:5000');
}else{
    header('Location: login.php');
}
?>