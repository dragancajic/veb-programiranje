<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Operacije</title>
</head>
<body>
    <?php
        $x = 5;
        $y = 10;
        echo "aritmeticki operatori: <br>"; 
        echo $x+$y, "<br>", $x-$y,"<br>", $x*$y, "<br>", $y % $x, "<br>";
        $x+=15;
        $z = "20";
        var_dump($x==$z);
        var_dump($x===$z);
        var_dump($x < $y);
        var_dump($x<>$y);
        var_dump($x <=> $y);//ako je x vece od y vraca 1, ako je jednako 0 i ako je manje -1
        echo "<br>".strlen($z)."<br>".strrev($z)."<br>";
        $niz1 = array("r" => "Crvena", "g" => "Zelena", "b" => "Plava");
        $niz2 = array("y" => "Zuta", "m" => "Mangenta", "p" => "Roza");
        $unija = $niz1 + $niz2; // Union of $x and $y
        var_dump($unija);
        echo "<hr>";

        var_dump($niz1 == $niz2);
        echo "<br>";

        var_dump($niz1 === $niz2);
        echo "<br>";

        var_dump($niz2 != $niz1);
        echo "<br>";

        var_dump($niz2 <> $niz1);
        echo "<br>";

        var_dump($niz1 !== $niz2);

       

        

    ?>
</body>
</html>