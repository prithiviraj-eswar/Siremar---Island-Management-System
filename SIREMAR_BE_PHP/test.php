<?php
$file = fopen("/Applications/XAMPP/xamppfiles/htdocs/siremar_be/", "w") or die("Unable to open file!");
fwrite($file, "lorem ipsum");
fclose($file);

header('Content-Description: File Transfer');
header('Content-Type: application/octet-stream');
header('Content-Disposition: attachment; filename="FILENAME"');
header('Content-Transfer-Encoding: binary');
header('Expires: 0');
header('Cache-Control: must-revalidate, post-check=0, pre-check=0');
header('Pragma: public');
header('Content-Length: test.txt');
ob_clean();
flush();
readfile('text.txt');
exit();
?>