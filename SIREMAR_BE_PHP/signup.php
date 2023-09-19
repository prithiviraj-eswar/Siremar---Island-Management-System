<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
include './functions.php';
$data = json_decode((file_get_contents("php://input")));
$usrname = $data->usrname;
$email = $data->email;
$pwd = $data->pwd;

// $usrname = 'test';
// $email = 'mahendragangineni999@gmail.com';
// $pwd = '$data->pwd';

$to_email = $email;
$fromName = 'SIREMAR ADMINISTRATION';
$subject = 'Your account is Ready to Use';
$from = 'Inspector';
ob_start();
include("signup_email_content.php");
$message = ob_get_contents();
ob_end_clean();
$headers = 'From: '.$fromName.'<'.$from.'>' . "\r\n";
mail($to_email,$subject,$message,$headers);


$conn = get_db_connection();
$sql = "INSERT INTO resident (usrname,email,pwd,workexp,addinfo) values ('$usrname','$email','$pwd','NA','NA')";

if($conn->query($sql) === true) {
    $response['message'] = 'success';
    echo json_encode($response);
} else {
    $response['message'] = 'you are about to succeed';
    echo json_encode($response);
}

?>