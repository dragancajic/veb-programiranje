<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">

</head>
<body>
<?php

    $conn = mysqli_connect("localhost", "root", "", "prodavnica");
    //$conn = new mysqli("localhost", "root", "", "prodavnica");

    /*
        if(!$conn){
            die("nije uspelo");
        }else
            echo "uspelo je";
    */
    if(mysqli_errno($conn)){
        die("Greska je nastala");
    }else{
        echo "uspelo je";
    }

    $upit = "SELECT * FROM proizvod";

    $rezultat = mysqli_query($conn, $upit);
    //$rezultat  = $conn->query($upit);
    if($rezultat === FALSE){

        die("nije izvrsen upit");
    }

    /*
        if($rezultat->num_rows>0){
            uspeh
        }else
            die
    
    */
    //$svi_rezultati = mysqli_fetch_all($rezultat); Moze for petlja
    while($rez = mysqli_fetch_assoc($rezultat)){

        echo $rez['naziv']." kosta ".$rez['cena']."<br>";
    }
    /*
        while($rez = $rezultat->fetch_assoc()) {

            isto je kao i gore
        } 
    
    */


    

    mysqli_close($conn);
    //$conn->close();
?>
</body>
</html>
