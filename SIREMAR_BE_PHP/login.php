<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
include './functions.php';

$data = json_decode((file_get_contents("php://input")));
$usrname = $data->usrname;
$conn = get_db_connection();
$sql = "SELECT usrname,pwd,isres,isins,isadm FROM `resident` WHERE usrname= ?";
$stmt = $conn ->prepare($sql);
$stmt->bind_param("s",$usrname);
$stmt->execute();
$result =  $stmt->get_result();
echo json_encode($result->fetch_all(MYSQLI_ASSOC));
?>