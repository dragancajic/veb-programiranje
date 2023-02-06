<!DOCTYPE html>
<html>

<head>
    <meta charset='utf-8'>
    <title>Zadatak2</title>
</head>

<body>
    <h1>Korak1</h1>
    <form action = 'zad2_b.php' method='POST'>
    <label for='kurs'>Kursevi: </label>
    
    <select id='kurs' name='kurs'>
        <option value='Engleski jezik'>Engleski jezik</option>
        <option value='Analiza'>Analiza</option>
        <option value='Programiranje 1'>Programiranje 1</option>
    </select>
    <br><br>
    <label> Dan </label>

    <label for='ponedeljak'>Ponedeljak</label>
    <input type='radio' name='dan' value='ponedeljak' id='ponedeljak' ><br>
    <label for='utorak'>Utorak</label>
    <input type='radio' name='dan' value='utorak' id='utorak'><br>
    <label for='sreda'>Sreda</label>
    <input type='radio' name='dan' value='sreda' id='sreda'><br>
    <label for='cetvrtak'>Cetvrtak</label>
    <input type='radio' name='dan' value='cetvrtak' id='cetvrtak'><br>
    <label for='petak'>Petak</label>
    <input type='radio' name='dan' value='petak' id='petak'><br>
    <label for='subota'>Subota</label>
    <input type='radio' name='dan' value='subota' id='subota'><br>
    <label for='nedelja'>Nedelja</label>
    <input type='radio' name='dan' value='nedelja' id='nedelja'><br>

    <input type='submit' value='Korak2'>
</form>
</body>

</html>