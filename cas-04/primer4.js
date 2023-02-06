/*
 Veliki deo klijentske aplikacije je manipulacija i prikazivanje podataka, koje je server poslao, 
 korisnicima aplikacije.
 To zahteva i neku dodatnu manipulaciju DOM stabla kao sto su dodavanje,brisanje i zamena 
 odgovarajucih cvorova.
 
*/

let div_glavni = document.getElementById("glavni");

let novi_div = document.createElement("div");
novi_div.style.width = "200px";
novi_div.style.height = "200px";
novi_div.style.backgroundColor = "rgb(20, 170, 50)";
let novi_pasus = document.createElement("p");
let novi_pasus_text = document.createTextNode("Sadrzaj vestackog 'p' elementa");
let pasus_za_brisanje = document.createElement("p");
let pasus_za_brisanje_text = document.createTextNode("Ovo ce da bude obrisano");
div_glavni.appendChild(novi_div);
novi_div.appendChild(novi_pasus);
novi_pasus.appendChild(novi_pasus_text);
novi_div.appendChild(pasus_za_brisanje);
pasus_za_brisanje.appendChild(pasus_za_brisanje_text);

novi_div.removeChild(pasus_za_brisanje); //sva deca prosledjenog cvora se brisu.




