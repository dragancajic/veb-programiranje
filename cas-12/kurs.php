<?php

    $niska_valuta = array('USD'=> 109.47, 'EUR'=>117.80, 'RUB'=> 100);

    if(!empty($_GET['valuta'])){
        echo $niska_valuta[$_GET['valuta']];
    }


?>