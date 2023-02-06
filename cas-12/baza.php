<?php

    function konektuj(){
        $conn = mysqli_connect('localhost', 'root', '', 'prodavnica');
        if(mysqli_errno($conn)){

            die('nije uspelo konektovanje');
        }

        /*
            $conn = new mysqli(...);

            if(!$conn){
                ....
            }
        */
        return $conn;
    }

    function diskonektuj($conn){
        mysqli_close($conn);
        //$conn->close();
    }

?>
