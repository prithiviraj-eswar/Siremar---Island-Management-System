<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
include './functions.php';

$data = json_decode((file_get_contents("php://input")));
$fname = $data->fname;
$email = $data->email;
$mnum = $data->mnum;
$raddress = $data->raddress;
$isins = 'Y';
$usrname = $data->usrname;
$pwd = $usrname;
$workexp = $data->workexp;
$addinfo = $data->addinfo;
$content = 'gender : ' .$gender. ' stayperiod: ' .$stayperiod. ' raddress: ' .$raddress. ' county :' .$county. ' is born in island: ' .$isborn. ' .';

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


$sqltwo = "INSERT INTO `contactus`(`fname`, `lname`, `mnum`, `email`, `content`, `isreplied`) VALUES ('$fname','$lname','$mnum','$email','$content','N')";

$conn = get_db_connection();
$sql = "INSERT INTO resident(fname,email,mnum,raddress,isins,usrname,pwd,workexp,addinfo) values ('$fname','$email','$mnum','$raddress','$isins','$usrname','$pwd','$workexp','$addinfo')";

if($conn->query($sql) === true) {
    if($conn->query($sqltwo) === true) {
        $response['message'] = 'success';
    }
    echo json_encode($response);
} else {
    $response['message'] = 'you are about to succeed';
    echo json_encode($response);
}

?>