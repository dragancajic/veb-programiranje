<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>If Naredbe</title>
</head>
<body>
    <?php
        $x = 5;
        $y = 10;
        if($x < $y){
            echo $x." nije vece od ".$y, "<br>";
        }elseif($x == $y){
            echo $x." je jednako sa ".$y, "<br>";
        }else
            echo $x." nije manje od ".$y, "<br>";
    

        

    ?>
</body>
</html>