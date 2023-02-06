/*
 * Nizovi su drugačiji od C nizova, zato što mogu da budu mešoviti
 * tj. elementi ne moraju da budu istog tipa.
 * 
 */
let niz = [1, 2, 3, 4];
console.log(niz);
let mesoviti_niz=[1, "niska", 9.2, null, false];
console.log(mesoviti_niz);

for(let i=0; i<niz.length; i++){
    console.log(niz[i]);
}

for(let element of niz){
    console.log(element);
}

let niz_niski = ["Veb", "Programiranje"];
let spojena = niz_niski.join(" ");
console.log("Niska koja je nastala spajanjem elemenata niza: ",spojena);
//Sve operacije sa niskama prave nove niske i ne menjanju prvobitnu ukoliko programer nije tako definisao
console.log("Niz nastao razdvajanjem niske po razmaku ' '", spojena.split(' '));
console.log("Podniska ", spojena.slice(2,6));//[od, do)
console.log("Pozicija podniske gram ", spojena.indexOf('gram'));
console.log("Karakter na poziciji 6 ", spojena.charAt(6));
