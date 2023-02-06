<?php
    if(!isset($_POST['kurs']) || !isset($_POST['dan']))
        die('Niste uneli dobre podatke');

    $kurs = $_POST['kurs'];
    $dan = $_POST['dan'];
?>

<!DOCTYPE html>
<html>

<head>
    <meta charset='utf-8'>
    <title>Zadatak2</title>
</head>

<body>
    <h1>Korak 2</h1>
    <form action = 'zad2_c.php' method='GET'>
    
    <input type='text' name ='kurs' value='<?php echo $kurs?>' hidden>
    <input type='text' name ='dan' value='<?php echo $dan?>' hidden>

    <labe for='vreme'>Vreme: </label>
    <input type='text' id='vreme' name='vreme'>
    <br>
    <br>
    <label for='napomena'>Napomena: </label>
    <textarea id='napomena' name='napomena'></textarea>
    <input type='submit' value='Potvrdi'>
</form>
</body>
</html>