<!--login_handler.php-->
<?php
$user_info = [
    ['id'=> 0, 'username'=>'dpaschal', 'password' => '2beb0192eb1ca5a8756bc89a09b93036e1854049'],
    ['id'=> 1, 'username'=>'rickybobby', 'password' => '75510278cc01da664793802ac6fd1e0c9c14d08d'],
    ['id'=> 2, 'username'=>'darkhelmet', 'password' => '8cb2237d0679ca88db6464eac60da9634551396412345'],
    ['id'=> 3, 'username'=>'heydude', 'password'=> '988d52642fa0dc4e7c0ad7803adcb6e2a5914d85'],
    ['id'=> 4, 'username'=>'whoahdude', 'password'=> 'f35eb53d904a7c4a21618041502798fd42692eaf'],
];

$output = ['success'=> null, 'user_id'=> null, 'message' => null];

$user['username'] = $_POST['username'];
$user['password'] = sha1($_POST['password']);

for ($i = 0; $i < sizeof($user_info); $i++){
  if ($user['username'] === $user_info[$i]['username']){
    if ($user['password'] === $user_info[$i]['password']){
      $output['user_id'] = $user_info[$i]['id']; 
    }
  }
}

if (isset($output["user_id"])){
  $output["success"] = "true";
  $output["message"] = "Login Success";
}
else{
  $output["success"] = "false";
  $output["status"] = "Login Failed";
}
$output_string = json_encode($output);
header('Content-Type: application/json');
echo($output_string);
?>