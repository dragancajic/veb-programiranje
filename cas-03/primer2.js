/*
 * Kao i u C-u postoje tipovi koje promenljive mogu da imaju
 * međutim, njih ne moramo eksplicitno da navedemo.
 * Sve deklaracije i definicije promenljivih se navode uz pomoć
 * ključnih reči var, let i const. Sve su globalnog tipa ali se različito ponašaju i dometi su im različiti.
 * var je najpopustljiviji specifikator, važi u svakom bloku (nešto što je 
 * između vitičastih zagrada).
 * let je restriktivniji jer je vezan za određeni blok u kome je definisan.
 * const je najrestriktivniji jer podrazumeva da prilikom definicije ujedno 
 * i deklariše promenljiva i ona ne sme da se menja.
 * Tipovi koje promenljive imaju su number, string, bool, function...
 * Brojevi koji mogu da se koriste su ili celobrojni ili razlomljeni.
 * Karakteri isto spadaju u stringove, ne postoji poseban tip koji ih čuva.
 * Potrebna je dodatna pažnja kod implicitnih konverzija jer js pokušava da
 * dodeli smisao izrazu iako je on možda semantički pogrešan
 * Vrednosti koje se izdvajaju od ostalih su null i undefined. 
 * 
*/
var x = 9;
let y = 10.8;
const z = "Niska koja ne sme da se menja";
console.log(x, y, z);
console.log(typeof x, typeof y, typeof z);
if(x==9){
    var x =10;
    let y = true;
    console.log("x i y su predefinisani i bice x=", x, "y=", y);
}
console.log("Isto vazi i ovde x = ",x,",ali ne i y=", y);
console.log("Neke zanimljive konverzije");
console.log("1"+x);
console.log(x+"1");
console.log(x-'1');
console.log('1'-x);
console.log(7*null);
let i=0;
while(i<10){
    console.log(i);
    i++;
}

for(let i=0; i<10; i++){
    console.log(i+1);
    i+=1;
}




















