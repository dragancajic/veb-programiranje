console.log("RAD SA OBJEKTIMA");
/*
 Sve u js-u je objekat i moze da se predstavi kao objekat.
 Ima nekoliko primitivnih tipova kao sto su number, string, boolean ali 
 svaki od njih moze da se napravi da bude objekat uz pomoc operatora new.
 
 new operator pravi novi objekat kome se dodeljuje kljucna rec this, cime se referise
 na sam taj objekat.
 new operator moze ponekad da uspori vreme izvrsavanja zato ga koristite pazljivo.
 
 Mogu da se prave i klase kao i u ostalim objektno-orijentisanim jezicima,
 medjutim klasa nije objekat nego samo obrazac po kojem pravimo objekte.
 
 Objekte pravimo na nekoliko nacina, jedna je uz pomoc klasa, druga je uz pomoc konstruktorskih
 funkcija i kao niz parova kljuc i vrednost.

 Na ovom casu se obradjuju samo objekti u obliku kljuca i vrednosti.
 Svaki objekat tezi da opise neku pojavu iz realnog zivota. U programiranju
 ti opisi se javljaju u obliku atributa i metoda. Atributi su neka staticka svojstva objekta.
 Npr. student moze da se opise kao niz atributa: broj indeksa, niz ocena, prosek...
 Metode predstavljaju dinamicku prirodu objekta tj. sta taj objekat moze da radi.
 Npr. student moze da polaze ispit i da dobije neku ocenu.
 
 */
let ljubimac = {
    ime: "Vucko",
    rasa: "Nemacki ovcar",
    godine: 6,
    ispisi: function(){
        console.log("Pas se zove " + this.ime + " i ima "+this.godine + " godina");
    },
    sta_radi: () => {
        console.log("laje");
    }
};

console.log(ljubimac);
console.log("postoji nekoliko nacina pristupa atributima");
console.log(ljubimac.ime);
console.log(ljubimac["ime"]);
var name = "ime";
console.log(ljubimac[name]);
console.log("ali ne moze ovako", ljubimac.name);
console.log("metodama se uvek pristupa sa . ");
ljubimac.ispisi();
ljubimac.sta_radi();
console.log("iteracija kroz kljuceve objekta");

for(let kljuc in ljubimac){
    if(typeof ljubimac[kljuc] !== "function"){
        console.log(kljuc, ljubimac[kljuc]);
        console.log("ali ne i ", ljubimac.kljuc);
    }
}
/*Objekti su veoma dinamicni u js-u. Mozemo da dodajemo metode i atribute iako one prethodno
 nisu definisane*/

ljubimac.pedigre = false;
ljubimac.voli = function() {
    console.log(this.ime + " voli mene");
}

console.log(ljubimac.pedigre);

ljubimac.voli();

/*Isto tako mogu da se brisu metode i atribute iz objekta uz pomoc kljucne reci delete*/
console.log("pre brisanja");

for(let kljuc in ljubimac){
    if(typeof ljubimac[kljuc] !== "function"){
        console.log(kljuc, ljubimac[kljuc]);
    }else
        console.log(kljuc);
}

delete ljubimac.voli;
delete ljubimac.pedigre;

console.log("posle brisanja");

for(let kljuc in ljubimac){
    if(typeof ljubimac[kljuc] !== "function"){
        console.log(kljuc, ljubimac[kljuc]);
    }else
        console.log(kljuc);
}

