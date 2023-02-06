
<!DOCTYPE html>
<html>

<head>
    <meta charset='utf-8'>
    <title>Zadatak3</title>
</head>

<body>
    <h1>Pretraga proizvoda</h1>
    <form action = 'zad3.php' method='GET'>
   
    <labe for='lokacija'>Lokacija proizvodjaca: </label>
    <input type='text' id='lokacija' name='lokacija'>
    <br>
    <br>
    <input type='submit' value='Pretraga'>
</form>
</body>
</html>

<?php
    include('baza.php');

    $conn = povezi();

    if(empty($_GET['lokacija'])){
        die('niste uneli lokaciju');
    }
    $lokacija = $_GET['lokacija'];


    $upit = "SELECT p.naziv, p.cena FROM proizvod p JOIN proizvodjac pr ON p.id_proizvodjaca = pr.id WHERE pr.lokacija = '".$lokacija."'";

    $rezultat = mysqli_query($conn, $upit);
    //$rezultat = $conn->query($upit);
    if(!$rezultat){
        die('nije uspeo upit');
    }
    //$rezultat->num_rows();
    if(mysqli_num_rows($rezultat)==0){
        echo "nema takvih proizvoda";

    }else{
        echo "<table border='1'><tr><th>Naziv</th><th>Cena</th></tr>";
        //$rezultat->fetch_assoc();
        while($red = mysqli_fetch_assoc($rezultat))
        {

            echo "<tr><td>".$red['naziv']."</td><td>".$red['cena']."</td></tr>";
        }

        echo "</table>";


    }


    prekini_vezu($conn);
?>