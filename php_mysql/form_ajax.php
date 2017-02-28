<form>
    <input id="name" type="text" name="name" placeholder="name"><br><br>
    <input id="email" type="text" name="email" placeholder="email"><br><br>
    <input id="age" type="text" name="age" placeholder="age"><br><br>
    <input id="ssn" type="text" name="ssn" placeholder="ssn"><br><br>
    <input id="username" type="text" name="username" placeholder="username"><br><br>
    <input id="password" type="text" name="password" placeholder="password"><br><br>
    <button id="submit">Submit</button>
</form>

<script src="https://code.jquery.com/jquery-3.1.0.js"></script>
<script>
    function sendForm(e){
      e.preventDefault();
        $.ajax({
          url: 'index_insert.php',
          method: 'post',
          data: {
            name: $("#name").val(),
            email: $("#email").val(),
            age: $("#age").val(),
            ssn: $("#ssn").val(),
            username: $("#username").val(),
            password: $("#password").val(),
            },
          success: function(resp){
            console.log("success! ", resp);
          },
          error: function(err){
            console.log("failure...", err);
          }
        });
    }

    $(document).ready(function(){
      $('#submit').click(function(event){
        sendForm(event);
      });
    })
</script>