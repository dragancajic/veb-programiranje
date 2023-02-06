<?php
	if (!isset($_GET['jmbg']))
		die("Nema jmbg");

	$jmbg = $_GET['jmbg'];

	$baza = array("0102965123456"=>array("ime"=> "Nikola", "prezime"=>"Milicic"),
"0102965777456"=>array("ime"=> "Ana", "prezime"=>"Nikolic"),
"0102968103056"=>array("ime"=> "Ivan", "prezime"=>"Aleksic"));

	echo $baza[$jmbg]['ime'] ." ". $baza[$jmbg]['prezime'];




?>
