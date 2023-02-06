<!DOCTYPE html>
<?php
    $conn = mysqli_connect("localhost", "root", "", "prodavnica");
    if(mysqli_errno($conn)){
        die("Greska je nastala");
    }

    $ima_rezultata = FALSE;
    if(isset($_GET['submit'])){

        if(!empty($_GET['id'])){

          $upit = "SELECT naziv, cena FROM proizvod WHERE id=".$_GET['id'];    
          $rezultat = mysqli_query($conn, $upit);
            //$rezultat  = $conn->query($upit);
           if($rezultat === FALSE){

                die("nije izvrsen upit");
            }

            if(mysqli_num_rows($rezultat)!=0)
                $ima_rezultata = TRUE;
        }else
            die("nije postavljen id");
    }


    //mysqli_close($conn);
?>
<html>
    <head>
        <meta charset="utf-8">
        <style>
        div {
            background-color: blueviolet;
            width: 100px;
        }
        </style>
    </head>
    <body>
        <form action="primer2.php" method = "GET">
            <label>Unesite id proizvoda</label>
            <input type="number" id="id" name="id">
            <input type="submit" value="Posalji" name="submit">
        </form>
        <br>
        <br>
        <div>

            <?php
                if(isset($_GET['submit']) && $ima_rezultata){
                echo "<table style='border: 2px solid yellow;'><tr><th>Naziv</th><th>Cena</th><tr>";
                while($rez = mysqli_fetch_assoc($rezultat)){

                    echo "<tr><td>".$rez['naziv']."</td><td>".$rez['cena']."</td></tr>";
                }

                echo "</table>";
            }
            mysqli_close($conn);
            ?>
        </div>
    </body>
</html>
