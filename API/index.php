<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$rest_json = file_get_contents("php://input");

const FOLDERPATH = 'upload-files/';
$file_tmp = $_FILES['file']['tmp_name'];
$fileNameArr = explode('.', $_FILES['file']['name']);
$file_ext = strtolower(end($fileNameArr));
$fiel_name = strtolower(reset($fileNameArr));
$file = FOLDERPATH . $fiel_name . '_' . uniqid('', true) . '.' . $file_ext;
move_uploaded_file($file_tmp, $file);