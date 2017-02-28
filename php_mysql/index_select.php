<!-- index_select.php -->
<?php
require('mysql_connect.php');
$query = "SELECT * FROM `students`";
$result = mysqli_query($conn, $query);

if (mysqli_num_rows($result) > 0){

    while ($row = mysqli_fetch_assoc($result)){
        print("<pre>".print_r($row, true)."</pre><br>");
    }
}
?>