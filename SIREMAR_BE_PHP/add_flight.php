<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
include './functions.php';

$data = json_decode((file_get_contents("php://input")));
$fsp = $data->fsp;
$fnum = $data->fnum;
$ffrom = $data->ffrom;
$fto = $data->fto;
$depdate = $data->depdate;
$addinfo = $data->addinfo;
$discode = $data->discode;



$conn = get_db_connection();
$sql = "INSERT INTO flights(fsp,fnum,ffrom,fto,depdate,addinfo,discode) values ('$fsp','$fnum','$ffrom','$fto','$depdate','$addinfo','$discode')";

if($conn->query($sql) === true) {
    $response['message'] = 'success';
    echo json_encode($response);
} else {
    $response['message'] = 'you are about to succeed';
    echo json_encode($response);
}

?>