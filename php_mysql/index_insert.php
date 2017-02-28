<!-- index_insert.php -->
<?php
require ('mysql_connect.php');

print_r($_POST);

$query = "INSERT INTO `c117db`.`students` (`id`, `name`, `email`, `age`, `ssn`, `username`, `password`, `joined`, `status`) VALUES (NULL, '{$_POST['name']}', '{$_POST['email']}', '{$_POST['age']}', '{$_POST['ssn']}', '{$_POST['username']}', SHA1('{$_POST['password']}'), NOW(), 'active')";

print($query);

$result = mysqli_query($conn, $query);
if ($row = mysqli_affected_rows($conn) > 0){
    $id = mysqli_insert_id($conn);
    print("this affected ".$row." at ".$id);
}

?>