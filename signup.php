<?php
include "connection.php";
if($_SERVER['REQUEST_METHOD'] === 'POST'){
  $validationQuery ="SELECT * FROM `users` WHERE `email` = ?";
  $selectStatement = $conn ->prepare($validationQuery);

  $name = $_POST['name'];
  $email = $_POST['email'];
  $password = $_POST['password'];

  $selectStatement->bind_param("s",$email);

  $selectStatement-> execute();
  $validationResult = $selectStatement-> get_result();

  if(mysqli_num_rows($validationResult)> 0){
    echo "<script>";
    echo 'alert("Account already exists with that email");';
    // echo "window.location = 'signup.php';";
    echo "</script>";
  } else {
    //hash/salt the password before storing in db 

       $insertQuery = "INSERT INTO users (name, email, password) VALUES (?,?,?)";
       $insertStmt= $conn->prepare($insertQuery);
       $insertStmt->bind_param("sss", $name,  $email, $password);
       $result = $insertStmt->execute();
       header("Location: login.php");
       die;}



}
?>

<?php require 'header.php'?>
<body>
  <form method='POST'>
    <label for =
     'name'>Your name is what makes you.. well you ! Let us know below who YOU are </label>
    <input type ='text' id ='name' name='name' placeholder='My name is: '>
    <!-- get the value of name just typed insert into next label-->
    <label for = 'email'><?php echo "unlike you Lys, theres nothing special about email, buttt we still require it";?></label>
    <input type ='email' id ='email' name='email' placeholder='Email: '>
    <label for = 'password'>Finally, your password (dont worry we wont look) </label>
    <!-- css animation of eyes looking at passowrd whilst being typed -->
    <input type = 'password' id ='password' placeholder = "Password: " name = 'password' required><br>
    <section>
      <p>Waittt, before you hit submit, let us gift your soul with a dose of positive encouragement !</p>
      <button><i class="fa-sharp fa-solid fa-gift"></i></button> 
      <!-- when button is clicked show positive quote -->
    </section>
    <input type="submit" value="Submit">
  </form>
  <p >Are you a SoulMom member who accidentally clicked the wrong link ? Not to worry, we got you</p>
  <!-- animated arrow pointing to the right link -->
  <button href= 'login.php'>Log In</button>
</body>
