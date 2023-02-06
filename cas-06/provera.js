const form = document.getElementById("formular");

if (form == null)
    console.log("nemamo formular");

form.addEventListener('submit', function(ev) {
    const greska = document.querySelector("#greska");

    let polje = document.querySelector('#ime_prezime');

    /*
        provera imena i prezimena:
            ova provera moze da bude proizvoljna zamislili smo da
            ovaj unos ima najvise 30 karaktera.
            Ukoliko maxlength atribut nije naveden u html dokumentu
            polje.maxLength vraca null.
            || operator radi drugacije nego C-ovski ||,
            naime ukoliko levi operand moze da se konvertuje u true
            vraca se levi operand, u suprotnom se vraca desni
                (&& radi na slicnom principu, 
                ukoliko levi operand moze da se konvertuje u false
                vraca se levi operand u suprotnom desni)
            null je moguce konvertovati u false pa se bira 30 kao 
            maksimalan broj karaktera.
            ev.preventDefault() je metoda koja sprecava slanje podataka serveru
            return false; sprecava da idemo dalje sa validacijom
    */
    const ime_prezime = polje.value.trim();
    const maxDuzina = polje.maxLength || 30;
    if (ime_prezime == "" || ime_prezime.length > maxDuzina) {

        greska.innerHTML = "Niste lepo uneli podatke za ime i prezime"
            //greska.textContent = "Niste lepo uneli podatke za ime i prezime";
        polje.focus();

        ev.preventDefault();
        return false;
    }
    //provera datuma

    //datum mora da bude broj
    polje = document.querySelector('#datum_rodjenja');
    const datum = polje.value;

    const godina = parseInt(datum.substr(0, 4));
    const mesec = parseInt(datum.substr(5, 2));
    const dan = parseInt(datum.substr(8, 2));
    //parseInt vraca nan ukoliko nije lepo preveden broj iz stringa u number
    if (isNaN(godina) || isNaN(mesec) || isNaN(dan) ||
        dan < 1 || dan > 31 || mesec < 1 || mesec > 12 || godina < 0) {
        greska.innerHTML = "Niste lepo uneli datum";
        //greska.textContent = "Niste lepo uneli datum";
        polje.focus();
        ev.preventDefault();
        return false;
    }
    //datum je oblika gggg-mm-dd i provera se oblik
    if (datum.charAt(4) != '-' || datum.charAt(7) != '-') {
        greska.innerHTML = "Niste lepo uneli datum";
        //greska.textContent = "Niste lepo uneli datum";
        polje.focus();
        ev.preventDefault();
        return false;
    }

    /*provera email polja.
    Svaki mejl mora da sadrzi @ znak i da se zavrsava nekim 
    domenskim imenom i pre njega tackom
     */

    polje = document.getElementById("email");
    const email = polje.value.trim();
    if (email.indexOf('@') == -1 || email == '' || email.lastIndexOf('.') == -1 || email.lastIndexOf('.') < email.indexOf('@')) {
        greska.innerHTML = "Niste uneli ispravnu email adresu";
        polje.focus();
        ev.preventDefault();
        return false;
    }
    /*provera sifre
        Provera zavisi od zahteva, mozemo da kazemo da jedna lozinka
        moze da ima makar jedno veliko slovo, makar jedno malo slovo
        i makar dva broja
    */
    polje = document.getElementById("lozinka");
    const vrednost = polje.value;
    let br_cifara = 0,
        br_velikih = 0,
        br_malih = 0;
    const malaSlova = [];
    const velikaSlova = [];
    //karakteri ne postoje u js-u, samo stringovi
    //jedan od nacina kako mogu da se provere mala i velika slova
    //jeste da se naprave nizovi velikih i malih slova.
    //Karakter moze da se napravi uz pomoce metode fromCharCode
    //koji prati ascii kodove karaktera
    for (let i = 0; i < 26; i++) {
        malaSlova[i] = String.fromCharCode(97 + i);
        velikaSlova[i] = String.fromCharCode(65 + i);

    }
    for (let i = 0; i < vrednost.length; i++) {
        if ('0123456789'.indexOf(vrednost[i]) !== -1)
            br_cifara++;
        else if (malaSlova.indexOf(vrednost[i]) !== -1)
            br_malih++;
        else if (velikaSlova.indexOf(vrednost[i]) !== -1)
            br_velikih++;
    }

    if (br_velikih < 1 || br_malih < 1 || br_cifara < 2) {
        greska.innerHTML = "Niste uneli dobru lozinku";
        polje.focus();
        ev.preventDefault();
        return false;
    }
    /*pokupljaju se elementi iz select elementa
        posto se bira neka opcija moramo da proverimo da li je
        bila koja opcija osim isprekidanih linija
    */

    polje = document.querySelector('#fakultet');

    if (polje.selectedIndex === 0) {
        greska.innerHTML = "niste odabrali fakultet";
        polje.focus();
        ev.preventDefault();
        return false;
    }

    //provera okruglih dugmica
    /* neko dugme mora da bude pritisnuto
        posto ih ima mnogo potrebno je da ih sve pokupimo,
        najlaski nacin je preko querySelectora i to:
        trazimo sve inpute koji imaju atribut name = "godina" 
        Povratna vrednost je niz dugmica i jedno je sigurno cekirano
        provera da li je cekirano se vrsi atributom dugme.checked.
        Ukoliko nijedno nije cekirano ispisujemo gresku
        */
    polje = document.querySelectorAll('input[name="godina"]');
    let checked = false;

    for (let i = 0; i < polje.length; i++) {
        if (polje[i].checked) {
            checked = true;
            break;
        }
    }
    if (checked == false) {
        greska.innerHTML = "Niste cekirali dugmice za godine studija";

        ev.preventDefault();
        return false;

    }

    //provera cekiranih dugmica
    polje = document.querySelectorAll('input[name="kurs"]');
    checked = false;

    for (let i = 0; i < polje.length; i++) {
        if (polje[i].checked) {
            checked = true;
            break;
        }
    }
    if (checked == false) {
        greska.innerHTML = "Niste cekirali dugmice za kurseve";

        ev.preventDefault();
        return false;

    }
    return true;
});