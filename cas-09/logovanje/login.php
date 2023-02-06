<?php session_start();

		$korisnici = array(
		"mi11275" => ["ime" => "Aleksandar", "prezime" => "Veljkovic", "smer" => 'Informatika', "password" => "aleksandar"], 
		"ml16123" => ["ime" => "Mitar", "prezime" => "Miric", "status" => "Neaktivan", "password" => "mitar"], 
		"ma89345" => ["ime" => "Slobodan", "prezime" => "Milosevic", "password" => "slobodan"] );


		if(!isset($_POST['username']) || !isset($_POST['password']))
		{
			header("HTTP/1.1 400 Bad Request");
			die("Neispravni zahtev!");
		}

		$username = trim($_POST['username']);
		$password = trim($_POST['password']);

		if(strlen($username) == 0 || strlen($password) == 0)
		{
			die("Neispravni podaci");
		}

		if(!isset($korisnici[$username]))
		{
			die("Neispravni podaci");	
		}

		if($korisnici[$username]['password'] != $password)
		{
			die("Neispravni podaci");
		}

		$_SESSION['username'] = $username;
		$_SESSION['ime'] = $korisnici[$username]['ime'];
		$_SESSION['prezime'] = $korisnici[$username]['prezime'];

		$ime = $korisnici[$username]['ime'];
		$prezime = $korisnici[$username]['prezime'];

		if(isset($_POST['boja']))
			setcookie('boja', $_POST['boja'], time() + 60 * 60 * 24);

		setcookie('username', $username, time() + 2 * 60);
		setcookie('ime', $ime, time() + 2 * 60);
		setcookie('prezime', $prezime, time() + 2 * 60);

		//header("Location: profil.php");

		echo "Dobrodošli!";
		header("refresh:1;url=profil.php");
?>
