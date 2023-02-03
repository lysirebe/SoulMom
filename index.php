<!-- using OOP connect to database 
create an entry table 
create a journal entry object - user, title,date,entry, morning/night

- GOAL - one single form 
- user enters all details presses submit 
- create a new object using the data submitted from form to then display journal entry on screen -  -->

<?php
include "connection.php";
$getEntry = "SELECT * FROM entries";
$entryResults = $conn->query($getEntry);
$rows = $entryResults ->fetch_all(MYSQLI_ASSOC);

?>

<?php require 'header.php'?>
<body>
  <h1 class = 'homeTitle'> SoulMom </h1>
  <br>
  <form name='journalPost' method='post' action='addEntry.php'id = 'journalPost'>

    <label for="username">Whats your name: </label><br>
    <input type = 'text' name = 'username'>

    <br>

    <label for="title">Give your entry a title:</label><br>
    <input type = 'text' name = 'title'>

    <br>

    <label for="entry">Write to your hearts content:</label><br>
    <input type = 'text' name = 'entry'>

    <br><br>

    <p>is this a morning or evening entry:</p>
    
    <input type = 'checkbox' name = 'todM' value = "morning">
        <label for="todM">morning</label><br>

    <input type = 'checkbox' name = 'todE' value = "evening">
    <label for="todE">evening</label><br>
    <br>

        <!-- <label for="date">Mark this entry in history:</label><br>
    <input type = 'date' name = 'date'> -->
    

    <input type = 'submit' value= 'andddd Post !!'>
</form>



<?php foreach ($rows as $row):?> 
  <h1>'<?php echo $row["title"] ?>'</h1>
<p>'<?php echo $row["entry"] ?>'</p>
<p>'<?php echo $row["date"] ?>'</p>
<?php endforeach ?>


</body>
</html>