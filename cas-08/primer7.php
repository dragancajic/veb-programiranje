<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Formular</title>
</head>

<body>
    <!-- 
        Slanje podataka iz formulara se svodi na koriscenje atributa action i method
        action kao vrednost ima php fajl (ili bilo koji drugi serverski jezik) koji ima konekciju sa bazom
        method predstavlja kojom metodom se salju podaci, ukoliko je to get podaci ce biti
        ispisani u url-u fajla, iako se pravi zahtev ovo se svodi na neki upit ka serveru koji je vidljiv
        (nije dobar za slanje lozinki)
        ukoliko je to post onda se ti podaci stavljaju u telo zahteva ka serveru za razliku od get-a i poverljive
        informacije ostaju sakrivene.
    -->
    <form action="primer7.php" method="post">
        Unesite ime: <input type="text" name="ime">
        Unesite lozinku: <input type="password" name="lozinka">
        <input type="submit" name="submit" vrednost="Posalji podatke">
    </form>

    <?php
        /*
            Nekoliko superglobalnih promenljivih se koriste za pristupanje poslatih podataka.
            $_GET, $_POST i $_REQUEST (objedinjen get i post)
            Oni predstavljaju asocijativne nizove koje u sebi imaju nazive polja koji su korisnici popunili
            i u zavisnosti od vrednosti tih polja server reaguje.

        */
        if(isset($_POST['submit'])){//da li je dugme kliknuto
            
            if(empty($_POST["ime"]) == True) //da li je unet neki podatak u polje, ukoliko je "" onda ce da vrati True, ali ovo je veoma komplikovana funkcija jer vraca True i za 0, 0.0 ili "0"
                echo "niste uneli ime";
            else{
                $ime = $_POST["ime"];//kljuc u asocijativnom nizu odgovara vrednosti atributa name u html-u
                echo "uspelo je ime je ".$ime;
            }
        }else{
            echo "niste kliknuli na submit";
        }
    ?>
</body>

</html>