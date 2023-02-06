<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Sortiranje nizova</title>
</head>
<body>
    <?php
        $niz = array(0, 2, 4, 1, 1.5);
        for($i = 0; $i<count($niz); $i++){ //mogu da se koriste i while i do-while petlje
            echo $niz[$i], "<br>";
        }
        sort($niz);
        foreach($niz as $elem){
            echo $elem, "<br>";
        }

        rsort($niz);

        foreach($niz as $indeks => $elem){
            echo $indeks."=>".$elem, "<br>";
        }

        $niz1 = array("r" => "Crvena", "g" => "Zelena", "b" => "Plava");

        foreach($niz1 as $kljuc => $vrednost){
            echo $kljuc."=>".$vrednost, "<br>";
        }
       

        asort($niz1);
        echo "sortiranje po vrednost<br>";
        foreach($niz1 as $kljuc => $vrednost){
            echo $kljuc."=>".$vrednost, "<br>";
        }
       arsort($niz1);
       echo "sortiranje po vrednost opadajuce<br>";
       foreach($niz1 as $kljuc => $vrednost){
           echo $kljuc."=>".$vrednost, "<br>";
       }

       ksort($niz1);
        echo "sortiranje po kljucu<br>";
        foreach($niz1 as $kljuc => $vrednost){
            echo $kljuc."=>".$vrednost, "<br>";
        }
       krsort($niz1);
       echo "sortiranje po kljucu opadajuce<br>";
       foreach($niz1 as $kljuc => $vrednost){
           echo $kljuc."=>".$vrednost, "<br>";
       }

    ?>
</body>
</html>