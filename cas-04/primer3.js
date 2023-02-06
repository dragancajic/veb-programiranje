/*
 Kada se dohvate odredjeni elementi koji trebaju da se promene,
 postoji nekoliko nacina da se utice na njihovo ponasanje i izgled.
 Prvi je izmena sadrzaja i to moze da se izvrsi sa dva atributa:
 -innerHTML koji menja sadrzaj elementa
 -outerHTML koji menja sam element ukljucujuci i sadrzaj elementa
 
 Drugi je izmena atributa elementa, npr. linkova
 Treci je manipulacija stilova elementa.
 
 Iskomentarisite neke delove da vidite razliku
 */
let p_prvi = document.getElementById("prvi_paragraf");
p_prvi.innerHTML = "Promenjen je sadrzaj prvog paragrafa";

let naslov = document.querySelector("h1");
naslov.outerHTML = "<h5> Smanjen je naslov i promenjen je sadrzaj</h5>"

let link = document.querySelector("a");
link.href = "http://www.vebp.matf.bg.ac.rs/#1_tab"
link.innerHTML = "Link ka kursu";

let div_glavni = document.getElementById("glavni");
div_glavni.style.backgroundColor = "tomato"; 
/*
 Ovakva svojstva se u css-u pisu sa znakom - , medjutim, u js-u je to operator. Notacija koja se koristi umesto - je kamilja notacija gde je svako naredno prvo slovo nove reci veliko.
 */

