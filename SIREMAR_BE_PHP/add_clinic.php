<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
include './functions.php';

$data = json_decode((file_get_contents("php://input")));
$cliname = $data->cliname;
$email = $data->email;
$mnum = $data->mnum;
$caddress = $data->caddress;
$ctype = $data->ctype;
$addinfo = $data->addinfo;

$conn = get_db_connection();
$sql = "INSERT INTO clinic(cliname,email,mnum,caddress,ctype,addinfo) values ('$cliname','$email','$mnum','$caddress','$ctype','$addinfo')";

if($conn->query($sql) === true) {
    $response['message'] = 'success';
    echo json_encode($response);
} else {
    $response['message'] = 'you are about to succeed';
    echo json_encode($response);
}

?>