<?php
    function povezi(){
        //$conn = new mysqli(...);
        //if(!$conn){}
        $conn = mysqli_connect('localhost', 'root', '', 'prodavnica');
        if(mysqli_errno($conn)){
            die('nije uspelo da se konektuje');
        }

        return $conn;
    }

    function prekini_vezu($conn){
        mysqli_close($conn);
        //$conn->close();
    }
?>
