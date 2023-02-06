<?php 

    if(empty($_GET['ime']) || empty($_GET['pin'])){
        die('niste uneli podatke');
    }


    if(strlen($_GET['pin'])!=4){
        die('niste uneli 4 cifre');
    }


    for($i = 0; $i<4; $i++){
        if($_GET['pin'][$i]<'0' || $_GET['pin'][$i]>'9')
            die('niste uneli cifre');
    }


    $ime = $_GET['ime'];
    $pin = $_GET['pin'];
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset = 'utf-8'>
        <title>Zadatak2</title>
    </head>
    <body>
        <h1>Dobrodosli, <?php echo $ime;?></h1>

        <form action = 'zad2_c.php' method = 'POST'>


            <input type='text' name='ime' value = "<?php echo $ime;?>" hidden>
            <label for='iznos'>Iznos</label>
            <input type='text' id='iznos' name='iznos'>

            <br><br>

            <label for='podizanje'>Podizanje gotovine</label>
            <input type='radio' id='podizanje' name='akcija' value='podizanje'>

            <label for='uplata'>Uplata</label>
            <input type='radio' id='uplata' name='akcija' value='uplata'>

            <br><br>

            <input type='submit' value='Izvrsi akciju'>
</form> 
    </body>
</html>