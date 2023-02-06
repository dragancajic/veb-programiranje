<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Prijava</title>

	<style>
		#login-wrap {
			width: 400px;
			padding: 40px;
			border: 1px solid gray;
			margin: auto;
			margin-top: 50px;
		}

		label {	
			width: 110px !important;
			display: inline-block;
		}

		input[type='text'] {
			margin-bottom: 10px;
		}

	
		input[type='submit'] {
			margin: auto;
			display: block;
			margin-top: 30px;
		}

	</style>
</head>
<body>
	
	<section id="login-wrap">
		<form action="login.php" method="POST" onsubmit="return provera()">
			<label for="username">Korisničko ime: </label>
			<input autocomplete="off" type="text" name="username" id="username">
			<br>

			<label for="password">Lozinka: </label>
			<input type="password" name="password" id="password">
			<br>
			<br>
			<label for="boja">Boja: </label>
			<input type="color" value="#ffffff" name="boja" id="boja">
			<br>

			<input type="submit" value="Prijavi se">
		</form>
	</section>

	<script>
		function provera()
		{
			var username = document.getElementById('username').value.trim();
			var password = document.getElementById('password').value.trim();

			if(username.length == 0)
			{
				alert("Nije uneto korisničko ime!");
				return false;
			}

			if(password.length == 0)
			{
				alert("Nije uneta lozinka!");
				return false;
			}

			return true;
		}
	</script>

</body>
</html>