<?php

    function cifra($x){

        return $x>='0' && $x<='9';
    }
    if(empty($_GET['vreme']))
        die('Niste uneli dobre podatke');

    $kurs = $_GET['kurs'];
    $dan = $_GET['dan'];

    if(strlen($_GET['vreme'])!=5){
        die("Previse karaktera");
    }

    if(!cifra($_GET['vreme'][0]) || !cifra($_GET['vreme'][1]) || !cifra($_GET['vreme'][3]) || !cifra($_GET['vreme'][4])){
        die('Niste uneli cifre');
    }

    if($_GET['vreme'][2]!=':'){
        die("format je HH:MM");
    }

    $vreme = $_GET['vreme'];
    $napomena = $_GET['napomena'];
?>

<!DOCTYPE html>
<html>

<head>
    <meta charset='utf-8'>
    <title>Zadatak2</title>
</head>

<body>
    <h1>Podaci o casu</h1>
    <p><strong>Kurs: </strong><?php echo $kurs;?></p>
    <p><strong>Dan: </strong> <?php echo $dan;?></p>
    <p><strong>Vreme: </strong><?php echo $vreme;?></p>
    <p><strong>Napomena: </strong><?php echo $napomena;?></p>
</body>
</html>