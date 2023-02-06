/*Js je veoma haotican jezik za one koji se prvi put susrecu sa njjim
 medjutim, njegova primena prevazilazi mane koje ima.
 Veoma je zgodan za manipulaciju html dokumenata i kreiranje dinamicnih
 klijentskih aplikacija. 

 Prvi korak pri manipulaciji html stranica je upoznavanje sa njenom strukturom.
 Stranica html je struktuirana u obliku stabla. To stablo se naziva
 DOM (Document Object Model). Stablo se gradi na modelu kutija. Svaki element
 u html se smatra kutijom i u bukvalnom smislu se stavlja kutija u kutiju. 
 Npr.
 <div id="glavni">
 <div id="prvi sin"></div>
 
 <div id="drugi sin"></div>
 </div>
 
 U ovom malom primeru imamo 3 blokovska elementa (kutije) ali se prvi sin i drugi sin
 nalaze unutar glavnog diva, tj. kutija u kutiji.
 Kada se primer prevede u stablo glavni se nalazi u korenu a njegova deca su prvi sin i drugi sin.
 
 
 U listovima stabla se najcesce nalaze tekstualni cvorovi, odnosno cvorovi koji
 predstavljaju samo tekstove elemenata.
 Koren celog stabla je document, njemu se prvom pristupa jer on zna ko su mu deca.
 Js ima nekoliko nacina pristupa elementima stabla. Da bi se uopste i dohvatili elementi stabla prvo moraju da budu definisani ti elementi pa tek onda skript element koji ih obradjuje.
 */

let div_glavni = document.getElementById("glavni"); //metod vraca null ukoliko takav element ne postoji

if(div_glavni !== null)
    console.log("uspeo sam da dohvatim div sa identifikatorom 'glavni'");

let pasusi = document.getElementsByTagName("p");//metod vraca [] ukoliko ne postoje takvi elementi, ako je sve u redu vraca niz elemenata

if(pasusi.length > 0)
    console.log(`uspeo sam da dohvatim ${pasusi.length} elemenata sa etiketom 'p'`);

let pasus_prvi = document.querySelector("h1"); //vraca prvi element na koji naidje da ima ovaj css selektor ili null ako nema

let divovi = document.querySelectorAll("div"); //vraca sve elemente na koji naidje da imaju ovaj css selektor ili [] ako nema

let div_sa_klasom = document.getElementsByClassName("poseban");

if(div_sa_klasom.length > 0 )
    console.log(`uspeo sam da dohvatim ${div_sa_klasom.length} elemenata sa klasom 'poseban'`);


