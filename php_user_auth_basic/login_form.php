<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
  <script>
    function sendLogin(){
      $.ajax({
        url: 'login_handler.php',
        data: {"username": $('#username').val(), "password": $('#password').val()},
        cache: "false",
        method: "post",
        dataType: "json",
        success: function(res){
          console.log(res);
          $('input').val('');
          $("#login-status").text(res.message);
          if (res.succes === "true"){
          $('#login').hide();
          }
        },
        error: function(err){
          console.log('ajax error', err);
        }
      })
    }
  </script>
</head>
<body>
  <div id="login-status"></div>
  <div id="login">
  <input type="text" id="username" placeholder="username">
  <input type="text" id="password" placeholder="password">
  <button onclick="sendLogin()">Log In</button>
  </div>
</body>
</html>