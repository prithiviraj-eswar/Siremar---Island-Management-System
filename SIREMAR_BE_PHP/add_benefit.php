<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
include './functions.php';

$data = json_decode((file_get_contents("php://input")));
$bname = $data->bname;
$email = $data->email;
$mnum = $data->mnum;
$bdetails = $data->bdetails;
$btype = $data->btype;
$addinfo = $data->addinfo;

// $bname = '$data->bname';
// $email = '$data->email';
// $mnum = '1234';
// $bdetails = '$data->bdetails';
// $btype = '$data->btype';
// $addinfo = '$data->addinfo';

$conn = get_db_connection();
$sql = "INSERT INTO rbenefits(bname,email,mnum,bdetails,btype,addinfo) values ('$bname','$email','$mnum','$bdetails','$btype','$addinfo')";

if($conn->query($sql) === true) {
    $response['message'] = 'success';
    echo json_encode($response);
} else {
    $response['message'] = 'you are about to succeed';
    echo json_encode($response);
}

?>