<!-- https://app.sendinblue.com/marketing-campaign/list -->
<?php     

$to_email = 'mahendragangineni999@gmail.com';
$fromName = 'SIREMAR ADMINISTRATION';
$subject = 'We Have Heard you!!!! SIREMAR';
$from = 'Inspector';
$htmlcontent = 'Thank you for contacting SIREMAR Administration ! We have received your messge and we will get back to you as soon as possible!!';


$message = $htmlcontent;
$headers = 'From: '.$fromName.'<'.$from.'>' . "\r\n";
mail($to_email,$subject,$message,$headers);
?>