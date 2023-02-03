<?php

/* This file is where the connection to db is made */

class Db {
  public function dbConnect(){
      $dbhost = 'localhost';
      $dbuser = 'root';
      $dbpass = '';
      $database = 'SoulMomDB';
      $conn = new mysqli($dbhost,$dbuser,$dbpass,$database);

    if($conn->connect_error){
      die("Connection to database failed".$conn->error);
    } else {
      echo "";
    }
    return $conn;
  }
}

$db = new Db();
$conn = $db->dbConnect();