<?php
$r=$_REQUEST;
$kode=$r['id'];
$to=$r['to'];
$validasi=$r['v'];

require 'phpmailer/PHPMailerAutoload.php';

$to_id = "wawan@sismadi.com";
$subject = "LMS konfirmasi akun";


$message = "<a href='http://localhost/donat/api/master/?mod=validasi&nama[email]=$to' > Verifikasi $to   </a>";

if($validasi){ $message = " Terimaksih "; }

// $url = "https://api.piawai/lms/index.php";
// $message = file_get_contents($url);
// $message = 'konfirmasi email ';


$mail = new PHPMailer;
$mail->isSMTP();

$mail->Host = 'smtp.gmail.com';
$mail->Port = 587;
$mail->SMTPSecure = 'SSL';

$email = "codepiawai@gmail.com";
$password = "uwsk uzbc kegq sesk";

$mail->SMTPAuth = true;
$mail->Username = $email;
$mail->Password = $password;
$mail->setFrom('lms@app.piawai.id', 'LMS Piawai');
$mail->addReplyTo('lms@app.piawai.id', 'LMS Piawai');
$mail->addAddress($to_id);
$mail->Subject = $subject;
$mail->msgHTML($message);

if (!$mail->send()) {$error = "Mailer Error: " . $mail->ErrorInfo; echo $error ;}
else {echo "Message sent";}
?>
