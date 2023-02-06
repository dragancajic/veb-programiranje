<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Promenljive</title>
</head>
<body>
    <?php

        $niska = "neka niska";//moze i 'neka niska', razlika je u echo ispisivanju
        //'$neka_informacija' ispisuje celu nisu onako kako je napisano
        //"$neka_informacija" ispisuje vrednost promenljive $neka_informacija 
        $ceo_broj = 10;
        $realan_broj = 5.663;
        $tacnost = True;
        $niz = array('crvena', 'plava', 'zelena'); //moze i mesani niz
        $asocijativni_niz = array('crvena'=>array(255, 0, 0),
    'plava'=>array(0,0,255), 'zelena'=>array(0, 255, 0));
        $null = NULL;

        echo $niska.'<br>';//konkatenacija niski je .
        echo $realan_broj;
        echo "<br>";
        echo var_dump($ceo_broj), "<br>"; //echo moze da ima vise promenljivih
        print $tacnost; //print moze da ispise samo 1 promenljivu
        print "<br>"; 
        echo var_dump($tacnost);


        

    ?>
</body>
</html>