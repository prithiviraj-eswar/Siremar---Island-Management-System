<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
include './functions.php';

$data = json_decode((file_get_contents("php://input")));
$fname = $data->fname;
$lname = $data->lname;
$mnum = $data->mnum;
$email = $data->email;
$content = $data->content;
$isreplied = $data->isreplied;

$to_email = $email;
$fromName = 'SIREMAR ADMINISTRATION';
$subject = 'We Have Heard you!!!! SIREMAR';
$from = 'Inspector';
$message = 'Thank you for contacting SIREMAR Administration ! We have received your messge and we will get back to you as soon as possible!!';
$headers = 'From: '.$fromName.'<'.$from.'>' . "\r\n";
mail($to_email,$subject,$message,$headers);

$conn = get_db_connection();
$sql = "INSERT INTO contactus (fname,lname,mnum,email,content,isreplied) values ('$fname','$lname','$mnum','$email','$content','$isreplied')";
if($conn->query($sql) === true) {
    $response['message'] = 'success';
    echo json_encode($response);
} else {
    $response['message'] = 'you are about to succeed';
    echo json_encode($response);
}

?>