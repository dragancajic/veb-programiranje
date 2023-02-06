<?php session_start();

	if(isset($_SESSION['username']))
	{
		$ime = $_SESSION['ime'];
		$prezime = $_SESSION['prezime'];
	}
	else if(isset($_COOKIE['username']))
	{
		$ime = $_COOKIE['ime'];
		$prezime = $_COOKIE['prezime'];	
	}
	else
		header("Location: prijava.php");
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Profil | <?php echo $ime." ".$prezime?></title>

	<style>
		body {
			<?php if(isset($_COOKIE['boja'])) echo "background-color: ".$_COOKIE['boja'].";" ?>
		}
	</style>
</head>
<body>


	<h1>Pozdrav, <?php echo $ime." ".$prezime."!" ?></h1>
	<a href="logout.php">Izloguj se</a>

    <h1><?php echo md5('aleksandar'); ?></h1>
</body>
</html>
