<?php 
$name = $_POST['name'];
$phone = $_POST['phone'];
$email =  $_POST['email'];
$comments = $_POST['comments'];
$message = $name.'   '.$phone.'   '.$email.'   '.$comments;
mail('orion@freightlines.ru', 'My Subject', $message);

?>