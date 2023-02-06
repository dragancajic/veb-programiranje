<!DOCTYPE html>
<html>
    <head>
        <meta charset = 'utf-8'>
        <title>Zadatak3</title>
    </head>

    <body>
        <h1>Pretraga objekata </h1>
        <form action = 'zad3.php' method ='GET'>
            <label for='naziv'>Naziv proizvoda: </label>
            <input type = 'text' id='naziv' name='naziv'>
            <br><br>
            <input type = 'submit' value="Pretraga">
        </form>
    </body>
</html>

<?php

    include('baza.php');

    $conn = konektuj();

    if(empty($_GET['naziv'])){
        die("niste uneli naziv proizvoda");
    }

    $upit  = "SELECT o.naziv, o.lokacija FROM proizvod p JOIN proizvod_objekat po ON p.id = po.id_proizvoda JOIN objekat o ON o.id = po.id_objekta WHERE p.naziv = '".$_GET['naziv']."'";

    $rezultat = mysqli_query($conn, $upit);//$conn->query($upit);

    if(!$rezultat){
        die('nije uspeo upit');
    }

    if(mysqli_num_rows($rezultat)==0){//$rezultat->num_rows()
        echo "nema takvih proizvoda";
    }else{

        echo "<table border='1'><tr><th>Naziv</th><th>Lokacija</th></tr>";

        while($red = mysqli_fetch_assoc($rezultat)){
            echo "<tr><td>".$red['naziv']."</td><td>".$red['lokacija']."</td></tr>";
        }

        echo "</table>";
    }



    diskonektuj($conn);
?>