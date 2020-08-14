<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['user_name'];
$surName = $_POST['user_surname'];
$phone = $_POST['user_phone'];
$email = $_POST['user_email'];
$link = $_POST['user_link'];
$shop = $_POST['user_shop'];
$shopDescr = $_POST['user_shopDescr'];
$promo = $_POST['user_promo'];

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'test.italik@gmail.com'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'asdfgh890'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('test.italik@gmail.com'); // от кого будет уходить письмо?
$mail->addAddress('vitkagricenko@gmail.com');     // Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка с тестового сайта';
$mail->Body    = '' .$name . ' ' . $surName . ' оставил заявку, его телефон ' .$phone. '<br>Почта этого пользователя: ' .$email.
                    '<br> Ссылка на его веб сайт: ' . $link. '<br> Магазин на платформе: ' . $shop . '<br> Описание магазина: ' . $shopDescr . '<br> Промокод пользователя: ' . $promo;
$mail->AltBody = '';

if(!$mail->send()) {
    return false;
} else {
    header('location: index.html');
}
?>