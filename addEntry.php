<?php

// sesion_start();
include "connection.php";

// $db = new Db();
// $conn = $db->dbConnect();

if($_SERVER['REQUEST_METHOD'] =='POST'){
  $name = $_POST['username'];
  $entry = $_POST['entry'];
  $title = $_POST['title'];
  $tod;


// checks whether its morning or evening entry
  if(empty($_POST['todM'])){
    $tod = $_POST['todE'];
  } else{
     $tod = $_POST['todM'];
  }

  $addEntry = "INSERT INTO entries (username, title, entry, tod) VALUES ('$name' ,'$title','$entry', '$tod')";

  if($conn->query($addEntry)=== TRUE){
    header("Location: index.php");
    // $_SESSION['title'] = $title;
    // $_SESSION['entry'] = $entry;
    // $_SESSION['tod'] = $tod;
    // echo "added to db - go you for mothering your soul!";
} else {
  echo "Error";
}

// $getEntry = "SELECT * FROM entries";
// $entryResults = $conn->query($getEntry);

// if($entryResults->num_rows > 0) {
//   while($row = $entryResults->fetch_assoc()){
//     echo "<h1>$title"
//   }
// }

}

$conn->close();