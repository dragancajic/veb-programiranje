/*
 * Prvi primer JavaScript-a
 * JavaScript je dinamički tipiziran jezik koji se interpretira u 
 * pregledaču. Nije neophodno prevođenje koda koji je pisan u js-u.
 * U js-u ne postoje tipovi kao što su postojali u C-u ili Javi.
 * Standardni izlaz je console. To je jedan objekat koji predstavlja
 * konzolu pregledača ili terminal pregledača. Konzoli se pristupa na 
 * nekoliko načina:
 * 
 * -Jedan način je desni klik i opcija Inspect element ili samo Inspect
 * -Drugi način je preko pregledača, odnosno menu-ja.
 * 
 * Kako bi se neka poruka ispisala na konzoli potrebno je da se pozove
 * metoda log(arg1,..., argN).  
 * JavaScript daje dinamiku stranicama, ali je programski jezik za razliku 
 * od HTML-a i CSS-a. 
 * U ovom primeru prolazi se kroz nekoliko načina ispisa.
 * Pored console.log() postoji i često se koristi window.alert()
 */
console.log("Jedan nacin ispisa je sa dvostrukim navodnicima \"\" ");
console.log('Drugi nacin ispisa je sa jednostrukim navodnicima \'\' ');
console.log("Moguća je mešavina navodnika ' ' kao i latinična slova azbuke. ");
console.log(`Treci nacin ispisa je sa iskosenim navodnicima koji predstavljaju i sablonske navodnike


jer dozvoljavaju nove redove i moguce je da dokazemo da je 2+2=${2+2}`);
console.log(1, 2, 3, 5, "niza nekih argumenata", true, false, null);
console.log("Moguce je "+"spajanje "+"niski uz pomoc znaka" + "+");
