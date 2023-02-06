<?php 

    if(empty($_POST['iznos']) || !isset($_POST['akcija'])){
        die('niste uneli podatke');
    }



    for($i = 0; $i<strlen($_POST['iznos']); $i++){
        if($_POST['iznos'][$i]<'0' || $_POST['iznos'][$i]>'9')
            die('niste uneli cifre');
    }


    $iznos = (int)( $_POST['iznos']);
    $akcija = $_POST['akcija'];

    $originalni = 1000;
    $novo = 1000;
    if($akcija=='uplata'){
        $novo = $originalni + $iznos;
    }else{
        if($iznos > $originalni){
            die('ne mozete da podignete toliko novca');
        }else{
            $novo = $originalni - $iznos;
        }

    }
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset = 'utf-8'>
        <title>Zadatak2</title>
    </head>
    <body>
        <h1>Izvestaj</h1>

        <p>Korisnik: <?php echo $_POST['ime'];?></p>

        <p>Novo stanje:   <?php echo $novo;?></p>
    </body>
</html>