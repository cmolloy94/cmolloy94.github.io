<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$formcontent="From: $name \n Message: $message";
$recipient = "chris@cdmolloy.com";
$subject = "Contact Form Submission from $name";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
header( 'Location: http://localhost:8888/thanks.php' );
//echo "Thank You!";
?>
